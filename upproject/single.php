<?php get_header(); ?>

<main class="p-news">
  <?php if(have_posts()): ?>
  <?php while(have_posts()) : the_post(); ?>
    <div class="c-breadcrumb">
      <div class="l-container">
        <a href="<?php echo get_home_url(); ?>">Home</a>
        <a href="<?php addLinkCategory_dangtho(get_the_category()[0]->name); ?>">ニュース・お知らせ</a><!-- do later -->
        <span><?php the_title(); ?></span>
      </div>
    </div>

    <div class="p-news__content">
      <div class="l-container">
        <div class="feature_img">
          <?php
            // Post thumbnail.
            the_post_thumbnail('full', array('class' => 'img-fluid rounded'));
          ?>
        </div>

        <div class="c-ttlpostpage">
          <h2><?php the_title(); ?></h2>
          <span><?php echo get_the_date(" Y年m月d日"); ?></span>
          <span class="c-dotcat c-dotcat--1"><?php echo get_the_category()[0]->name; ?></span>
        </div>

        <div class="single_content">
          <?php the_content(); ?>
          <p class="u-center">▽▽詳細はこちら▽▽</p>
          <p class="u-center u-bborder">さあ、顧問先育成型会計事務所へ！~業務改善をもたらすMAS指導の実際~</p>
        </div>

        <div class="l-btn">
          <div class="c-btn c-btn--small2">
            <?php $link = get_field('link-news', "options");
              if($link): ?>
                <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
                  <?php echo $link['title']; ?>
                </a>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </div>

  <?php endwhile; ?>
  <?php else: ?>
    <h1>Cand find post!</h1>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
