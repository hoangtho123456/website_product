<?php include 'include/index-top.php';?>
<main id="main" class="page-lien-he  lazy lazy-hidden" data-lazy-type="bg" data-lazy-src="assets/images/bg-11.jpg">
  <div class="container"> 
    <div class=" max570">
      <div class="section-header text-center">
        <h2><span>TÌM CỬA HÀNG</span></h2>
        <p>Montes hymenaeos commodo vitae auctor odio pretium hac. Nonummy sociis metus cursus habitant facilisi, et cum etiam nonummy... Fermentum nascetur pulvinar nascetur. Sociosqu facilisi eu pretium!</p>
      </div>  
      <form action="" class="labelblock section-b">
        <div class="row">
            <div class="col-sm-6 ">
              <div class="label">City</div>
                  <select name="city" class="select2-single block" >
                      <option value="0">Ho Chi Minh</option>    
                      <option value="1">Ha Noi</option>    
                  </select>       
            </div>
            <div class="col-sm-6 ">
              <div class="label">Quận / Huyện</div>
                  <select name="district" class="select2-single block" >
                    <option value="0">Quận 1</option>
                    <option value="1">Quận 2</option>
                    <option value="2">Quận 3</option>
                  </select>
            </div>
        </div>
      </form>
    </div>
 

      <div class="row grid-space-0">
          <div class="col-md-6">
            <div class="list-properties">
              <h4>Danh sách cửa hàng:</h4>
                  <ul class="map-list-store">
                      <?php
                      for($i=1;$i<=7;$i++){ 
                     
                          if($i==1){
                              $lat = 10.789769;         $lng= 106.695063;
                          }elseif($i==2){
                              $lat = 10.787904;            $lng=106.691930;
                          }elseif($i==3){
                              $lat = 10.788304;            $lng=106.685568;
                          }elseif($i==4){
                              $lat = 10.768166;            $lng=106.692339;
                          }elseif($i==5){
                              $lat = 10.773141;            $lng=106.684979;
                          }elseif($i==6){
                              $lat = 10.778980;            $lng=106.679550;
                          }elseif($i==7){
                              $lat = 10.774103;            $lng=106.678094;
                          }
                          ?>
                      <li >
                          <div class="item "  data-img="assets/images/sevices/<?php echo $i; ?>.jpg" data-site="04.project-detail.php.php" data-lat="<?php echo $lat; ?>" data-lng="<?php echo $lng; ?>">
                            <div class="title">Ornare pellentesque tempor tempor sollicitudin.</div>
                            <div class="address"><span class="key">Địa chỉ:</span> Magna consequat a duis lectus neque: Interdum aliquam sagittis, Nullam cursus euismod augue.</div>
                            <div class="phone"><span class="key">Điện thoại: </span>08088888</div>
                          </div>    
                      </li>
                      <?php
                      } ?>
                  </ul>

                </div>

          </div>
          <div class="col-md-6">
              <div id="googleMap" data-zoom="6" data-lat="16.474328" data-lng="107.612716">  </div>
          </div>
      </div>
  
  </div>
  
</main>


        
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLozFL2sjFSOp4AnFeIjoIXliYLJZZYe8" type="text/javascript"></script>
        <script type='text/javascript' src='assets/js/select2.full.js'></script>



<script >
  

(function($){


    function bindInfoWindow(marker, map, infowindow, strDescription) {
        google.maps.event.addListener(marker, 'click', function () {
            currentMark = this;
            //marker.setAnimation(google.maps.Animation.BOUNCE);
            
            //this.setIcon(icon2);  change icon on click
            infowindow.setContent(strDescription);
            infowindow.open(map, this);

                var iwOuter = $('.gm-style-iw');
                var iwBackground = iwOuter.prev();
                iwBackground.children(':nth-child(2)').css({'display' : 'none'});
                iwBackground.children(':nth-child(4)').css({'display' : 'none'});
                iwBackground.parent().addClass("gm-style-iw-parent");

        });
    }



    /*-------------------------------------------*/

    var icon = {
        url: "assets/images/pin.svg", // url
        scaledSize: new google.maps.Size(30, 30), // scaled size
    };

    function initialize_load_map() {

        var infowindow = new google.maps.InfoWindow({
            pixelOffset: new google.maps.Size(-140,100),
            maxWidth: 250,
        });



        map = new google.maps.Map(document.getElementById("googleMap"), {});

        //close the map if the user zoom
        google.maps.event.addListener(map,'zoom_changed',function(){
           //map.clearMarkers();
           if (infowindow) {
                infowindow.close();
            }
        });
        var latlngbounds = new google.maps.LatLngBounds();
        var LatLngList = [];
        var markers = [];

        $('.map-list-store li').each(function() {
                var thisa = $(this).children(".item"),
                    title = thisa.find('.title').html(),
                    lat = thisa.data("lat"),
                    lng = thisa.data("lng"),
                    phone = thisa.find('.phone').html();

            
            var marker = new google.maps.Marker({
                position: {
                    lat: lat,
                    lng: lng
                },
                map: map,
                icon: icon
            });
         
            markers.push(marker);
            var details = '<div class="mapCard"><h4 class="title">'+ title +'</h4> <span class="phone">'+ phone +'</span> </div>';
            
            LatLngList.push(new google.maps.LatLng(lat, lng));
            bindInfoWindow(marker, map, infowindow, details);

                    // Click a sync map
                    thisa.click(function(e) {
                        e.preventDefault();
                        var pos = {
                            lat: lat,
                            lng: lng
                        };
                        map.setCenter(pos);
                        map.setZoom(15);
                    });
        });

        LatLngList.forEach(function(latlng) {
            latlngbounds.extend(latlng);
        });
        map.setCenter(latlngbounds.getCenter());
        map.setZoom(14);
        map.setOptions({
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}] //black - white
        });
    };

    initialize_load_map(); 



    $(".select2-single").select2({
        //theme: "bootstrap",
        placeholder: "Select a State",
        maximumSelectionSize: 6,
        containerCssClass: ':all:'
    });


    
    
    var $window = $(window);
    function mapHeight() {    
        $itemH = $('ul.map-list-store li:first-child .item').height();
        $h = $itemH*2+10;
        $('.list-properties .list-property').height($h);
        $('.list-properties #googleMap').height($h);
    }
    //mapHeight();
    $window.resize(function(){
        //mapHeight();
    });    

})(jQuery);
  
</script>


<?php include 'include/index-bottom.php';?>

