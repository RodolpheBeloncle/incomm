<?php 


function getMinimalSettings($key) {
  global $wpdb;
  $table_name = 'minimal_settings';
  $query = $wpdb->prepare("SELECT `value` FROM $table_name WHERE `key_field` = %s", $key);
  $value = $wpdb->get_var( $query );
  if ($value === NULL) { return NULL; }
  return $value;
}

function setMinimalSettings($key, $value) {
  global $wpdb;
  $table_name = 'minimal_settings';
  $query = $wpdb->prepare( "UPDATE $table_name SET `value` = %s WHERE `key_field` = %s", $value, $key );
  $wpdb->query( $query );
}


function isMinimalSettings($key) {
  $value = getMinimalSettings($key);
  if ($value === NULL) { return false; }
  if ( $value == "0" || $value == "false" || $value == "" ) { return false; }
  return true;
}

function existMinimalSettings($key) {
  global $wpdb;
  $table_name = 'minimal_settings';
  
  // Préparation de la requête
  $query = $wpdb->prepare("SELECT COUNT(*) FROM $table_name WHERE `key_field` = %s", $key);
  
  // Exécution de la requête et récupération du résultat
  $count = $wpdb->get_var($query);
  
  // Si le compte est supérieur à 0, cela signifie que la clé existe
  return $count > 0;
}

function insertMinimalSettings($key, $value) {
  global $wpdb;
  $table_name = 'minimal_settings';
  if (getMinimalSettings($key) === NULL) {
    $wpdb->insert(
      $table_name,
      array(
        'key_field' => $key,
        'value' => $value
      ),
      array(
        '%s',
        '%s'
      )
    );
  }
}
