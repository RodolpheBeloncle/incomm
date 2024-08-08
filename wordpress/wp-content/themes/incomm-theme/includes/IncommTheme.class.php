<?php

class IncommTheme { 
  public function __construct() { 
    $this->loadOneTime(); 
    $this->loadAllTime();
  }

  /** Appliqué uniquement au moment où le Thème est activé */
  private function loadOneTime() {
    /** Ajout de la clé ACF PRO */
    require_once get_template_directory() . '/includes/functions/Initialisation/AcfPro.php';
  }

  /** Action effectuées tout le temps */
  private function loadAllTime() {
 
 

    /** Envoie emails SMTP (notament pour l'environnement Docker) */
    require_once get_template_directory() . '/includes/functions/Emails/functions/DockerEmails.php';

    /** Déclarer le CPT header */
    require_once get_template_directory() . '/includes/functions/Modeles/cpt-header.php';
    /** Déclarer le CPT recettes */
    require_once get_template_directory() . '/includes/functions/Modeles/cpt-recettes.php';

    /** Déclarer le CPT footer */
    require_once get_template_directory() . '/includes/functions/Modeles/cpt-footer.php';
    /** Déclarer le CPT 404 */
    require_once get_template_directory() . '/includes/functions/Modeles/cpt-404.php';
  }
}