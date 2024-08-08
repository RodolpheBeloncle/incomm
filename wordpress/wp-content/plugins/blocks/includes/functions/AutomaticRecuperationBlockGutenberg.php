<?php

function automatic_recuperation_block_gutenberg() {
  if (is_admin()) {
    wp_enqueue_script('automatic-recuperation-block-gutenberg', plugin_dir_url(__FILE__) . '../automaticRecuperationBlockGutenberg.js', array('jquery'), null, true);
  }
}
add_action('admin_enqueue_scripts', 'automatic_recuperation_block_gutenberg');
