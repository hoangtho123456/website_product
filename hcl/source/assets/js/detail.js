/*
*js use for layout detail.html, visiting-list.html, detail-list.html
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

var LI_CHILD = $('.list-hira li ul li'); //li cover radio-button, use for set bg-color
var ROW = $('.visiting-list tr'); //row list in layout visiting-list.html 
var DEL_TEXT = $('.del-text-js'); //click btn 'x', delete text in behind index

/*====variable of checkbox and radio box=====*/
var CHECKBOX_BG = $('.check-box');
var LIST_RADIO = $('.list-radio li');
var RADIO_BTN = $(".list-radio li input[type='radio']");
var CHECKBOX = $(".check-box input[type='checkbox']");
var URL = document.URL;

/*====variable of copy btn, edit btn,btn control status=====*/
var COPY_BTN = $('#copy_btn');
var ALERT = $('.alert');

/*========Event handler detail============*/
$(document).ready(function () {
  checkURL();
});

/*
*click btn copy, show alert
*/
$(COPY_BTN).on('click', function() {
  if(ALERT.css('display') === 'none') {
    ALERT.css('display', 'block');
    ALERT.fadeOut(8000);
  } else  {
    ALERT.css('display', 'none');
    $(ALERT).stop(true, true);
  }
});
$('body').click(function(event){
  var $target = $(event.target);
  if(!$target.is(COPY_BTN)) {
    $(ALERT).hide();
    $(ALERT).stop(true, true);
  } 
});

/*
*click radio-btn, set color of it's back-ground is blue
*/
$(RADIO_BTN).on('click', function () {
  var curRa = $(RADIO_BTN).index(this);
  
  for (var i = 0; i < LIST_RADIO.length; i++) {
    LIST_RADIO.eq(i).removeClass("active");
  }
  RADIO_BTN.eq(curRa).parent('li').addClass("active");
});

/*
*click Checkbox, set color of it's back-ground is blue
*/
$(CHECKBOX).on('click', function () {
  var curBox = CHECKBOX.index(this);
    if(!CHECKBOX.eq(curBox).prop('checked')) {
  	  CHECKBOX.eq(curBox).parent('.check-box').removeClass("active");
    } else CHECKBOX.eq(curBox).parent('.check-box').addClass("active");

});

/*
*click any btn in detail-list, it will link to visiting-list.html
*/
$(LI_CHILD).bind('click', function() {
  window.open('visiting-list.html', '_self');
});

/*
*click any row in visiting-list, it will store data, and return to detail.html.
*/
$(ROW).on('click', function () {
  if(navigator.cookieEnabled) {
    if (getCookie('url').indexOf('detail.html') != -1) {
      setCookie('name',$(this).children('td').eq(2).text(),-1);
      window.open('detail.html#tab1', '_self');
    } else if(getCookie('url').indexOf('access.html') != -1) { 
      setCookie('name',$(this).children('td').eq(2).text(),-1);
      window.open('access.html', '_self');
    } else {
      window.open("user-info.html", '_self');
    }
  } else {alert("please start cookie to get data!");} 
});

$(DEL_TEXT).on('click', function () {
  var index = $(DEL_TEXT).index(this);
  $(".text-near-x-js").eq(index).val("");
});


/*=========function=============*/
/*
*Set active checkbox and radio-box
*/
function SetActive() {
  for (var i = 0; i < LIST_RADIO.length; i++) {
    if(LIST_RADIO.eq(i).hasClass("active")) {
      LIST_RADIO.eq(i).children('input').prop("checked", true);          
    }
  }
  if(CHECKBOX_BG.hasClass("active")) {
    CHECKBOX_BG.children('input').prop("checked", true);
  }
}

/*
*check url to open corresponding web.
*/
function checkURL() {
  if(document.URL.indexOf('detail.html') != -1 || document.URL.indexOf('menu.html') != -1 
        || document.URL.indexOf('access.html') != -1) {
    if(navigator.cookieEnabled) {
      setCookie('url',URL, 1);
    } else {alert("please start cookie to get data!");}
  }
}
