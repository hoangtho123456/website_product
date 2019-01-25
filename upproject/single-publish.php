<?php get_header(); ?>

<main class="p-publish">
  <?php if(have_posts()): ?>
  <?php while(have_posts()) : the_post(); ?>
    <div class="c-breadcrumb">
      <div class="l-container">
        <a href="<?php echo get_home_url(); ?>">Home</a>
        <a href="<?php the_permalink(267); ?>"><?php echo get_the_title(267); ?></a>
        <span><?php the_title(); ?></span>
      </div>
    </div>

    <div class="l-container">
      <div class="p-publish__single">
        <div class="feature_img">
          <?php
            // Post thumbnail.
            the_post_thumbnail('full', array('class' => 'img-fluid rounded'));
          ?>
        </div>
        <div class="p-publish__info">
          <h2><?php the_title(); ?></h2>
          <p class="datepost"><?php echo get_the_date(" Y年m月d日"); ?> 発行</p>
          <p class="author">
            著者  :
            <?php
              $coop = get_field('publish_coop', get_the_ID());
              if($coop): ?>
                <?php echo $coop; ?>
            <?php endif; ?><br>
            出版社 : <?php echo get_the_title(267); ?>
          </p>

          <?php
            $price = get_field('price', get_the_ID());
            if($price): ?>
              <p class="price"><?php echo $price; ?></p>
          <?php endif; ?>

          <?php the_content(); ?>
        </div>
      </div>
      <div class="l-btn">
        <div class="c-btn c-btn--small2">
          <a href="<?php echo the_permalink(267); ?>">出版物一覧へ</a>
        </div>
      </div>
    </div>
  <?php endwhile; ?>
  <?php else: ?>
    <h1>Cand find post!</h1>
  <?php endif; ?>
</main>

<?php get_footer(); ?>
