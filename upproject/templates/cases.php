<?php
/*
Template Name: cases
*/
get_header()
?>

<main class="p-cases">
  <div class="c-breadcrumb">
    <div class="l-container">
      <a href="<?php echo get_home_url(); ?>">Home</a>
      <span><?php the_title(); ?></span>
    </div>
  </div>
  <div class="c-headpage">
    <div class="l-container2">
      <h2 class="c-title"><?php the_title(); ?></h2>
      <p>関与した企業さま、個人のお客様に対し、ひかり税理士法人が提供したサービスと、どのような成果が得られたか、その一部をご紹介いたします。</p>
    </div>
  </div>

  <div class="p-cases__content">
    <div class="l-container2">
      <?php
        $query = new WP_query(array(
          'post_type'=>'success',
          'posts_per_page'=>6,
          'post_status'=>'public',
          'paged' => get_query_var('paged')));
      ?>
      <?php if($query->have_posts()): ?>
        <?php while($query->have_posts()) : $query->the_post(); ?>
          <div class="c-listpost2">
            <div class="c-listpost2__thumb">
              <?php
                // Post thumbnail.
                the_post_thumbnail('full', array('class' => 'img-fluid rounded'));
              ?>
            </div>
            <div class="c-listpost2__info">
              <a href="" class="cat">法人のお客様</a>
              <h3 class="titlepost"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <p class="desc">
                <?php
                  $coop = get_field('case_title', get_the_ID());
                  if($coop): ?>
                    <?php echo $coop; ?>
                <?php endif; ?>
              </p>
              <p class="name">
                <?php
                  $coop = get_field('case_name', get_the_ID());
                  if($coop): ?>
                    <?php echo $coop; ?>
                <?php endif; ?>
              </p>

              <div class="c-btn">
                <a href="<?php the_permalink(); ?>">詳しく見る</a>
              </div>
            </div>
          </div>
        <?php endwhile; wp_reset_postdata(); ?>
      <?php else: ?>
        <h1>Cand find post!</h1>
      <?php endif; ?>
    </div>

    <div class="c-pagination">
      <?php
        pagination_cat_dangtho($query);
      ?>
    </div>
  </div>
</main>

<?php get_footer() ?>
