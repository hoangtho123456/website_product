/*
*js check login
*js layout index.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/

/*============variable============*/
const ZIPCODE = "singwrd18";
var IN_SITE = ''; //set permission for user, dont permit user accesses directly to sub layout, except index.html

if(typeof(Storage) !== 'undefined') {
  IN_SITE = sessionStorage.setItem('inSite','false'); 
} else {
  alert("browser doesn't support Storage!");
}

var INPUT_CODE = $(".login-list-btn input");
var BTN_LOGIN = $(".btn-login-js");

/*============Event handler============*/
$(BTN_LOGIN).on('click', function () {
  if (typeof(Storage) !== 'undefined') {
    var temp = INPUT_CODE.val();
  
    if (ZIPCODE === temp) {
  	  IN_SITE = sessionStorage.setItem('inSite','true');
      window.open('top.html', '_self');
    } else {
  	  $('.login-list-btn input[type="text"]').css('border-color','red');
  	  IN_SITE = sessionStorage.setItem('inSite','false');
    }
  } else {alert("browser doesn't support Storage!");}
});

$('#zip_code').keypress(function (e) {
  var key = e.which;
  if (key === 13) {
    BTN_LOGIN.click();
    return false;
  }
});
