<?php include 'include/index-top.php';?>

<style>
/*==========tho_dang==================*/
.c-dropdown1 {
  position: relative;
  display: block;
  transition: all ease 0.5s;
}

.c-dropdown1 ul {
  //display: none;
  opacity: 0;
  position: absolute;
  width: 100%; 
  z-index: 1;
  top: -50px; /* the height of the main nav */
  transition: all ease 0.5s;
}

/* Display Dropdowns on Hover */
.c-dropdown1:hover ul {
  //display: block;
  opacity: 1;
  top: 0;
}

.c-dropdown1 ul li {
  position: relative;
  list-style-type: none;
  z-index: 1;
}

.c-dropdown1__box1 {
  position: inherit;
  top: -20px;
}

.am47 { position: relative; }
</style>

<div class="afterHeader"></div>
<main id="main" class="section page-estimate bgt0"  >
  <div class="container"> 
    <div class=" max770">






      <div class="section-header text-center">
        <h1><span>ƯỚC TÍNH CẤU HÌNH MONG MUỐN</span></h1>
      </div>  

      <div class="row menu-estimate menu-estimate-js">
        <div class="col-sm-3 col-sm-3-js">
          <a href="#" class="item active">ĐI HỌC</a>
        </div>
        <div class="col-sm-3 col-sm-3-js">
          <a href="#" class="item">VĂN PHÒNG</a>
        </div>
        <div class="col-sm-3 col-sm-3-js">
          <a href="#" class="item">ĐỒ HOẠ</a>
        </div>
        <div class="col-sm-3 c-dropdown1 game-dropdown-js">
          <p href="#" class="item">GAME</p>
          <div class="c-dropdown1__box1" >
            <ul>
              <li><a class="item" href="#">eSport</a></li>
              <li><a class="item" href="#">AAA</a></li>
            </ul>
            </div>
        </div>

      </div>

      <div class="title-form">Chọn cấu hình:</div>



      <form action="" >
            <div class="rowlabel label-100">
              <div class="item">
                <div class="title">CPU</div>
                <div class="text">
                  <select name="district" class="select2-single block cpu-js" >
                  </select>                  
                </div>
              </div>
              <div class="item">
                <div class="title">MAIN</div>
                <div class="text">
                  <select name="district" class="select2-single block main-js" >
                    <!-- <option value="0">Montes hymenaeos commodo vitae auctor odio pretium hac Nonummy sociis metus cursus habitant facilis.</option>
                    <option value="1">Quận 2</option>
                    <option value="2">Quận 3</option> -->
                  </select>                  
                </div>
              </div>
              <div class="item">
                <div class="title">CARD</div>
                <div class="text">
                  <select name="district" class="select2-single block card-js" >
                    <!-- <option value="0">Montes hymenaeos commodo vitae auctor odio pretium hac Nonummy sociis metus cursus habitant facilis.</option>
                    <option value="1">Quận 2</option>
                    <option value="2">Quận 3</option> -->
                  </select>                  
                </div>
              </div>



              <div class="item">
                <div class="title">RAM</div>
                <div class="text">
                  <div class="row">
                    <div class="col-sm-4">                      
                      <select name="district" class="select2-single block" >
                        <option value="0">Hãng sản xuất</option>
                        <!-- <option value="1">Quận 2</option>
                        <option value="2">Quận 3</option> -->
                      </select>                  
                    </div>
                    <div class="col-sm-4">                      
                      <select name="district" class="select2-single block" >
                        <option value="0">Bus</option>
                        <!-- <option value="1">Quận 2</option>
                        <option value="2">Quận 3</option> -->
                      </select>                  
                    </div>
                    <div class="col-sm-4">                      
                      <select name="district" class="select2-single block ram-js" >
                        <option value="0">Dung lượng</option>
                        <!-- <option value="1">Quận 2</option>
                        <option value="2">Quận 3</option> -->
                      </select>                  
                    </div>                                        
                  </div>                  
                </div>
              </div>


              <div class="item">
                <div class="title">SSD</div>
                <div class="text">
                  <div class="row">
                    <div class="col-sm-4">                      
                      <select name="district" class="select2-single block" >
                        <option value="0">Hãng sản xuất</option>
                        <option value="1">Quận 2</option>
                        <option value="2">Quận 3</option>
                      </select>                  
                    </div>
                    <div class="col-sm-4">                      
                      <select name="district" class="select2-single block" >
                        <option value="0">Dung lượng</option>
                        <option value="1">Quận 2</option>
                        <option value="2">Quận 3</option>
                      </select>                  
                    </div>
                                     
                  </div>                  
                </div>
              </div>
            </div>

            <p class="text-center"><button class="btn"><span>Gửi liên hệ</span></button></p>





      </form>





    </div>
 
  </div>


  

</main>

<section class="am47" >
  <div class="container"> 
    <div class="total-price"><span class="text">GIÁ CỦA CPU:</span> <h2>1.250.000 VNĐ</h2></div>
    <p>Bạn vui lòng nhập thêm thông tin dưới đây để chúng tôi hỗ trợ miễn phí về chi phí cấu hình mong muốn</p>
    <form action="" class="labelblock">
      <div class="row">
        <div class="col-sm-3 col-md-3">
            <label class="rowlabel">
              <span>Họ và tên </span>
              <input placeholder="Type something" type="text" class="input">
            </label>
        </div>
        <div class="col-sm-3 col-md-3">
            <label class="rowlabel">
              <span>Số điện thoại</span>
              <input placeholder="Type something" type="text" class="input">
            </label>
        </div>
        <div class="col-sm-3 col-md-3">
            <label class="rowlabel">
              <span>Email</span>
              <input placeholder="Type something" type="text" class="input">
            </label>
        </div>
        <div class="col-sm-3 col-md-3">
            <label class="rowlabel">
              <span>Tỉnh / Thành phố</span>
              <select name="slb_city"  class="select2-single block" id="slb_city"> </select>    
            </label>
        </div>
        <div class="col-sm-3 col-md-3">
            <label class="rowlabel">
              <span>Quận / Huyện</span>
              <select name="slb_district"  class="select2-single block"  id="slb_district"></select>    
            </label>
        </div>
        <div class="col-sm-3 col-md-3">
            <label class="rowlabel">
              <span>Chọn đại lý</span>
              <select name="slb_store"  class="select2-single  block" id="slb_store"> </select>    
            </label>
        </div>
        <div class="col-sm-3 col-md-3">
          <label class="rowlabel">
            <span> &nbsp; </span>
            <button class="btn btn-white" type="submit "><span>Gửi đi</span></button>
          </label>
        </div>
      </div>
    </form>
  </div>
</section>    

<script src="assets/js/xlsx.full.min.js"></script>
<script type='text/javascript' src="assets/js/demo.js">
</script>

<script type='text/javascript' src='assets/js/select2.full.js'></script>




        <script >


var data_district = [{
        "id": "1",
        "name": "Tp Hồ Chí Minh",
        "district": [
        {
            "id": "1",
            "name": "Quận 1",
            "store": [{
                "name": "TTTM NowZone ",
                "address": "235 Nguyễn Văn Cừ, Quận 1",
                "phone": "0123456789",
                "id": "1",

            }, {
                "name": "26 Huỳnh Thúc Kháng",
                "address": "235 Nguyễn Văn Cừ, Quận 1",
                "phone": "0123456789",
                "id": "2",
            }]
        }, {
            "id": "2",
            "name": "Quận 3",
            "store": [{

                "name": "42 Trần Cao Vân",
    
                "address": "235 Nguyễn Văn Cừ, Quận 1",
                "phone": "0123456789",
                "id": "3",
            }, {
                "name": "B-004A, TTTM RomeA - 117 Nguyễn Đình Chiểu, Quận 3",
 
                "address": "235 Nguyễn Văn Cừ",
                "phone": "0123456789",
                "id": "4",
            }]
        }, {
            "id": "5",
            "name": "Phú Nhuận",
            "store": [{

                "name": "Centre Point",
  
                "address": "235 Nguyễn Văn Cừ, Quận 1",
                "phone": "0123456789",
                "id": "5",
            }]
        }, {
            "id": "6",
            "name": "Tân Bình",
            "store": [{

                "name": "1B Cộng Hòa",
     
                "address": "235 Nguyễn Văn Cừ, Quận 1",
                "phone": "0123456789",
                "id": "6",
            }]
        }, {
            "id": "7",
            "name": "Bình Tân",
            "store": [{

                "name": "G17, Aeon Mall Bình Tân ",
    
                "address": "235 Nguyễn Văn Cừ, Quận 1",
                "phone": "0123456789",
                "id": "7",
            }]
        }]
    }, {
        "id": "2",
        "name": "Bình Dương",

        "district": [{
            "id": "1",
            "name": "Thị xã Thuận An",
            "store": [{

                "name": "G31, Aeon Mall Bình Dương Canary",
    
                "address": "235 Nguyễn Văn Cừ, Quận 1",
                "phone": "0123456789",
                "id": "8",
            }]
            
        }]
}];



(function($){
    var page = {};
    $(document).ready(function() {
        page.district();
    });

    page.district = function() {
        loadCityFirst();
        loadDistrict();
        loadDistrictFirst();
        loadStoreFirst();
        $('#slb_city').on('change', function(e) {
            loadDistrict();
            loadStore();
        });
        $("#slb_district").on('change', function() {
            loadStore();
        });
    };

    function loadCityFirst() {
      for (var i = 0; i < data_district.length; i++) {
        $("#slb_city").append('<option  value="' + data_district[i].id + '"  >' + data_district[i].name + '</option>');
      }  
      console.log($("#slb_city").val());          
    }        

    function loadDistrictFirst() {
      $('#slb_district').html('');
      for (var j = 0; j < data_district[0].district.length; j++) {
          $("#slb_district").append('<option value="' + data_district[0].district[j].id + '">' + data_district[0].district[j].name + '</option>');
      }
    }
    function loadStoreFirst() {
      $('#slb_store').html('');
      for (var k = 0; k < data_district[0].district[0].store.length; k++) {
        $("#slb_store").append('<option value="' + data_district[0].district[0].store[k].id + '">' + data_district[0].district[0].store[k].name + '</option>');
      }
    }


    function loadDistrict() {
        $('#slb_city').on('change', function () {
            console.log($(this).val());
            for (var i = 0; i < data_district.length; i++) {
                if (data_district[i].id == $(this).val()) {
                    //$('#slb_district').html('<option value="000">-Select State-</option>');
                    $('#slb_district').html('');
                    for (var j = 0; j < data_district[i].district.length; j++) {
                        $("#slb_district").append('<option value="' + data_district[i].district[j].id + '">' + data_district[i].district[j].name + '</option>');
                    }
                }
            }
        });
    }

    function loadStore() {
        var c = Number($("#slb_city").val());
        var d = Number($("#slb_district").val());
        var store = [];
        $('#slb_store').html('');
        for (var i = 0; i < data_district.length; i++) {
            if (c == data_district[i].id) {
                for (var j = 0; j < data_district[i].district.length; j++) {
                  if (d == data_district[i].district[j].id) {
                      store = data_district[i].district[j].store;
                      break;
                  }
                }
            }
        }

        for (var i = 0; i < store.length; i++) {
            $("#slb_store").append('<option value="' + store[i].id + '">' + store[i].name + '</option>');
        }
    }

    $(".select2-single").select2({
        placeholder: "Select a State",
        maximumSelectionSize: 6,
        containerCssClass: ':all:'
    });



    am47 = $('.am47').outerHeight();
    $('body').css({'padding-bottom':am47});
    $('.am47').css({'z-index':300});


})(jQuery);
  
</script>
<?php include 'include/index-bottom.php';?>

