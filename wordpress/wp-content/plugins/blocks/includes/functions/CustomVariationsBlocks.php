<?php 


/** Fichiers javascripts permettant d'ajouter des variations sur des blocks existants (TEMPLATE DE BLOCKS) 
 * Ajoute une interface dans le BO pour ajouter des variations sur des blocks existants. (Ex: core/columns) 
 * Si loadJavascriptCustomStyle('core-button'); alors le nom du fichier doit etre "custom-core-button.js" dans le dossier javascript-blocks-render/variations-blocks.
*/
function loadJavascriptCustomStyleBlock ($folder, $name) {
  /** Slugifier le name */
  $slug = strtolower($name);
  wp_enqueue_script(
    $slug,
    plugins_url('../javascript-blocks-render/variations-blocks/' . $folder . '/custom-' . $slug . '.js', __FILE__),
    array( 'wp-blocks', 'wp-dom' ),
    filemtime( plugin_dir_path(__FILE__) . '../javascript-blocks-render/variations-blocks/' . $folder . '/custom-' . $slug . '.js' ),
    true
  );
}

add_action( 'enqueue_block_editor_assets', function () {
  loadJavascriptCustomStyleBlock('kadence/testimonials/custom-base', 'base'); /** Ajout Couleur Original svg */
});