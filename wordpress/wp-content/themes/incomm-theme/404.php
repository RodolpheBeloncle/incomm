<?php
get_header();

?>
<style>
.page-404 {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.page-404 h1 {
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
}

.page-404 p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.page-404 a {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #0073aa;
  text-decoration: none;
  border-radius: 4px;
}

.page-404 a:hover {
  background-color: #005177;
}

.page-404 img {
  max-width: 100%;
  height: auto;
  margin-top: 30px;
  border-radius: 8px;
}
</style>

<?php

$args = array(
  'post_type' => '404',
  'posts_per_page' => 1,
  'post_status' => 'publish',
  'orderby' => 'date',
  'order' => 'DESC'
);
$query = new WP_Query($args);

if ($query->have_posts()) :
  while ($query->have_posts()) : $query->the_post();
    echo '<div class="page-404">';
    the_content();
    echo '</div>';
  endwhile;
else :
  echo '<div class="page-404">';
  echo '<h1>Page non trouvée</h1>';
  echo '<p>Il semble que nous ne puissions pas trouver ce que vous cherchez. Peut-être qu\'une recherche peut aider.</p>';
  echo '<a href="' . esc_url(home_url('/')) . '">Retour à la page d\'accueil</a>';
  echo '</div>';
endif;

get_footer();
