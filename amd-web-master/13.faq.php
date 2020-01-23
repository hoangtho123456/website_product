<?php include 'include/index-top.php';?>
<main id="main" class="page-faqs  lazy lazy-hidden" data-lazy-type="bg" data-lazy-src="assets/images/bg-5.jpg">
  <div class="container"> 
    <div class=" max770">
      <div class=" text-center section-b">
        <h1>FAQ</h1>
      </div>  
        <div class="acordion box-acordion list-faqs">          
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
              <div class="tab-title" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dignissim velit taciti litora a hendrerit eu; Class metus velit urna per sit nibh?  <?php echo $i; ?><span class="triangle"><i class="icon-plus"></i></span></div>
              <div class="tab-content" style="display: <?php echo $display; ?>">
                <p>Elementum libero proin tellus; Porta elementum enim sit venenatis per parturient sit. Tempus augue mus pretium fusce tristique ac. Montes hymenaeos commodo vitae auctor odio pretium hac. Nonummy sociis metus cursus habitant facilisi, et cum etiam nonummy. Fermentum nascetur pulvinar nascetur. Sociosqu facilisi eu pretium! Erat non eget primis primis habitasse ultrices primis... Porttitor sodales... Elementum libero proin tellus; Porta elementum enim sit venenatis per parturient sit. Tempus augue mus pretium fusce tristique ac. Montes hymenaeos commodo vitae auctor odio pretium hac. Nonummy sociis metus cursus habitant facilisi, et cum etiam nonummy... Fermentum nascetur pulvinar nascetur. Sociosqu facilisi eu pretium! Erat non eget primis primis habitasse ultrices primis... Porttitor sodales.</p>
              </div>
            </div>
          <?php
          }?>
        </div>  
    </div>
  </div>
  
</main>
<?php include 'include/index-bottom.php';?>

