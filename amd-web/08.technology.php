<?php include 'include/index-top.php';?>
<main id="main" class="lazy lazy-hidden page-technology" data-lazy-type="bg" data-lazy-src="assets/images/bg-9.svg">
  <section class="section-b am26" >
    <div class="container"> 
      <div class="section-header">
        <h2 class="section-title"><span>CÔNG NGHỆ TÍCH HỢP CPU</span></h2>
      </div>
      <div class="row layout-1 list-item-b50">
        <?php
        for($i=1;$i<=8;$i++){ 
          $img = 'https://via.placeholder.com/260x180';
          $title = 'Kiến trúc lõi “Zen”';
          $desc = 'Được kiến tạo dựa trên công nghệ AMD SenseMI mang đến một bộ vi xử lý thông minh đúng nghĩa. Hiệu năng nâng cấp mạnh mẽ hơn với';
          ?>
          <div class="col-sm-3 col-md-3">
            <?php include 'repeat/layout-1.php';?>
          </div>
        <?php
        }?>
      </div>
    </div>
  </section>  

  <section class="section-b am26" >
    <div class="container"> 
      <div class="section-header">
        <h2 class="section-title"><span>CÔNG NGHỆ TÍCH HỢP GPU</span></h2>
      </div>
      <div class="row layout-1 list-item-b50">
        <?php
        for($i=1;$i<=5;$i++){ 
          $img = 'https://via.placeholder.com/260x180';
          $title = 'Kiến trúc lõi “Zen”';
          $desc = 'Được kiến tạo dựa trên công nghệ AMD SenseMI mang đến một bộ vi xử lý thông minh đúng nghĩa. Hiệu năng nâng cấp mạnh mẽ hơn với';
          ?>
          <div class="col-sm-3 col-md-3">
            <?php include 'repeat/layout-1.php';?>
          </div>
        <?php
        }?>
      </div>
    </div>
  </section>  

  

</main>



<?php include 'include/index-bottom.php';?>

