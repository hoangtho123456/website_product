<?php
  //load posts by Ajax
  if (!function_exists("getPost")) {
    function getPost() {
      if(!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'bobz')) {
        die('Permission denied!');
        $response = [
          'status'  => 500,
          'message' => 'Something is wrong, please try again later ...',
          'content' => false,
          'found'   => 0
        ];
      }

      $tax = sanitize_text_field($_POST['params']['tax']);
      $term = $_POST['params']['term'];
      $page = intval($_POST['params']['page']);
      $qty  = intval($_POST['params']['qty']);

      if (!term_exists($term, $tax) && $term != 'all-terms'):
        $response = [
          'status'  => 501,
          'message' => 'Term doesn\'t exist:' . $term,
          'content' => 0
        ];
        die(json_encode($response));
      endif;

      if ($term == 'all-terms'):
        $tax_qry[] = [
          'post_type'=>'post',
          'post_status'=>'public'
        ];
      else :
        $tax_qry[] = [
          'taxonomy' => $tax,
          'field'    => 'slug',
          'terms'    => $term,
        ];
      endif;

      $args = [
        'paged'          => $page,
        'post_type'      => 'post',
        'post_status'    => 'public',
        'posts_per_page' => $qty,
        'tax_query'      => $tax_qry
      ];
      $qry = new WP_Query($args);

      ob_start();
      if ($qry->have_posts()) :
        while ($qry->have_posts()) : $qry->the_post(); ?>
          <li class="c-listpost__item">
            <div class="c-listpost__info">
              <span class="c-listpost__date"><?php echo get_the_date("Y年m月d日"); ?></span>
              <?php changeColorCirclePost(get_the_category( $id )[0]->name); ?>
            </div>
            <h3 class="c-listpost__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
          </li>
        <?php endwhile;
        pagination_tab($qry,$page);

        $response = [
          'status'=> 200,
          'found' => $qry->found_posts
        ];
      else:
        $response = [
          'status'  => 201,
          'message' => 'No posts found ' . $term
        ];
      endif;

      $response['content'] = ob_get_clean();
      die(json_encode($response));
    }
  }

  add_action('wp_ajax_do_filter_posts', 'getPost');

  //handling AJAX requests from unauthenticated users
  add_action('wp_ajax_nopriv_do_filter_posts', 'getPost');

  /*
  @create shortcode for pagination
  */
  if (!function_exists("createShortCode")) {
    function createShortCode($atts) {
      $status = shortcode_atts( array(
        'tax'      => 'category',
        'terms'    => false,
        'active'   => false,
        //'per_page' => 12
      ), $atts );

      $result = NULL;
      $terms  = get_terms($status['tax']);
      if(count($terms)):
        ob_start(); ?>
        <div id="container-async" data-paged="<?php echo $status['per_page']; ?>" class="sc-ajax-filter">
          <ul class="nav-filter c-tabs">
            <li>
              <a href="#" data-filter="<?php echo 'all' ?>" data-term="all-terms" data-page="1">すべて</a>
            </li>
            <?php foreach ($terms as $term) : ?>
            <li class="<?php if ($term->term_id == $status['active']) :?> active"<?php endif; ?>">
              <a href="<?php echo get_term_link( $term, $term->taxonomy ); ?>" data-filter="<?php echo $term->taxonomy; ?>" data-term="<?php echo $term->slug ?>" data-page="1">
                <span>
                  <?php echo $term->name; ?>
                </span>
              </a>
            </li>
            <?php endforeach; ?>
          </ul>
          <div class="c-tabs__content">
            <ul class="c-listpost active" id="all">
            </ul>
          </div>
        </div>
        <!---->
      <?php $result = ob_get_clean();
      endif;
      return $result;
    }
  }
add_shortcode('multitab_ajax', 'createShortCode');

function pagination_tab( $query = null, $paged = 1 ) {
  if (!$query)
    return;
  $paginate = paginate_links([
    'base'      => '%_%',
    'type'      => 'array',
    'total'     => $query->max_num_pages,
    'format'    => '#page=%#%',
    'current'   => max( 1, $paged ),
    'prev_text' => '',
    'next_text' => ''
  ]);
  if ($query->max_num_pages > 1) : ?>
    <div class="c-pagination">
      <?php foreach ( $paginate as $page ) :?>
        <?php echo $page; ?>
      <?php endforeach; ?>
    </div>
  <?php endif;
}
