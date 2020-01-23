<?php include 'include/index-top.php';?>
<section class=" lazy lazy-hidden am45" data-lazy-type="bg" data-lazy-src="assets/images/bg-22.jpg" style="">
  <div class="container"> 
    <div class="section-header">
      <h2><span>Motherboard</span></h2>
    </div>
  </div>
</section>   


<section class="section-menu" >
  <div class="container"> 
    <ul class="menu">
      <li class="active"><a href="#">ALL</a></li>
      <li><a href="#">GIGABYTE</a></li>
      <li><a href="#">MSI</a></li>
      <li><a href="#">ASUS</a></li>
      <li><a href="#">ASROCK</a></li>
    </ul>
  </div>
</section>  
                                        

<main id="main" class=" page-mainboard " >


    <div class="container"> 


      <div class="section">
        <div class="row layout-1 list-thumb-contain list-item-b50">
          <?php
          for($i=1;$i<=8;$i++){ 
            ?>
            <div class="col-sm-3 col-md-3">
              <div class="item">
                <a href="#" class="img tRes">
                  <img class="lazy lazy-hidden " src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="https://via.placeholder.com/270x270" alt="alt" />
                </a>
                <a href="#" class="title">ASUS X399 Zenith Extreme</a>
              </div>


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



    </div>

</main>

<?php include 'include/index-bottom.php';?>

