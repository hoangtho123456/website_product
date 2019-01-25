<?php
/*
Template Name: news
*/
get_header()
?>
<div class="c-headpage">
  <h2 class="c-title">ニュース・お知らせ</h2>
</div>

<div class="p-news__content">
  <div class="l-container">
    <?php echo do_shortcode('[multitab_ajax per_page="10"]'); ?>
  </div>
</div>
<?php get_footer() ?>
