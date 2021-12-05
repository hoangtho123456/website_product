<?php include 'include/index-top.php';?>
<main id="main" class="page-news">
  <section class=" am24">
    <div class="container"> 
      <div class="section-header">
        <h1 class="section-title page-title"><span>TIN TỨC</span></h1>
      </div>

    <div class="dl-table grid-space-80 post-feature section-b">
      <div class="col-sm-7">
        <img class="lazy lazy-hidden " src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="https://via.placeholder.com/630x400" alt="alt" />
      </div>
      <div class="col-sm-5">
        <h4>Exclusive Beachfront Luxury Apartment, Hyatt Regency</h4>
        <p>Ornare pellentesque tempor tempor, sollicitudin sociis duis dapibus... Magna consequat a duis lectus neque: Interdum aliquam sagittis! Nullam cursus euismod augue. Hymenaeos class dapibus class quam</p>
        <a href="#" class="btn"><span>Xem thêm</span></a>
      </div>
    </div>

      <div class="row layout-1 list-item-b50">
        <?php
        for($i=1;$i<=12;$i++){ 
          $img = 'https://via.placeholder.com/360x250';
          $title = 'Công nghệ AMD SenseMI';
          $desc = 'Được kiến tạo dựa trên công nghệ AMD SenseMI mang đến một bộ vi xử lý thông minh đúng nghĩa. Hiệu năng nâng cấp mạnh mẽ hơn với';
          ?>
          <div class="col-sm-4 col-md-4">
            <?php include 'repeat/layout-1.php';?>
          </div>  
        <?php
        }?>
      </div>   

        <ul class="page-numbers">
            <li><a class="prev page-numbers" href="#"> <i class="icon-arrow-1"></i> </a></li>
            <li><span aria-current="page" class="page-numbers current">1</span></li>
            <li><a class="page-numbers" href="#">2</a></li>
            <li><a class="next page-numbers" href="#"><i class="icon-arrow-2"></i></a></li>
        </ul>   

    </div>
  </section>   
  

</main>



<?php include 'include/index-bottom.php';?>

