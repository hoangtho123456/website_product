<!DOCTYPE html>
<html <?php language_attributes( ); ?>>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | <?php bloginfo( 'title' ); ?></title>
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(). '/css/style.css'; ?>">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <header class="c-header">
    <div class="l-container">
      <h1 class="c-logo">
        <a href="<?php echo get_home_url(); ?>">
          <?php the_custom_logo(); ?>
        </a>
      </h1>
      <nav class="c-gnav">
        <?php wp_nav_menu(); ?>
      </nav>
    </div>
  </header><!-- /header -->
