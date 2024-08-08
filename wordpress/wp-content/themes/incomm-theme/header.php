<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php if (function_exists('wp_site_icon')) {
    wp_site_icon();
  } ?>
  <title><?php wp_title('|', true, 'right'); ?></title>
  <?php wp_head(); ?>
  <style>
    #header-principale {
      background-color: #f8f8f8;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .site-branding {
      text-align: center;
      margin-bottom: 20px;
    }

    .site-branding h1 {
      font-size: 28px;
      color: #333;
    }

    #site-navigation {
      text-align: center;
    }

    #site-navigation ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    #site-navigation ul li {
      display: inline-block;
      margin: 0 15px;
    }

    #site-navigation ul li a {
      text-decoration: none;
      font-size: 18px;
      color: #555;
    }

    #site-navigation ul li a:hover {
      color: #000;
    }
  </style>
</head>

<body <?php body_class(); ?>>
  <header id="header-principale">
    <div class="site-branding">
      <?php
      if (has_custom_logo()) {
        the_custom_logo();
      } else {
        echo '<h1>' . get_bloginfo('name') . '</h1>';
      }
      ?>
    </div>
    <nav id="site-navigation">
      <?php
      wp_nav_menu(array(
        'theme_location' => 'menu-1',
        'menu_id'=> 'primary-menu',
      ));
      ?>
    </nav>
  </header>