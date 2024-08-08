<?php


define('ACF_PRO_LICENSE', 'b3JkZXJfaWQ9MTQxNTY4fHR5cGU9ZGV2ZWxvcGVyfGRhdGU9MjAxOC0xMC0wMyAxMzowNjo1Mw==');

function squarecandy_acf_pro_force_update()
{
  // Inclure les fichiers nécessaires pour exécuter une mise à jour
  include_once ABSPATH . 'wp-admin/includes/plugin.php';
  include_once ABSPATH . 'wp-admin/includes/file.php';
  include_once ABSPATH . 'wp-admin/includes/misc.php';
  include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';

  // Vérifier les mises à jour disponibles
  wp_update_plugins();

  // Forcer la mise à jour du plugin ACF Pro
  $plugin_slug = 'advanced-custom-fields-pro/acf.php';
  $current = get_site_transient('update_plugins');

  if (isset($current->response[$plugin_slug])) {
    $upgrader = new Plugin_Upgrader();
    $upgrader->upgrade($plugin_slug);
  }
}

function squarecandy_acf_pro_license_autosave()
{
  // Vérifier si le plugin ACF Pro est activé
  if (!is_plugin_active('advanced-custom-fields-pro/acf.php')) {
    return;
  }

  // Si la clé de licence est déjà enregistrée et valide, ne rien faire
  $saved_license = acf_pro_get_license_key();
  if ($saved_license && $saved_license === ACF_PRO_LICENSE) {
    return;
  }

  $post = array(
    'acf_license'   => ACF_PRO_LICENSE,
    'acf_version'   => acf_get_setting('version'),
    'wp_name'       => get_bloginfo('name'),
    'wp_url'        => home_url(),
    'wp_version'    => get_bloginfo('version'),
    'wp_language'   => get_bloginfo('language'),
    'wp_timezone'   => get_option('timezone_string'),
  );
  $response = acf_updates()->request('v2/plugins/activate?p=pro', $post);

  if (is_string($response)) {
    $response = new WP_Error('server_error', esc_html($response));
  }

  if (is_wp_error($response)) {
    wp_die($response->get_error_message());
  }

  if ($response['status'] == 1) {
    acf_pro_update_license($response['license']);
    acf_updates()->refresh_plugins_transient();
    acf_add_admin_notice($response['message'], 'success');
    // Forcer la mise à jour après l'activation de la licence
    squarecandy_acf_pro_force_update();
  } else {
    acf_add_admin_notice($response['message'], 'warning');
  }
}
add_filter('admin_init',  'squarecandy_acf_pro_license_autosave');