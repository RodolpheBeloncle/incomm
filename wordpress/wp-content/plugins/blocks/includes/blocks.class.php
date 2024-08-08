<?php


class Blocks {
  public function __construct() {
    if (!function_exists('register_block_type')) {
      return;
    }
  
    require_once plugin_dir_path(__FILE__) . 'functions/RegisterBlocks.php';
    require_once plugin_dir_path(__FILE__) . 'functions/CustomVariations.php';
    require_once plugin_dir_path(__FILE__) . 'functions/CustomVariationsBlocks.php';
    require_once plugin_dir_path(__FILE__) . 'functions/RegisterBlocksJavascript.php';
    require_once plugin_dir_path(__FILE__) . 'functions/AutomaticRecuperationBlockGutenberg.php';
    // Permet de désactiver les notifications de récupération de blocs
    add_filter( 'block_validity', '__return_true' );

  }
} 

function extend_core_blocks_enqueue_block_editor()
{
  $blocks = [
    'image'
  ];

  function loadJavascriptCoreBlocksRender($folder, $file)
  {
    wp_enqueue_script(
      'extend_core_blocks_enqueue_block_editor_script' . $file,
      plugins_url('javascript-blocks-render/blocks-render-javascript/' . $folder . '/' . $file . '.js', __FILE__),
      array('wp-blocks', 'wp-element', 'wp-plugins', 'wp-edit-post', 'wp-components', 'wp-compose', 'wp-data'),
      filemtime(plugin_dir_path(__FILE__) . 'javascript-blocks-render/blocks-render-javascript/' . "image" . '/' . "image" . '.js'),
      true
    );
  }

  foreach ($blocks as $block) loadJavascriptCoreBlocksRender($block, $block);
}
add_action('enqueue_block_editor_assets', 'extend_core_blocks_enqueue_block_editor');
