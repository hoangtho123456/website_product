<?php
/*
*add theme_support(menu, thumbnail, ....) for wordpress;
*/
include 'loadpost_ajax/loadposts_ajax.php';

add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );

/*
 * Enable support for custom logo.
 *
 * @since Twenty Fifteen 1.5
 */
add_theme_support('custom-logo', array(
  'height'      => 248,
  'width'       => 248,
  'flex-height' => true,
));

/*
*function remove margin-top: 31px !important;
*/
function remove_admin_login_header() {
  remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');

/*
*add boostrap link and file js, css
*/
function reg_scripts() {
  wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0.0', 'all' );
  wp_enqueue_script( 'Common', get_template_directory_uri() . '/js/common.js',
    array(), true);
}
add_action( 'wp_enqueue_scripts', 'reg_scripts' );

function add_ajax_to_js() {
  wp_enqueue_script( 'ajax', get_template_directory_uri() . '/js/ajax_loadpost.js',['jquery'], null, true);
  wp_localize_script( 'ajax', 'bobz', array(
    'nonce' => wp_create_nonce( 'bobz' ),
    'ajax_url' => admin_url( 'admin-ajax.php' )
  ));
}
add_action( 'wp_enqueue_scripts', 'add_ajax_to_js' );

/*
@Custom field
*/
if ( function_exists("acf_add_options_page") ) {
  acf_add_options_page();

  acf_add_options_page(array(
    "page_title" => "Theme Options",
    "menu_title" => 'Theme Options',
    "menu_slug" => 'theme-options',
    'capability' => 'edit_posts',
    'parent_slug' => '',
    'position' => false,
    'icon_url' => false,
    'redirect' => false
  ));

  acf_add_options_page(array(
    "page_title" => "Header",
    "menu_title" => 'Header',
    "menu_slug" => 'theme-options-header',
    'capability' => 'edit_posts',
    'parent_slug' => 'theme-options',
    'position' => false,
    'icon_url' => false
  ));

  acf_add_options_page(array(
    "page_title" => "Footer",
    "menu_title" => 'Footer',
    "menu_slug" => 'theme-options-footer',
    'capability' => 'edit_posts',
    'parent_slug' => 'theme-options',
    'position' => false,
    'icon_url' => false
  ));

  acf_add_options_page(array(
    "page_title" => "Post Settings",
    "menu_title" => "Post Settings",
    "menu_slug" => "post-settings",
    'capability' => 'edit_posts',
    'parent_slug' => 'edit.php',
    'position' => false,
    'icon_url' => false
  ));
}

/**
@pagination for category
**/
if (!function_exists("pagination_cat_dangtho")) {
  function pagination_cat_dangtho($query) {
    global $wp_query;
    $big = 999999999; // need an unlikely integer

    if ($query == NULL) {
      $query = $wp_query;
    } else $query = $query;

    $html = paginate_links( array(
      'paged' =>  ( get_query_var('paged') ) ? absint(get_query_var('paged')) : 1,
      'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
      'total' => $query->max_num_pages,
      'show_all' => false,
      'prev_next' => true,
      'prev_text' => __(""),
      'next_text' => __("")
    ));
    echo $html;
  }
}

/**
@HTML for listbox
**/
//should set name: templateListPost
if (!function_exists("getAllPost_dangtho_demo")) {
  function getAllPost_dangtho_demo() {
    ?>
      <li class="c-listpost__item">
        <div class="c-listpost__info">
          <span class="c-listpost__date"><?php echo get_the_date(" Y年m月d日"); ?></span>
          <?php changeColorCirclePost(get_the_category()[0]->name);?>
        </div>
        <h3 class="c-listpost__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      </li>
    <?php
  }
}

if (!function_exists("changeColorCirclePost")) {
  function changeColorCirclePost($name) {
    switch($name):
      case 'お知らせ':
      ?>
        <span class="c-listpost__cat c-dotcat c-dotcat--1"><?php echo $name; ?></span>
      <?php break;
      case '税の最新情報':
      ?>
        <span class="c-listpost__cat c-dotcat c-dotcat--2"><?php echo $name; ?></span>
      <?php break;
      case '税制改正':
      ?>
        <span class="c-listpost__cat c-dotcat c-dotcat--3"><?php echo $name; ?></span>
      <?php  break;
      case '掲載情報':
      ?>
        <span class="c-listpost__cat c-dotcat c-dotcat--4"><?php echo $name; ?></span>
      <?php  break;
      case 'バックナンバー':
      ?>
        <span class="c-listpost__cat c-dotcat c-dotcat--5"><?php echo $name; ?></span>
      <?php  break;
      default: break;
    endswitch;
  }
}

/*
*Custom Post type(success)
*/
function createCustomPostType() {
  //$label uses for contain text which relative to the name
  //of post type
  $label = array(
    'name' => 'Success',
    'singular_name' => 'Success'
  );

  $array = array(
    'labels' => $label,
    'supports' => array(
      'title',
      'editor',
      'excerpt',
      'author',
      'thumbnail',
      'comments',
      'trackbacks',
      'revisions',
      'custom-fields'
    ),
    //taxonomys be admit to separate contents
    'taxonomies' => array('category', 'post_tag'),
    'hierarchical' => false, //allow decentralization, if false => like post, true => like page
    'public' => true, //activated post type
    'show_ui' => true, //show manager box like Post/Page
    'show_in_menu' => true, //show on Admin menu(left)
    'show_in_nav_menus' => true, //show on Appearance -> Menus
    'show_in_admin_bar' => true, //show on Admin bar(black)
    'menu_position' => 5, //order show in menu(left)
    'menu_icon' => '',
    'can_export' => true, //Can export content by Tools -> Export
    'has_archive' => true, //allow store (month, date, year)
    'exclude_from_search' => false, //delete from search result
    'publicly_queryable' => true, //Show parameters on query, must to set true.
    'capability_type' => 'post' //
  );

  register_post_type("Success", $array);
}
add_action('init', 'createCustomPostType');

//show custom post type in main layout
add_filter('pre_get_posts', 'getCustomPostType');
function getCustomPostType($query) {
  if(is_home() && $query -> is_main_query()) {
    $query-> set('post_type', array('post', 'Success'));
  }
  return $query;
}

/*
*Custom Post type(publish)
*/
function createCustomPostType_publish() {
  //$label uses for contain text which relative to the name
  //of post type
  $label = array(
    'name' => 'publish',
    'singular_name' => 'publish'
  );

  $array = array(
    'labels' => $label,
    'supports' => array(
      'title',
      'editor',
      'excerpt',
      'author',
      'thumbnail',
      'comments',
      'trackbacks',
      'revisions',
      'custom-fields'
    ),
    //taxonomys be admit to separate contents
    'taxonomies' => array('category', 'post_tag'),
    'hierarchical' => false, //allow decentralization, if false => like post, true => like page
    'public' => true, //activated post type
    'show_ui' => true, //show manager box like Post/Page
    'show_in_menu' => true, //show on Admin menu(left)
    'show_in_nav_menus' => true, //show on Appearance -> Menus
    'show_in_admin_bar' => true, //show on Admin bar(black)
    'menu_position' => 5, //order show in menu(left)
    'menu_icon' => '',
    'can_export' => true, //Can export content by Tools -> Export
    'has_archive' => true, //allow store (month, date, year)
    'exclude_from_search' => false, //delete from search result
    'publicly_queryable' => true, //Show parameters on query, must to set true.
    'capability_type' => 'post' //
  );

  register_post_type("publish", $array);
}
add_action('init', 'createCustomPostType_publish');

//show custom post type in main layout
add_filter('pre_get_posts', 'getCustomPostType_publish');
function getCustomPostType_publish($query) {
  if(is_home() && $query -> is_main_query()) {
    $query-> set('post_type', array('post', 'publish'));
  }
  return $query;
}

/**
@add link category in list post
**/
if ( !function_exists("addLinkCategory_dangtho")) {
  function addLinkCategory_dangtho($catName) {
    $catID = get_cat_ID($catName);
    $catLink = get_category_link($catID);
    //----------------------------------------
    echo $catLink;
  }
}

/*
@action: get url link from custom post type (id: option)
*/
if(!function_exists("getBtnLinkCustomPost")) {
  function getBtnLinkCustomPost($linkname, $option) {
    $link = get_field($linkname, $option);
    if ($link):?>
      <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
        <?php echo $link['title']; ?>
      </a>
    <?php endif;
  }
}

function dangtho_changeCopyright($output) {
  $output = 'Design by wordpress!';
  return $output;
}
add_filter("dangtho_copyright", "dangtho_changeCopyright");
