<?php

  /** Récupération du CPT footer. */
  $footer_query = new WP_Query(array(
    'post_type' => 'footer',
    'post_status' => 'publish',
    'posts_per_page' => 1,
    'limit' => 1
  ));

  if ( $footer_query->have_posts() ) { 
    while ( $footer_query->have_posts() ) { 
      $footer_query->the_post(); 
      echo '<footer>';
      the_content(); 
      echo '</footer>';
    }
    wp_reset_postdata(); 
  } ?>

  <a href="#header" title="Retour haut de page" id="go-to-top"></a>

  <?php wp_footer(); ?> 

