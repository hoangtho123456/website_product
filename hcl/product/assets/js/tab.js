/*
 *tab
 *Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
 */

/*===========variable============*/
var TAB = $(".list-tab-js li");
var DIV = $(".tab-js");

//buttton copy will show corresponding with tab record
//var COPY_BTN = document.getElementById("copy_btn");
var btn_red = $('.btn-red');
var btn1 = $('.list-top-right li:first-child a');
var btn2 = $('.list-top-right li:nth-of-type(2) a');
var btn_regist = $('.btn-regist');
var info = $('.info-status');

var EDIT_BTN = $('.btn-edit-js');
var TAB1 = $('.list-tab-js li:first-child');

/*========Event handler tab detail=============*/
/*
 *click 編 集 btn, show list btn of detail.html
 */
$(EDIT_BTN).on('click', function() {
  if (TAB1.hasClass('active')) {
    if (EDIT_BTN.text() === '編 集') {
      EDIT_BTN.text('編集中');
      $('.btn-red-js').css('visibility', 'visible');
      $('.list-top-right-js').css('visibility', 'visible');
      btn1.css('visibility', 'visible');
      btn2.css('visibility', 'visible');
    } else {
      EDIT_BTN.text('編 集');
      $('.btn-red-js').css('visibility', 'hidden');
      $('.list-top-right-js').css('visibility', 'hidden');
      btn1.css('visibility', 'hidden');
      btn2.css('visibility', 'hidden');
    }
  }
})
/*
 *set tab record will be showed when page loads, and button green of it will show
 */
$(document).ready(function() {
  var i = 0;

  for (i = 0; i < TAB.length; i++) {
    if (TAB.eq(i).hasClass("active")) {
      DIV.eq(i).fadeIn();
      if (TAB.eq(i).index() === 0) {
        $('.detail-info-js').hide();
      }
    } else {
      DIV.eq(i).hide();
    }
  }
});

TAB.click(function() {
  event.preventDefault();
  var item = TAB.index(this);
  var i = 0;

  for (i = 0; i < TAB.length; i++) {
    $('.detail-info-js').show();
    TAB.eq(i).removeClass("active");
    DIV.eq(i).hide();
    //hide btn green
    btn_red.css('visibility', 'hidden');
    btn1.css('visibility', 'hidden');
    btn2.css('visibility', 'hidden');
    $('.list-top-arrow-js').css('visibility', 'visible');
    btn_regist.hide();
    info.hide();
  }
  TAB.eq(item).addClass("active");
  DIV.eq(item).fadeIn();

  if (TAB.eq(item).index() === 0) {
    btn_red.css('visibility', 'visible');
    btn1.css('visibility', 'visible');
    btn2.css('visibility', 'visible');
    $('.detail-info-js').hide();
    btn_regist.show();
    info.show();
  }
});