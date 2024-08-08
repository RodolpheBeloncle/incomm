<?php

namespace IncommTheme;

require_once(get_template_directory() . '/includes/functions/Modeles/Icones/icon-recettes.php');

function CPTRecettes()
{
  $labels = array(
    'name' => __('Recettes'),
    'singular_name' => __('Recettes'),
    'menu_name' => __('Recettes'),
    'all_items' => __('Toutes les modèles de recettes'),
    'add_new' => __('Ajouter un nouveau modèle de recette'),
    'add_new_item' => __('Ajouter un nouveau modèle de recette'),
    'edit_item' => __('Modifier le modèle de recette'),
    'new_item' => __('Nouveau modèle de recette'),
    'view_item' => __('Voir le modèle de recette'),
    'search_items' => __('Rechercher des modèles de recette'),
    'not_found' => __('Aucun modèle de recette trouvé'),
    'not_found_in_trash' => __('Aucun modèle de recette trouvé dans la corbeille'),
  );

  $args = [
    'public' => true, // Doit être true pour permettre l'accès public
    'publicly_queryable' => true, // Permettre les requêtes publiques
    'labels'  => $labels,
    'icon' => iconRecettes(),
    'capability_type' => 'post',
    'hierarchical' => false,
    'rewrite' => array('slug' => 'recettes'),
    'query_var' => true,
    'menu_icon' => iconRecettes(),
    'supports' => array('title'),
    'map_meta_cap' => true,
    'show_in_rest' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'show_in_nav_menus' => false,
    'exclude_from_search' => true,
    'has_archive' => true,
    'can_export' => true,
    'menu_position' => 25,
  ];
  register_post_type('recettes', $args);
}

add_action('init', function () {
  CPTRecettes();
});
