<?php 


/** Fichiers javascripts permettant d'ajouter des variations sur des blocks existants  (AJOUT UN BOUTON DANS LE BO).
 * Bouton permettant d'ajout une custom class CSS sur le block. Ex: "is-style-custom-x"
 * Si loadJavascriptCustomStyle('core-button'); alors le nom du fichier doit etre "custom-core-button.js" dans le dossier javascript-blocks-render/variations.
 * Dans le BO dans les ooptions du block on doit avoir une nouvelle variation
*/
function loadJavascriptCustomStyle ($folder, $name) {
  /** Slugifier le name */
  $slug = strtolower($name);
  wp_enqueue_script(
    $slug,
    plugins_url('../javascript-blocks-render/variations/' . $folder . '/custom-' . $slug . '.js', __FILE__),
    array( 'wp-blocks', 'wp-dom' ),
    filemtime( plugin_dir_path(__FILE__) . '../javascript-blocks-render/variations/'. $folder . '/custom-' . $slug . '.js' ),
    true
  );
}

add_action( 'enqueue_block_editor_assets', function () {
  loadJavascriptCustomStyle('kadence', 'kadence-testimonials'); /** Ajout taille sur image */

  loadJavascriptCustomStyle('ocade', 'ocade-blocks-icon'); /** Ajout Couleur Original svg */
  loadJavascriptCustomStyle('ocade', 'ocade-blocks-footer-menu-item');
  loadJavascriptCustomStyle('ocade', 'ocade-blocks-card-price-toggle'); /** Centré verticalement les cards price. */
  loadJavascriptCustomStyle('ocade', 'ocade-blocks-card-price-toggle-wrapper-item'); /** Card mise en avant */

  loadJavascriptCustomStyle('wordpress', 'core-button'); /** Variation -x, Custom-x */
  loadJavascriptCustomStyle('wordpress', 'core-image'); /** Variation -x, Custom-x */
  loadJavascriptCustomStyle('wordpress', 'core-heading'); /** Variation margins paddings */
  loadJavascriptCustomStyle('wordpress', 'core-paragraph'); /** Variation margins paddings */
  loadJavascriptCustomStyle('wordpress', 'core-columns'); // Ajout de bouton pour gérer les espacements au dessus et en dessous des colonnes
  loadJavascriptCustomStyle('wordpress', 'core-media-text'); // Ajout de bouton pour gérer les espacements au dessus et en dessous des colonnes
  loadJavascriptCustomStyle('wordpress', 'core-gallery'); // Ajout de bouton pour gérer les espacements entre les images de la gallery
  loadJavascriptCustomStyle('wordpress', 'core-group'); // Ajout de bouton pour gérer les espacements entre les "section" de contenu d'importance dans le contenu
  loadJavascriptCustomStyle('wordpress', 'core-cover'); // Ajout de bouton pour gérer les espacements entre les "section" de contenu d'importance dans le contenu
  loadJavascriptCustomStyle('wordpress', 'core-list-item'); /** Checked, disabled */
});