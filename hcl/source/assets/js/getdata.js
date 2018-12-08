window.onload = function(e) {
  if(navigator.cookieEnabled) {
  	if (getCookie('url').indexOf('detail.html') != -1) {
      var name = getCookie('name');
      $('#code').val(name);
  	} else if (getCookie('url').indexOf('access.html') != -1) {
  		var name = getCookie('name');
      $('.acc-name-js').text(name);
  	}
  } else {alert("please start cookie to get data!");}
}
