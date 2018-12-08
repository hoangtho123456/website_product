/*
*tab
*Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
*/

/*===========variable============*/
var TAB = $(".list-tab-js li");
var DIV = $(".tab-js");
var DETAIL_INFO = $(".detail-info-js span");
/*
*set tab record will be showed when page loads, and button green of it will show
*/
$(document).ready(function () {
	var i = 0;

  for (i = 0; i < TAB.length; i++) {
    if(TAB.eq(i).hasClass("active")) {
      DIV.eq(i).fadeIn();
      DETAIL_INFO.hide();
    } else {
      DIV.eq(i).hide();
    } 
  }
});

TAB.click(function () {
  var item = TAB.index(this);
  var i = 0;

  for (i = 0; i < TAB.length; i++) {
    TAB.eq(i).removeClass("active");
    DIV.eq(i).hide();
    DETAIL_INFO.hide();
  }
  if(item != 0) {
    DETAIL_INFO.show();
  }
  TAB.eq(item).addClass("active");
  DIV.eq(item).fadeIn();
});
