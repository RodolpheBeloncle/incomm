<?php

get_header();
?>
<style>
.recette-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.recette-titre {
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.recette-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.recette-temps {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.recette-ingredients h2, .recette-etapes h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.recette-ingredients ul {
  list-style-type: disc;
  padding-left: 20px;
}

.recette-ingredients li {
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
}

.recette-etapes {
  line-height: 1.6;
  font-size: 18px;
  color: #555;
}
</style>

<?php

if (have_posts()) :
  while (have_posts()) : the_post();

    // Récupérer les champs ACF ou autres champs personnalisés
    $image_url = get_field('illustration_recette');
    $ingredients = get_field('liste_des_ingredients');
    $temps_de_cuisson = get_field('temps_de_cuisson');
    $etapes = get_field('etapes');

    echo '<div class="recette-detail">';
    echo '<h1 class="recette-titre">' . get_the_title() . '</h1>';

    if ($image_url) {
      echo '<div class="recette-image"><img src="' . esc_url($image_url) . '" alt="' . get_the_title() . '"></div>';
    }

    if ($temps_de_cuisson) {
      echo '<p class="recette-temps"><strong>Temps de cuisson :</strong> ' . esc_html($temps_de_cuisson) . '</p>';
    }

    if ($ingredients) {
      echo '<h2>Ingrédients</h2>';
      echo '<ul class="recette-ingredients">';
      foreach ($ingredients as $ingredient) {
        echo '<li>' . esc_html($ingredient['ingredient']) . '</li>';
      }
      echo '</ul>';
    }

    if ($etapes) {
      echo '<h2>Étapes</h2>';
      echo '<div class="recette-etapes">' . $etapes . '</div>';
    }

    echo '</div>';

  endwhile;
else :
  echo '<p>Aucune recette trouvée.</p>';
endif;

get_footer();
