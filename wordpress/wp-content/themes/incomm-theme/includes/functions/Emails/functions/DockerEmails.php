<?php

namespace OcadeMinimal;

if (isset($_SERVER) && isset($_SERVER['HTTP_HOST'])) {
  /** Envoie email via SMTP local uniquement si url contient docker.localhost (environnement Docker) via le container mailhog */
  if (strpos($_SERVER['HTTP_HOST'], 'docker.localhost') !== false) {
    add_action('phpmailer_init', function($phpmailer) {
      $phpmailer->isSMTP();
      $phpmailer->Host = 'mailhog';
      $phpmailer->Port = 1025;
      $phpmailer->SMTPAuth = false;
      $phpmailer->SMTPSecure = false;
    });
  }
}