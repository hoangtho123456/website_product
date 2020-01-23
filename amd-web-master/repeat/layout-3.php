<div class="item">
	<?php 
	if($i%2==0){?>
	  <a href="#" class="img tRes_16_9">
	    <img class="lazy lazy-hidden " src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="<?php echo $img; ?>" alt="alt" />
	  </a>
	<?php
	}else {?>   
	  <div class="img single_item_video tRes_16_9"  >
	      <div class=" btnvideo">
	        <img class="lazy lazy-hidden br" src="assets/images/blank.png" data-lazy-type="image" data-lazy-src="assets/images/video.jpg" alt="alt" />
	      </div>
	      <div class="video " data-video="HxNueVaK4Os"> <div></div>     </div>
	  </div>    
	<?php 
	}?>

  <a href="#" class="title"><?php echo $title.' '.$i; ?></a>
  <div class="desc"><?php echo $desc; ?></div>
  <a href="#" class="more btn "><span>Xem chi tiết</span></a>
</div>