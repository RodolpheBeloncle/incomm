<?php

/** Le réglage est il sticky ? */
function isStickySettings() {
  return isMinimalSettings('breadcrumbInStickyMenu') ?? false;
}

/** Retourne le nom de la Home page en fonction de la langue */
function get_home_page_name() {
  /** Si Polylang activé  */
  if (function_exists('pll_current_language')) {
    $lang = pll_current_language();
    if ($lang == 'fr') return 'Accueil';
    if ($lang == 'en') return 'Home';
    if ($lang == 'es') return 'Inicio';
  } else return 'Accueil';
}

/** Récupérer le sous-domaine. Tester Si Polylang activé et si le réglage est sous-domaine */
function get_subdomain() {
  if (function_exists('pll_current_language')) {
    $polylangSettings = get_option('polylang');
    $isSubdomain = isset($polylangSettings['force_lang']) && $polylangSettings['force_lang'] == 2;
    if ($isSubdomain) {
      $lang = pll_current_language();
      if ($lang == 'fr') return 'fr.';
      if ($lang == 'en') return 'en.';
      if ($lang == 'es') return 'es.';
    } else return '';
  } else return '';
}

/** Retourne le nom de la page des Actualités en fonction de la langue */
function get_actualites_page_name() {
  /** Si Polylang activé  */
  if (function_exists('pll_current_language')) {
    $lang = pll_current_language();
    if ($lang == 'fr') return 'Actualités';
    if ($lang == 'en') return 'News';
    if ($lang == 'es') return 'Noticias';
  } else return 'Actualités';
}

function display_breadcrumbs($class) {
  global $post;
  $homeLink = home_url('/');
  /** Ajouter le $lang après http(s):// */
  $homeLink = str_replace('://', '://' . get_subdomain(), $homeLink);
  $separator = ' &raquo; ';
  $breadcrumb = '';

  /** Si c'est pas la page d'accueil on affiche le breadcrumb */
  if (!is_front_page()) {
    $sticky = isStickySettings();
    $breadcrumb .= '<div class="breadcrumbs-wrapper custom' . ($sticky ? ' sticky ' : '') . $class . '">';
    $breadcrumb .= '<nav class="breadcrumbs container-body">';
    $breadcrumb .= '<a href="' . $homeLink . '">' . get_home_page_name() . '</a>' . $separator;

    if (is_404()) $breadcrumb .= '<span>404</span>';
    else if (is_page()) {
      if ($post->post_parent) {
        $parent_id  = $post->post_parent;
        $breadcrumbs = array();
        while ($parent_id) {
          $page = get_page($parent_id);
          $breadcrumbs[] = '<a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
          $parent_id  = $page->post_parent;
        }
        $breadcrumbs = array_reverse($breadcrumbs);
        foreach ($breadcrumbs as $crumb) $breadcrumb .= $crumb . $separator;
      }
      $breadcrumb .= '<span>' . get_the_title() . '</span>';
    } else if (is_home()) $breadcrumb .= '<span>' . get_actualites_page_name() . '</span>';
    else if (is_tax()) { // Taxonomie (produits)
      $term = get_queried_object();
      $term_id = $term->term_id;
      $taxonomy = $term->taxonomy;
      $ancestors = array_reverse(get_ancestors($term_id, $taxonomy)); // Obtenir les ancêtres et inverser le tableau

      // Ajouter chaque ancêtre au breadcrumb
      foreach ($ancestors as $ancestor) {
        $ancestor_term = get_term($ancestor, $taxonomy);
        $breadcrumb .= '<span><a href="' . get_term_link($ancestor_term) . '">' . $ancestor_term->name . '</a></span>';
        $breadcrumb .= ' &raquo; ';
      }

      // Ajouter le terme courant
      $breadcrumb .= '<span>' . $term->name . '</span>';
    } else if (is_singular('product')) { // Un Produit
      $product_id = get_the_ID();
      $product_terms = wp_get_post_terms($product_id, 'product_cat');

      if (!empty($product_terms)) {
        // Utilisez le premier terme pour cet exemple, mais vous pouvez ajuster cela comme vous le souhaitez
        $term = $product_terms[0];
        $term_id = $term->term_id;
        $taxonomy = $term->taxonomy;
        $ancestors = array_reverse(get_ancestors($term_id, $taxonomy)); // Obtenir les ancêtres et inverser le tableau

        // Ajouter chaque ancêtre au breadcrumb
        foreach ($ancestors as $ancestor) {
          $ancestor_term = get_term($ancestor, $taxonomy);
          $breadcrumb .= '<span><a href="' . get_term_link($ancestor_term) . '">' . $ancestor_term->name . '</a></span>';
          $breadcrumb .= ' &raquo; ';
        }

        // Ajouter le terme courant
        $breadcrumb .= '<span><a href="' . get_term_link($term) . '">' . $term->name . '</a></span>';
        $breadcrumb .= ' &raquo; ';
      }

      // Ajouter le nom du produit
      $breadcrumb .= '<span>' . get_the_title() . '</span>';
    } else if (is_search()) {
      if (is_search()) {
        if (function_exists('pll_current_language')) {
          $lang = pll_current_language();
          if ($lang == 'fr') $breadcrumb .= '<span>Résultats trouvés pour &quot;</span>' . get_search_query() . '&quot;';
          if ($lang == 'en') $breadcrumb .= '<span>Results found for &quot;</span>' . get_search_query() . '&quot;';
          if ($lang == 'es') $breadcrumb .= '<span>Resultados encontrados para &quot;</span>' . get_search_query() . '&quot;';
        } else $breadcrumb .= '<span>Résultats trouvés pour &quot;</span>' . get_search_query() . '&quot;';
      }
    } else if (function_exists('is_shop') && is_shop()) {
      if (function_exists('pll_current_language')) {
        $lang = pll_current_language();
        if ($lang == 'fr') $breadcrumb .= '<span>Boutique</span>';
        if ($lang == 'en') $breadcrumb .= '<span>Shop</span>';
        if ($lang == 'es') $breadcrumb .= '<span>comercio</span>';
      } else $breadcrumb .= '<span>Boutique</span>';
    } else if (is_category()) {
      $categories = get_the_category();
      $output = '';
      if ($categories) {
        $category = get_queried_object();
        $output = '<a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a>';
      }
      $breadcrumb .= trim($output, $separator);
    } else if (is_single()) {
      $categories = get_the_category();
      $output = '';
      if ($categories) {
        // Utiliser la catégorie principale si Yoast SEO est installé
        if (class_exists('WPSEO_Primary_Term')) {
          $wpseo_primary_term = new \WPSEO_Primary_Term('category', get_the_ID());
          $primary_term_id = $wpseo_primary_term->get_primary_term();
          $primary_term = get_term($primary_term_id);
          if (!is_wp_error($primary_term)) $output .= '<a href="' . get_category_link($primary_term->term_id) . '">' . $primary_term->name . '</a>' . $separator;
          else {
            // Si aucune catégorie principale n'est définie, utiliser la première catégorie
            $category = $categories[0];
            $output .= '<a href="' . get_category_link($category->term_id) . '">' . $category->cat_name . '</a>' . $separator;
          }
        } else {
          // Si Yoast SEO n'est pas installé, utiliser la première catégorie
          $category = $categories[0];
          $output .= '<a href="' . get_category_link($category->term_id) . '">' . $category->cat_name . '</a>' . $separator;
        }
      }
      $breadcrumb .= trim($output, $separator);
      $breadcrumb .= $separator . '<span>' . get_the_title() . '</span>';
    }
    $breadcrumb .= '</nav>';
    $breadcrumb .= '</div>';
  }
  return $breadcrumb;
}

/**
 * Structure du nom de la fonction toujours ainsi
 * dynamicBlockRender + nom du block en camelCase
 */
function dynamicBlockRenderBreadcrumb($attributes) {
  $class = $attributes['class'] ?? '';
  return display_breadcrumbs($class);
}
