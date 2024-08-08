<?php


/** Fichiers javascripts permettant d'ajouter du code javascript dans la page afin de modifier le comportement des blocks */
function loadJavascriptBlocksRender ($folder, $file) {
  /** Slugifier le name */
  $slug = strtolower($file);
  wp_enqueue_script(
    $slug,
    plugins_url('../javascript-blocks-render/blocks-render-javascript/'. $folder . '/' . $file . '.js', __FILE__),
    array( 'wp-blocks', 'wp-dom' ),
    filemtime( plugin_dir_path(__FILE__) . '../javascript-blocks-render/blocks-render-javascript/'. $folder . '/' . $file . '.js' ),
    true
  );
}


add_action( 'wp_enqueue_scripts', function () {
  if ( is_singular() ) {
    $post = get_post();
    if ( has_block( 'ocade-blocks/table', $post ) ) {
      loadJavascriptBlocksRender('table', 'table'); /** Dans le dossier "../javascript-blocks-render/blocks-render-javascript", je récupère le dossier = 'table', fichier = 'table.js'. Permet de charger le javascript pour le bloc. */
    }
    if (has_block( 'core/gallery', $post )) {
      loadJavascriptBlocksRender('gallery', 'gallery'); /** Dans le dossier "../javascript-blocks-render/blocks-render-javascript", je récupère le dossier = 'gallery', fichier = 'gallery.js'. Permet de charger le javascript pour le bloc. */
    }
  }
});