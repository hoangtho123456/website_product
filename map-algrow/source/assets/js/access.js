/*
*js permit access to sub page when user login successfully, if not, reload index.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/
$(document).ready(function () {
  if (sessionStorage.getItem('inSite') === 'false' || !sessionStorage.getItem('inSite')) {
    window.open('index.html', '_self');
  } 
});