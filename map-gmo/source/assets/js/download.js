/*
*js layout flag.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/

/*=========Variable=========*/
var DOWN = $('#down_flag'); //link download image
var IMG = ''; //get link of image flag was stored
var IMG_TAG = "<img src= '" + IMG +"/>"; //element tag append to the page
var FULL_SCREEN_BTN = $(".full-screen-js");

/*=========Event Handler=========*/
$(document).ready(function() {
  if (typeof(Storage) !== 'undefined') {
  	IMG = sessionStorage.getItem('flagcard');
  	
    //show content of page if login successfull
    if (sessionStorage.getItem('inSite') === 'true') {
  	  $('body').css('display', 'block');
      $('.down-content-js').prepend("<img id='flag' src= '" + IMG +"'/>");

      $(DOWN).attr('href', IMG);
      $(DOWN).attr('download', IMG.slice(IMG.lastIndexOf('/') + 1));
      $('img#flag').addClass("size-normal-flag");
      $('img#flag').css({
      'display': 'block',
      'margin' : '0 auto'
	  });
    }
  } else {
  	alert("browser doesn't support Storage!");
  }
});

$(FULL_SCREEN_BTN).click(function () {
  var img = $("#flag");
  //console.log($(window).width());
  //console.log(Math.round($(img).width()));

  if (Math.round($(img).width()) !== $(window).width()) {
    $(img).removeClass("size-normal-flag");
    $(img).addClass("size-full-flag");
  } else if(Math.round($(img).width()) == $(window).width()){
    $(img).removeClass("size-full-flag");
    $(img).addClass("size-normal-flag");
  }
});
