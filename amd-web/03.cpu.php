<?php include 'include/index-top.php';?>
<section class=" lazy lazy-hidden bgCover am21" data-lazy-type="bg" data-lazy-src="assets/images/bn-2.jpg" style="background-image: url(assets/images/bn-1_sm.jpg);">
  <div class="container"> 
      <div class="divtext">
        <h2>Bộ xử lý dành riêng cho máy tính</h2>
        <p>“Dù làm việc hay giải trí, những bộ xử lý đa nhân mạnh mẽ từ AMD luôn đồng hành cùng bạn trong các tác vụ xử lý mượt mà, mang đến trải nghiệm game ấn tượng và các giá trị đáng kinh ngạc khác”</p>
      </div>
  </div>
</section>   
  <section class="section am22">
    <div class="container"> 
      <div class="dl-table">
        <div class="col-md-4">
              <div class="divtex">
                <h2 class="title"><span>Sáng tạo với <br> <span class="uppercase">Heavy Metal</span></span></h2>
                <p>
                  XAMD Ryzen™ Threadripper™ 2990WX Thế hệ 2: 
                  CPU mạnh nhất thế giới
                </p>
                <a href="#" class="btn btn-white"><span>Xem thêm</span></a>
              </div> 
        </div>        
        <div class="col-md-8">
          <div class="single_item_video tRes_16_9"  >
              <div class=" btnvideo">
                <img class="lazy lazy-hidden br" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/video.jpg" alt="alt" />
              </div>
              <div class="video " data-video="HxNueVaK4Os"> <div></div>     </div>
          </div>    
        </div>
      </div>
    </div>
  </section>  

  <section class="section am23 lazy lazy-hidden" data-lazy-type="bg" data-lazy-src="assets/images/bg-8.svg">
    <div class="container"> 
      <div class="section-header">
        <h2 class="section-title"><span>CÁC DÒNG SẢN PHẨM</span></h2>
      </div>
      <div class="row layout-1 list-thumb-contain">
        <?php
        for($i=1;$i<=5;$i++){ 
          ?>
          <div class="col-sm-4 col-md-4">
            <div class="item">
              <a href="#" class="img tRes_70">
                <img class="lazy lazy-hidden " src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="https://via.placeholder.com/360x250" alt="alt" />
              </a>
              <a href="#" class="title">AMD Ryzen™ 7</a>
              <div class="desc">Trải nghiệm các tác vụ mượt mà từ chiến game, sáng tạo nội dung cho đến xử lý đa nhiệm. Các vi xử lý Ryzen™ thế hệ 2 được nâng cấp mạnh mẽ, thiết kế tối ưu dành cho mọi tín đồ PC.</div>
                <ul class="list-arrow">
                  <li>8 nhân</li>
                  <li>16 luồng</li>
                  <li>20 MB bộ nhớ cache</li>
                </ul> 
            </div>            
          </div>
        <?php
        }?>
      </div>
    </div>
  </section>   


  <section class=" am24">
    <div class="container"> 
      <div class="section-header">
        <h2 class="section-title"><span>CÔNG NGHỆ TÍCH HỢP</span></h2>
      </div>
      <div class="row layout-1 list-item-b50">
        <?php
        for($i=1;$i<=8;$i++){ 
          $img = 'https://via.placeholder.com/260x180';
          $title = 'Công nghệ AMD SenseMI';
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





<?php include 'include/index-bottom.php';?>

