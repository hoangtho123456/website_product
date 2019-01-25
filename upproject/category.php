<?php get_header() ?>

<main class="p-news">
  <div class="c-breadcrumb">
    <div class="l-container">
      <a href="<?php echo get_home_url(); ?>">Home</a>
      <a href="<?php the_permalink(223); ?>"><?php echo get_the_title(223); ?></a>
      <span><?php single_cat_title(); ?></span>
    </div>
  </div>

  <div class="c-headpage">
    <h2 class="c-title"><?php echo get_the_title(223); ?></h2>
  </div>

  <div class="p-news__content">
    <div class="l-container">
      <?php if(have_posts()): ?>
      <?php while(have_posts()) : the_post(); ?>
        <?php getAllPost_dangtho_demo(); ?>
      <?php endwhile; ?>
      <?php else: ?>
      <?php _e('Sorry'); ?>
      <?php endif; ?>
      <div class="c-pagination">
        <?php
          global $wp_query;
          $big = 999999999; // need an unlikely integer
          $html = paginate_links( array(
            'paged' =>  ( get_query_var('paged') ) ? absint(get_query_var('page')) : 1,
            'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
            'total' => $wp_query->max_num_pages,
            'show_all' => false,
            'prev_next' => true,
            'prev_text' => __(""),
            'next_text' => __("")
          ));
          echo $html;
        ?>
      </div>
    </div><!-- end -->
  </div><!-- end -->

</main>
<?php get_footer(); ?>
