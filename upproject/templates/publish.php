<?php
/*
Template Name: publish
*/
get_header()
?>
<main class="p-publish">
  <div class="c-breadcrumb">
    <div class="l-container">
      <a href="<?php echo get_home_url(); ?>">Home</a>
      <span><?php the_title(); ?></span>
    </div>
  </div>
  <div class="c-headpage">
    <h2 class="c-title"><?php the_title(); ?></h2>
    <p>ひかり税理士法人では、税務・会計・経営・相続などに関する書籍の執筆を行っています。</p>
  </div>

  <div class="l-container">
    <div class="p-publish__content">
      <ul class="c-gridpost">
        <?php $query = new WP_Query(array(
        'post_type'=>'publish',
        'posts_per_page'=>12,
        'post_status'=>'public',
        'paged' => get_query_var('paged'))); ?>

        <?php if($query->have_posts()): ?>
        <?php while($query->have_posts()) : $query->the_post(); ?>
          <li class="c-gridpost__item">
            <a href="<?php the_permalink(); ?>">
              <div class="c-gridpost__thumb">
                <?php
                  // Post thumbnail.
                  the_post_thumbnail('full', array('class' => 'img-fluid rounded'));
                ?>
              </div>
              <div class="c-gridpost__info">
                <p class="datepost"><?php echo get_the_date(" Y年m月d日"); ?></p>
                <h3><?php the_title(); ?></h3>
                <p class="price">
                  <?php
                    $price = get_field('price', get_the_ID());
                    if($price): ?>
                      <?php echo $price; ?>
                  <?php endif; ?>
                </p>
                <a href="<?php the_permalink(); ?>" class="c-btnview">詳しく見る</a>
              </div>
            </a>
          </li>
        <?php endwhile; wp_reset_postdata(); ?>
      </ul>
    </div>
    <div class="c-pagination">
      <?php
        pagination_cat_dangtho($query);
      ?>
    </div>
    <?php else: ?>
      <h1>Cand find post!</h1>
    <?php endif; ?>
  </div>
</main>
<?php get_footer() ?>
