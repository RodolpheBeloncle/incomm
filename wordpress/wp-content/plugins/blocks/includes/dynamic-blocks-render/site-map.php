<?php


// Récupération des catégories et des articles celon les paramètres
function fetch_categories_and_posts($excludedCategories, $excludedArticles)
{
  $categories = get_terms(['taxonomy' => 'category', 'hide_empty' => false]);
  return organize_categories_hierarchy($categories, 0, $excludedCategories, $excludedArticles);
}


// Organisation des catégories et des articles en hierarchie
function organize_categories_hierarchy($categories, $parent_id, $excludedCategories, $excludedArticles)
{
  $output = [];

  foreach ($categories as $category) {
    if ($category->parent == $parent_id && !isset($excludedCategories[$category->term_id])) {
      $children = organize_categories_hierarchy($categories, $category->term_id, $excludedCategories, $excludedArticles);

      $category_posts = get_posts([
        'post_type' => 'post',
        'posts_per_page' => -1,
        'category__in' => [$category->term_id],
        'post__not_in' => array_keys($excludedArticles)
      ]);

      $output[] = [
        'category' => $category,
        'posts' => $category_posts,
        'children' => $children
      ];
    }
  }

  return $output;
}


// Organisation hierarchique des customs posts types
function organize_posts_hierarchy($posts, $parent_id = 0)
{
  $output = [];

  foreach ($posts as $post) {
    if ($post->post_parent == $parent_id) {
      $children = organize_posts_hierarchy($posts, $post->ID);
      $output[] = [
        'post' => $post,
        'children' => $children
      ];
    }
  }

  return $output;
}


// Récupère les customs posts type selon le type de post et la liste à exclure
function fetch_and_organize_cpt_posts($cptSlug, $excludedCPTItems)
{
  $excludedPostIDs = array_keys($excludedCPTItems);

  $cptPosts = get_posts([
    'post_type' => $cptSlug,
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'orderby' => 'menu_order',
    'order' => 'ASC',
    'post__not_in' => $excludedPostIDs
  ]);

  $organizedPosts = [];

  foreach ($cptPosts as $post) {
    $organizedPosts[$post->ID] = $post;
    $organizedPosts[$post->ID]->children = [];
  }

  foreach ($cptPosts as $post) {
    if (in_array($post->ID, $excludedPostIDs)) continue;

    if ($post->post_parent > 0 && isset($organizedPosts[$post->post_parent])) $organizedPosts[$post->post_parent]->children[] = $post;
  }

  return array_filter($organizedPosts, function ($post) {
    return $post->post_parent == 0;
  });
}


// rendu des customs post types
function renderCPTPosts($posts, $openInNewTab, $level = 0)
{
  $html = '<ul class="cpt-posts-list level-' . $level . '" style="margin-left: ' . (20 * $level) . 'px;">';
  $target = $openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';

  foreach ($posts as $post) {
    $html .= '<li class="cpt-post-item" style="margin-left: ' . (20 * $level) . 'px;">';
    $html .= '<a href="' . esc_url(get_permalink($post->ID)) . '"' . $target . '>' . esc_html($post->post_title) . '</a>';

    // Vérifier et traiter les enfants du post
    if (!empty($post->children) && is_array($post->children)) $html .= renderCPTPosts($post->children, $openInNewTab, $level + 1);  // Appel récursif pour traiter les enfants

    $html .= '</li>';
  }

  $html .= '</ul>';
  return $html;
}


// rendu des articles par catégorie
function render_category_posts($categories, $openInNewTab, $showPosts, $level = 0)
{
  $target = $openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
  $html = '<ul class="category-posts-list level-' . $level . '" style="margin-left: ' . (20 * $level) . 'px;">';

  foreach ($categories as $cat) {
    $cat_guid = get_term_link($cat['category']->term_id);
    $html .= '<li class="category-item">';
    $html .= '<a href="' . $cat_guid . '"' . $target . '><strong>' . esc_html($cat['category']->name) . '</strong></a>';

    // Afficher les articles si showPosts est vrai et s'il y a des articles
    if ($showPosts && !empty($cat['posts'])) {
      $html .= '<ul class="posts-list">';
      foreach ($cat['posts'] as $post) {
        $html .= '<li class="post-item">';
        $html .= '<a href="' . esc_url(get_permalink($post)) . '"' . $target . '>' . esc_html(get_the_title($post)) . '</a>';
        $html .= '</li>';
      }
      $html .= '</ul>';
    }

    // Rendu récursif pour les sous-catégories
    if (!empty($cat['children'])) $html .= render_category_posts($cat['children'], $openInNewTab, $showPosts, $level + 1);

    $html .= '</li>';
  }

  $html .= '</ul>';
  return $html;
}


// Rendu du sitemap
function dynamicBlockRenderSiteMap($attributes)
{
  $hasCPT = $attributes['hasCPT'] ?? [];
  $showPosts = $attributes['showPosts'] ?? true;
  $excludedCPTItems = $attributes['excludedCPTItems'] ?? [];
  $excludedCategories = $attributes['excludedCategories'] ?? [];
  $excludedArticles = $attributes['excludedArticles'] ?? [];
  $openInNewTab = $attributes['openInNewTab'] ?? false;

  ob_start();

  echo '<div class="wp-block-blocks-sitemap">';

  if (isset($hasCPT['post']) && $hasCPT['post']) {
    $categories_with_posts = fetch_categories_and_posts($excludedCategories, $excludedArticles);
    echo render_category_posts($categories_with_posts, $openInNewTab, $showPosts);
  }

  foreach ($hasCPT as $cptSlug => $enabled) {
    if ($enabled && $cptSlug !== 'post') {
      $organizedCPTPosts = fetch_and_organize_cpt_posts($cptSlug, $excludedCPTItems[$cptSlug] ?? []);
      echo renderCPTPosts($organizedCPTPosts, $openInNewTab);
    }
  }

  echo '</div>';
  return ob_get_clean();
}
