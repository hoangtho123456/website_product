/*
 *js use for layout detail.html, visiting-list.html, detail-list.html
 *Author: Dang Hoang Tho(danhoangtho1132@gmail.com)
 */

var NEW = $('.crnew-btn');
var BG_STATUS = $('.info-status');
/*========Event handler access============*/
$(document).ready(function() {
  var bgBox = getCookie('bg-box');
  //set status
  if ($('.info-status').css('background-color') != bgBox) {
    switch (bgBox) {
      case 'rgb(204, 51, 0)':
        BG_STATUS.css({ 'background-color': '#c00000', 'color': 'white', 'border': '1px solid #c00000' });
        BG_STATUS.text('実績登録済み 2017/12/12 14:23:25');
        break;
      case 'rgba(0, 0, 0, 0)':
        BG_STATUS.css({ 'background-color': 'white', 'color': 'black', 'border': '1px solid #c00000' });
        BG_STATUS.text('実 績 未 登 録');
        break;
    }
  }
  showFollowNewBtn(); //show list btn when click "New" in access.html
});

/*
 *click btn in list, store bg in small box and bring to detail.html 
 */
$('.dl-info-access-js').on('click', function() {
  var item = $('.dl-info-access-js').index(this);
  var childBox = $('.dl-info-access-js').eq(item).children('div');
  if (navigator.cookieEnabled) {
    setCookie('bg-box', childBox.css('background-color'), -1);
    window.open('detail.html', '_self');
  } else { alert("please start cookie to get data!"); }
});

$(NEW).on('click', function() {
  setCookie('control-new', true, 1);
});

/*========Function===========*/
/*
 *click btn 新 規, show Visiting Information page,
 *do not display “<”, “>”, “複写”, “新規".
 */
function showFollowNewBtn() {
  if (navigator.cookieEnabled) {
    var item = getCookie('control-new');
    var btn1 = $('.list-top-right li:first-child a');
    var btn2 = $('.list-top-right li:nth-of-type(2) a');
    if (getCookie('control-new') == "true") {
      $('.btn-red-js').css('visibility', 'hidden');
      btn1.css('visibility', 'hidden');
      btn2.css('visibility', 'hidden');
      $('.list-top-arrow-js').css('visibility', 'hidden');
      
      BG_STATUS.css({ 'background-color': 'white', 'color': 'black', 'border': '1px solid #c00000' });
      BG_STATUS.text('実 績 未 登 録');
      setCookie('control-new',false, -1);
    }
  }
}