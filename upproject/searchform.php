<?php $unique_id = esc_attr( uniqid( 'search-form' ) ); ?>
<div class="c-search">
  <form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <input type="text" id="<?php echo $unique_id; ?>" class="search-field" placeholder="<?php echo esc_attr_x( 'Search for &hellip;', 'placeholder' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
    <input type="submit" name="search" value="Search">
  </form>
</div>
