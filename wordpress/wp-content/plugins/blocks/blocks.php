<?php
/**
* Plugin Name: Blocks
* Description: Plugin  Création de blocks Gutenberg Wordpress...
* Version:                   1.0.0
* Author: Rodolphe Beloncle
* License: Propriétaire
* Text Domain: blocks
*/

// S'assurer que le script est exécuté dans le contexte WordPress
defined('ABSPATH') || exit;


// Inclure la classe principale du plugin
require_once plugin_dir_path(__FILE__) . '/includes/blocks.class.php';

// Initialiser le plugin
function wp_init_blocks()
{
  new Blocks();
}

wp_init_blocks();
