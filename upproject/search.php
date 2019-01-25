<?php get_header() ?>
<main class="p-topics">
  <div class="c-title c-title--page">
    <h2>SEARCH RESULTS</h2>
  </div>
  <div class="l-container">
    <?php if(have_posts()): ?>
      <ul class="p-toppics__list">
        <?php while(have_posts()) : the_post(); ?>
          <li>
              <span class="datepost"><?php echo get_the_date(" Y/m/d "); ?></span>
              <a class="cat" href="<?php addLinkCategory_dangtho(get_the_category()[0]->name); ?>" title=""><?php echo get_the_category()[0]->name; ?></a>
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </li>
        <?php endwhile; ?>
      </ul>
    <?php else: ?>
    <?php get_template_part( 'content', 'none' ); ?>
    <?php endif; ?>

    <div class="c-pnav">
      <?php
        pagination_cat_dangtho();
      ?>
    </div><!-- end c-nav -->
  </div><!-- end l-container -->
</main>
<?php get_footer() ?>
