<?php get_header(); ?>

<main class="p-cases">
  <?php if(have_posts()): ?>
  <?php while(have_posts()) : the_post(); ?>
    <div class="c-breadcrumb">
      <div class="l-container">
        <a href="<?php echo get_home_url(); ?>">Home</a>
        <a href="<?php echo get_home_url() . "/success"; ?>">成功事例</a>
        <span>ご提供サービス</span>
      </div>
    </div>
    <div class="c-headpage">
      <div class="l-container2">
        <h2 class="c-title">成功事例</h2>
        <p class="desc">
          <?php
            $coop = get_field('case_title', get_the_ID());
            if($coop): ?>
              <?php echo $coop; ?>
          <?php endif; ?></p>
        <p class="name">
          <?php
            $coop = get_field('case_name', get_the_ID());
            if($coop): ?>
              <?php echo $coop; ?>
          <?php endif; ?>
        </p>
      </div>
    </div>

    <div class="p-cases__content">
      <div class="l-container2">
        <h3>ご提供サービス</h3>
        <div class="single_content">
          <?php the_content(); ?>
        </div>
        <div class="l-btn">
          <div class="c-btn c-btn--small">
            <a href="<?php echo get_home_url() . "/success"; ?>">成功事例一覧へ</a>
          </div>
        </div>
      </div>
    </div>

      <?php endwhile; ?>
    <?php else: ?>
      <h1>Can't find post!</h1>
    <?php endif; ?>
  </main>

<?php get_footer(); ?>
