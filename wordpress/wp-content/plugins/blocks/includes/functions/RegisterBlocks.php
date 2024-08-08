<?php

/** Rendu des blocs dynamiques en PHP */
function register_dynamic_blocks($dynamicBlocks)
{
  foreach ($dynamicBlocks as $block) {
    $block = str_replace('blocks/', '', $block);

    // Vérifiez que le fichier de rendu existe avant de l'inclure
    $block_file = plugin_dir_path(__FILE__) . '../dynamic-blocks-render/' . $block . '.php';
    if (file_exists($block_file)) {
      require_once($block_file);
      $settings = [
        'render_callback' => 'dynamicBlockRender' . str_replace('-', '', ucwords($block, '-'))
      ];
      $path_to_block_folder = plugin_dir_path(__FILE__) . '../../build/' . $block;

      if (is_dir($path_to_block_folder)) {
        register_block_type_from_metadata($path_to_block_folder, $settings);
      } else {
        error_log("Le dossier du bloc n'existe pas : " . $path_to_block_folder);
      }
    } else {
      error_log("Le fichier de rendu du bloc n'existe pas : " . $block_file);
    }
  }
}

/** Rendu des blocs normaux */
function register_blocks($blocks)
{
  foreach ($blocks as $block) {
    $block = str_replace('blocks/', '', $block);
    $block_folder = plugin_dir_path(__FILE__) . '../../build/' . $block;

    // Vérifiez si le dossier du bloc existe avant de l'enregistrer
    if (is_dir($block_folder)) {
      register_block_type($block_folder);
    } else {
      error_log("Le dossier du bloc n'existe pas : " . $block_folder);
    }
  }
}

/** Liste des blocs activés OCADE */
function getBlocksList()
{
  $blocks_list = [
    "blocks" => [],
    "blocks-dynamics" => [
      "blocks/breadcrumb",


    ]
  ];

  return [
    'blocks' => $blocks_list['blocks'],
    'blocks_dynamics' => $blocks_list['blocks-dynamics']
  ];
}

/** Fonctions exécutées */
add_action('init', function () {
  $blocksList = getBlocksList();
  register_blocks($blocksList['blocks']);
  register_dynamic_blocks($blocksList['blocks_dynamics']);
});

/** Enqueue CSS file FRONT END */
function enqueue_styles()
{
  $styles_url = plugin_dir_url(__FILE__) . '../../build/styles.min.css';
  wp_enqueue_style(
    'block-style',         // Handle
    $styles_url,           // Source
    [],                    // Dependencies
    filemtime(plugin_dir_path(__FILE__) . '../../build/styles.min.css')  // Version
  );
}
add_action('wp_enqueue_scripts', 'enqueue_styles'); // For frontend

/** Enqueue CSS file GUTENBERG EDITOR */
function enqueue_styles_editor()
{
  $styles_url = plugin_dir_url(__FILE__) . '../../build/styles.min.css';
  $editors_url = plugin_dir_url(__FILE__) . '../../build/editors.min.css';
  wp_enqueue_style(
    'style-editor-styles',         // Handle
    $styles_url,           // Source
    ['wp-edit-blocks'],   // Dependencies
    filemtime(plugin_dir_path(__FILE__) . '../../build/styles.min.css')  // Version
  );
  wp_enqueue_style(
    'block-style-editor-editors',  // Handle
    $editors_url,           // Source
    ['wp-edit-blocks'],   // Dependencies
    filemtime(plugin_dir_path(__FILE__) . '../../build/editors.min.css')  // Version
  );
}
add_action('enqueue_block_editor_assets', 'enqueue_styles_editor'); // For block editor
