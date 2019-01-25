<?php
/*Template Name: Service*/
?>

<?php get_header(); ?>

<main class="p-service">
  <?php
    while(have_posts()) : the_post();
      the_content();
    endwhile;
  ?>
</main>

<?php get_footer(); ?>
