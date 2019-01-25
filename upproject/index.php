<?php get_header(); ?>

<div class="l-mainvisual">
  <div class="mv">
    <?php
    $images = get_field('slider_img', 'options');
    $size = 'full';
    if ($images): ?>
      <?php foreach($images as $image): ?>
        <?php echo wp_get_attachment_image($image['ID'], $size); ?>
      <?php endforeach; ?>
    <?php endif; ?>
  </div>
</div>

<main class="p-home">
  <section class="service">
    <div class="l-container">
      <h2 class="c-title">
        <span>幅広い案件に対応できるひかりのワンストップサービス</span>
        目的に応じて、最適な方法をご提案できます
        <!-- <?php $copyright="Design!";
        //echo apply_filters( "dangtho_copyright", $copyright );
        ?> -->
      </h2>
      <div class="service_inner">
        <?php
          $images = get_field('service_img', 'options');
          $size = 'full';
          if($images):?>
          <?php foreach($images as $image): ?>
            <div class="service_item">
              <?php echo wp_get_attachment_image($image['ID'], $size) ?>
            </div>
          <?php endforeach; ?>
        <?php endif; ?>
      </div>
      <div class="l-btn l-btn--2btn">
        <div class="c-btn">
          <?php getBtnLinkCustomPost('btn-link1', 'options'); ?>
        </div>
        <div class="c-btn">
          <?php getBtnLinkCustomPost('btn-link2', 'options'); ?>
        </div>
      </div>
    </div>
  </section>

  <section class="news">
    <div class="l-container">
      <h2 class="c-title1">
        <span class="ja">ニュース</span>
        <span class="en">News</span>
      </h2>

      <div class="news_inner news_inner--hide-pagination">

        <?php echo do_shortcode('[multitab_ajax per_page="5"]'); ?>

        <div class="l-btn">
          <div class="c-btn c-btn--small">
            <a href="<?php echo get_home_url() . "/news"; ?>">ニュース一覧を見る</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="publish">
    <div class="l-container">
      <h2 class="c-title1">
        <span class="ja">出版物</span>
        <span class="en">Publish</span>
      </h2>
      <div class="publish_inner">
        <ul class="c-gridpost">
          <?php
            $query = new WP_Query(array('post_type'=>'publish',
              'posts_per_page'=>4,'post_status'=>'public', 'paged' => get_query_var('paged')));
            if ( $query->have_posts() ) :
          ?>
          <?php while ( $query->have_posts() ) : $query->the_post();
          ?>
            <li class="c-gridpost__item">
              <a href="<?php the_permalink(); ?>">
                <div class="c-gridpost__thumb">
                  <?php
                    // Post thumbnail.
                    the_post_thumbnail('full', array('class' => 'img-fluid rounded'));
                  ?>
                </div>
                <p class="datepost"><?php echo get_the_date(" Y年m月d日"); ?></p>
                <h3><?php the_title(); ?></h3>
              </a>
            </li>
          <?php endwhile; wp_reset_postdata();?>
          <?php else: ?>
            <h1>Cand find post!</h1>
          <?php endif; ?>
        </ul>
      </div>

      <div class="l-btn">
        <div class="c-btn c-btn--small">
          <?php
            $link = get_field('btn-link3', 'options');
            if($link): ?>
              <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
                <?php echo $link['title']; ?>
              </a>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </section>
</main>

<?php get_footer(); ?>
