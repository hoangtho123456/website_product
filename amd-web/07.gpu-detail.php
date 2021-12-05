<?php include 'include/index-top.php';?>
<section class="section-b bgTL lazy lazy-hidden am37" data-lazy-type="bg" data-lazy-src="assets/images/bg-16.svg" style="">
  <div class="container"> 
    <div class="dl-table">
      <div class="col-sm-6 col-md-7">
        <img class="lazy lazy-hidden imgres" data-display="s" width="605" height="593" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/img-11.png" alt="alt" />
      </div>      
      <div class="col-sm-6 col-md-5">
        <p><img class="lazy lazy-hidden imgres" data-display="s" width="261" height="116" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/img-12.png" alt="alt" /></p>
        <h2>DEFY CONVENTION.</h2>
        <p class="note">Trải nghiệm chơi game tuyệt vời nhất với Radeon ™ RX Vega 64 và Radeon ™ FreeSync Technology.1</p>
      </div>

    </div>
  </div>
</section>   


<section class="section-menu" >
  <div class="container"> 
    <ul class="menu">
      <li class="active"><a href="#">OVERVIEW</a></li>
      <li><a href="#">TECHNOLOGIES</a></li>
      <li><a href="#">SPECIFICATIONS</a></li>
      <li><a href="#">DRIVERS & SUPPORT</a></li>
    </ul>
  </div>
</section>  


<main id="main" class=" page-gpu-detail bgt0" >

  <section class="section am43 lazy lazy-hidden"    data-lazy-type="bg" data-lazy-src="assets/images/bg-1.svg">
    <div class="container"> 
      <div class="max970 ">
        <div class="section-header">
          <h2>Built for Extreme Gamers</h2>
          <p class="desc">Powered by the “Vega” architecture.</p>
        </div>
        <p><img class="lazy lazy-hidden imgres" width="970" height="550" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="https://via.placeholder.com/970x550" alt="alt"
           /></p>
      </div>
    </div>
  </section>          


  <section class=" bgTR am05 lazy lazy-hidden" data-lazy-type="bg" data-lazy-src="assets/images/bg-18.jpg">
    <div class="container"> 
      <div class="row followHeight">
        <div class="col-md-8">
          <div class="img clearfix equal2">
            <img class="lazy lazy-hidden imgres" width="906" height="503" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/img-2.png" alt="alt"
           />
           </div>
        </div>
        <div class="col-md-4">
          <div class="dl-table">
            <div class="col-md-12 equal1">
              <div class="divtex">
                <h2 class="title"><span>Raise the game fully loaded</span></h2>
                <p>Even heroes need great hardware
Buy a select AMD Radeon™ RX graphics card or an eligible PC computer and get up to three PC games FREE!*
                </p>
                <a href="#" class="btn"><span>Xem thêm</span></a>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>   

  <section class="section am44 "  >
    <div class="container"> 

        <div class="section-header">
          <h2>Built for Extreme Gamers</h2>
          <p class="desc">Powered by the “Vega” architecture.</p>
        </div>
        <p><img class="lazy lazy-hidden imgres" width="1170" height="602" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/img-13.jpg" alt="alt"
           /></p>

    </div>
  </section>    





  <section class="  bgTC am34 " >
    <div class="container"> 
  
      <div class="section-header">
        <h2 class="section-title"><span>Công nghệ</span></h2>
      </div>  

      <div class="list-congnghe  showless section-b"> 
        <div class="row list-item-b50 layout-1">
          <?php
          for($i=1;$i<=13;$i++){ 
            $img = 'https://via.placeholder.com/360x250';
            $title = 'AMD Ryzen™ Master Utility';
            $desc = 'Mở khóa quyền kiểm soát tối ưu hệ thống hỗ trợ AMD Ryzen ™ của bạn để ép xung và hiệu quả được cá nhân hóa.2';
            ?>
            <div class="col-sm-4 col-md-4">
              <?php include 'repeat/layout-1.php';?>
            </div>
          <?php
          }?>
        </div>
        <span   class="more-cong-nghe ">
          <span class="less">Ẩn bớt công nghệ</span>
          <span class="more">Xem thêm công nghệ</span>
          <i class="icon-arrow-3"></i>      
        </span>
      </div>        

      <div class="list-info-detail">
        <h2>Radeon™ RX Vega 64</h2>
        <div class="acordion-2 box-acordion">          
          <?php
          for($i=1;$i<=5;$i++){ 
            if($i==1){
              $display = 'block';
              $show = 'show';
            }else{
              $display = 'none';
              $show = '';
            }
            ?>
            <div class="tab <?php echo $show; ?>">
              <div class="tab-title" >Thông số kỹ thuật  <?php echo $i; ?><span class="triangle"><i class="icon-arrow-3"></i></span></div>
              <div class="tab-content" style="display: <?php echo $display; ?>">
                <div class="row">
                  <div class="col-sm-3 col-md-3 title-img">
                    <h4>Thông số kỹ thuật</h4>
                    <img class="lazy lazy-hidden imgres" data-display="s" width="683" height="372" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/img-11.png" alt="alt" />
                  </div>
                  <div class="col-sm-3 col-md-3">
                    
                    <div class="infor">
                      <div class="it"><span class="key"># of CPU Cores: </span> 32</div>
                      <div class="it"><span class="key">Max Boost Clock:</span> 4.2GHz</div>
                      <div class="it"><span class="key">Total L3 Cache:</span> 64MB </div>
                      <div class="it"><span class="key">Package:</span> sTR4</div>
                      <div class="it"><span class="key">Default TDP / TDP:</span> 250W</div>
                    </div>
                  </div>
                  <div class="col-sm-3 col-md-3">
                    <div class="infor">
                      <div class="it"><span class="key"># of CPU Cores: </span> 32</div>
                      <div class="it"><span class="key">Max Boost Clock:</span> 4.2GHz</div>
                      <div class="it"><span class="key">Total L3 Cache:</span> 64MB </div>
                      <div class="it"><span class="key">Package:</span> sTR4</div>
                      <div class="it"><span class="key">Default TDP / TDP:</span> 250W</div>
                    </div>                    
                  </div>
                  <div class="col-sm-3 col-md-3">
                    <div class="infor">
                      <div class="it"><span class="key"># of CPU Cores: </span> 32</div>
                      <div class="it"><span class="key">Max Boost Clock:</span> 4.2GHz</div>
                      <div class="it"><span class="key">Total L3 Cache:</span> 64MB </div>
                      <div class="it"><span class="key">Package:</span> sTR4</div>
                      <div class="it"><span class="key">Default TDP / TDP:</span> 250W</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <?php
          }?>
        </div>
      </div>   
    </div>
  </section> 


  <section class="section  am39">
    <div class="container"> 

      <div class="section-header">
        <h2 class="section-title"><span>Sản phẩm liên quan</span></h2>
      </div>  

      <div class="list-amd">
        <div class="row   equalHeight ">
          <?php
          for($i=1;$i<=3;$i++){ 
            ?>
            <div class="col-md-4 col-sm-4">
              <div class="item equal">
                <div class="inner">
                  <h4>AMD Ryzen™ Threadripper™ 2990WX Processor</h4>
                  <h4 class="price">1.000.000 VNĐ</h4>
                  <div class="infor">
                    <div class="it"><span class="key">Số nhân: </span> 32</div>
                    <div class="it"><span class="key">Số luồng:</span> 64</div>
                    <div class="it"><span class="key">Xung nhịp tối đa:</span> 4.2GHz </div>
                    <div class="it"><span class="key">Xung nhịp cơ bản:</span> 3GHz</div>
                    <div class="it"><span class="key">Giải pháp tản nhiệt:</span> Không tích hợp</div>
                    <div class="it"><span class="key">TDP / TDP mặc định:</span> 250W</div>
                  </div>
                  <a href="#" class="btn"><span>Xem thêm</span></a>
                </div>
              </div>
            </div>
          <?php
          }?>
        </div>
      </div>
    </div>
  </section> 
  
</main>

<?php include 'include/index-bottom.php';?>

