<?php include 'include/index-top.php';?>
<section class="section-b bgTL lazy lazy-hidden am37" data-lazy-type="bg" data-lazy-src="assets/images/bg-16.svg" style="">
  <div class="container"> 
    <div class="dl-table">
      <div class="col-sm-6 col-md-7">
        <img class="lazy lazy-hidden imgres" data-display="s" width="683" height="372" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/img-8.png" alt="alt" />
      </div>      
      <div class="col-sm-6 col-md-5">
        <h2>Heavy Metal Computing</h2>
        <p>Bộ xử lý 32 lõi đầu tiên trên thế giới và Bộ xử lý máy tính để bàn mạnh mẽ nhất thế giới trong một.1,2 Montes hymenaeos commodo vitae auctor odio pretium hac. Nonummy sociis metus cursus habitant facilisi, et cum etiam nonummy.</p>
        <a href="#" class="btn "><span>Mua ngay</span></a>
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


<main id="main" class=" page-cpu-detail" >

  <section class="section am38 lazy lazy-hidden"    data-lazy-type="bg" data-lazy-src="assets/images/bg-1.svg">
    <div class="container"> 
      <div class="max970 ">
        <div class="section-header">
          <p>32 lõi cung cấp 64 luồng xử lý đa xử lý đáng kinh ngạc, trong khi 80MB bộ nhớ đệm kết hợp và I / O rộng lớn từ nền tảng AMD X399 dành cho người đam mê làm việc cùng nhau để cho phép bộ vi xử lý mạnh mẽ nhất thế giới.1</p>
        </div>
      </div>
      <div class="l4item">
        <div class=" row grid-space-2 equalHeight">
          <div class="col-md-3 col-sm-3">
            <div class="item equal">
              <div class="inner">
                <span class="hl">32</span> nhân và <span class="hl">64</span> luồng giúp giải quyết công việc thần tốc.
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3">
            <div class="item equal">
              <div class="inner">
                Trang bị <span class="hl">64</span> làn PCIe® thế hệ 3 đầu tiên trên thế giới, đáp ứng mọi nhu cầu về GPU và NVMe.
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3">
            <div class="item equal">
              <div class="inner">
                Lên đến <span class="hl">80MB</span> bộ nhớ cache, giúp truy cập nhanh chóng vào các tập dữ liệu lớn.
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-3">
            <div class="item equal">
              <div class="inner">
                Hỗ trợ bộ nhớ <span class="hl"> Ram 4</span> kênh DDR4 EEC cho khả năng tự sửa lỗi, đảm bảo dòng dữ liệu luôn tin cậy và an toàn.
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  </section>          




   

  <section class="section bgBC am31" >
    <div class="container"> 

      <div class="row  layout-1 list-item-b50 grid-space-80">
        <?php
        for($i=1;$i<=4;$i++){ 
          $img = 'https://via.placeholder.com/360x250';
          $title = 'Heavy Metal Computing';
          $desc = 'Bộ xử lý AMD Ryzen ™ Threadripper ™ thế hệ thứ 2 - Những nét nổi bật về hiệu suất lãnh đạo. Montes hymenaeos commodo vitae auctor odio …';
          ?>
          <div class="col-sm-6 col-md-6">
            <?php include 'repeat/layout-3.php';?>
          </div>
        <?php
        }?>
      </div>
    </div>
  </section>   


 


  <section class="  bgTC am34 " >
    <div class="container"> 
      <div class="section-header">
        <h2 class="section-title"><span>Công nghệ</span></h2>
      </div>  
      <div class="list-congnghe showless section-b">
        <div   class=" row layout-1 list-item-b50  ">
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
        <h2>AMD Ryzen™ Threadripper™ 2990WX</h2>
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
                    <img class="lazy lazy-hidden imgres" data-display="s" width="683" height="372" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/img-8.png" alt="alt" />
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
                    <div class="infor">
                      <div class="it"><span class="key">*OS Support:</span> <br>
                        Windows 10 - 64-Bit Edition <br>
                        RHEL x86 64-Bit <br>
                        Ubuntu x86 64-Bit <br>
                        *Operating System (OS) support will vary by manufacturer.
                      </div>
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
        <div class="row grid-space-0 equalHeight ">
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
                  <a href="#" class="btn more"><span>Xem thêm</span></a>
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

