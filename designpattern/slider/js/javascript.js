/*
*Slider write by JQUERY
*design pattern: Module design pattern
*Idea: show each image after the specify time, and action choose any img in menu 
 option, then it'll show  a choosed img.
*@author: danghoangtho1132@gmail.com
*/
var slider = (function () {
    var index = 0; //value index img in slider
    var time = 4000; //time to go to next slide
    var reTimeout; //set timeout every second
    var privateImgWin = $(".sl-main-image-js img"); //list img on slider
    var privateImgMenu = $(".sl-row-padding img"); //list img on menu slider
	/*---------Private function-------------*/
	//function auto slide
	function showImage() {
	  if(index > privateImgWin.length - 1) {
		index = 0;
	  } else if(index < 0) {
		index = privateImgWin.length - 1;
	  }
	  privateImgWin.hide(); //hide all imgs are showing on slider
	  privateImgWin.eq(index).show(); //show current img on slider
	  currentImg(); //show current img on menu
	  clearTimeout(reTimeout);
	  reTimeout = setTimeout(function () {
	    index++;
		showImage();
	  }, time);
	}
	
	//function click prev image
	function privateBtnPrev() {
	  index--;
	  showImage();
	}

	//function click next image
	function privateBtnNext() {
	  index++;
	  showImage();
	}
	
	//function auto slide in menu
	function currentImg() {
	  privateImgMenu.removeClass("sl-opacity-off");
	  privateImgMenu.eq(index).addClass("sl-opacity-off");
		//console.log(index);
	}
	
	//function click img on menu, will show as same as like it on slider
	function privateClickMenu(value) {
	  index = privateImgMenu.index(value);
	  showImage();
	}

	/*-------public function------*/
	function publicShowImg() {
	  showImage();
	}
	function publicBtnPrev() {
	  privateBtnPrev();
	}
	function publicBtnNext() {
	  privateBtnNext();
	}
	function publicClickMenu(value) {
	  privateClickMenu(value);
	}	
	
	return {
	  autoSlide : publicShowImg,
	  previous : publicBtnPrev,
	  next : publicBtnNext,
	  menu: publicClickMenu
	}
})();

/*
*Event click
*/	
$(document).ready(function () {
	slider.autoSlide();

	$("#btn_left_js").bind("click", function () {
	  slider.previous();
	});
	$("#btn_right_js").bind("click", function () {
	  slider.next();
	});
	$(".sl-row-padding img").bind("click", function () {
	  slider.menu(this);
	});
});
