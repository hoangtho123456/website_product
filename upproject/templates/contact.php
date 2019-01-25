<?php
/*Template Name: Contact*/
?>

<?php get_header(); ?>

<main class="p-contact">
  <div class="c-breadcrumb">
    <div class="l-container">
      <a href="<?php echo get_home_url(); ?>">Home</a>
      <span>お問い合わせ</span>
    </div>
  </div>
  <div class="c-headpage">
    <div class="l-container2">
      <h2 class="c-title">お問い合わせ</h2>
    </div>
  </div>
  <?php
    while(have_posts()) : the_post();
      the_content();
    endwhile;
  ?>
</main>

<?php get_footer(); ?>
