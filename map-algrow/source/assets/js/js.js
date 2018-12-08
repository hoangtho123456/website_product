/*
*js load data from excel
*js layout page2.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/

/*============variable============*/
var url = "H30データベースもと180202.xlsx"; // link file excel

var BTN_SUBMIT = $(".btn-submit-js"); // button submit
var LIST_DATA = []; //list data of the specific nation which got from select box or search input
var arr = []; //list data of all nations use for search
var CHECK_NATIONS_NAME = false; //use for check nation name, if false, data is true, else, data was not correct 

var PICKED_CHECKBOX = $(".map-group-check-js input[type='checkbox']");

var CONTINENTS = $("#continents"); //select box continents
var NATION_SEARCH = $("#search");  //input search nations, it is not depend from continents select-box
var NATIONS = $('#nations'); //select box nation
//Get data from excel
var RESULT = {};

/* set up async GET request */
var oReq;
if (window.XMLHttpRequest) {
  oReq = new XMLHttpRequest();
} else {
  oReq = new ActiveXObject("Microsoft.XMLHTTP");
}

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

oReq.onload = function() {
  //if login success, will show layout, if not, dont show anything!
  //$('body').css('display', 'block');
  var arraybuffer = oReq.response;

  var data = new Uint8Array(arraybuffer);
  var workbook = XLSX.read(data, { type: "array" });
  
  //get list data nations follow sheet name.
  workbook.SheetNames.forEach(function(sheetName) {
    var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
    if (roa.length > 0) {
      RESULT[sheetName] = roa;
    }
  });

  //get key name of object RESULT
  var keyName = Object.keys(RESULT);

  checkActiveCheckbox();
  clickSelect(keyName);
  
  /*
   *click pick any continents will show corresponding data nation
   */
  $(NATION_SEARCH).autocomplete({
    source: function (request, response) {
      var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
      response( $.grep(arr, function(item) {
        return matcher.test(item);
      }) );
    },
    minLength: 0
  });
}

oReq.send();

/*
 *click pick any continents will show corresponding data nation
 */
$("#continents").on('click', function() {
  NATIONS.html("");
  var item = $(this).val();
  for (var key in RESULT) {
    if (RESULT.hasOwnProperty(key)) {
      if (item === key) {
        for (i = 3; i < RESULT[key].length; i++) {
          if (RESULT[key][i][1] !== undefined) {
            NATIONS.append("<option value='" + RESULT[key][i][1] + "'>" + RESULT[key][i][1] + "</option>");
          }
        }
      }
    }
  }
});

/*
*click button submit, browser will get data(depend on checkbox was not disabled) 
*of the specific nation and send to info.html
*/
BTN_SUBMIT.on('click', function() {
  if (typeof(Storage) !== 'undefined') {
    getDataNations();
    var arrayJa = infoJa();
    sessionStorage.setItem('card-nation', LIST_DATA[25]);
    if (typeof(Storage) !== 'undefined') {
      sessionStorage.setItem('listJa', arrayJa);
    }
    
    //get data from checkbox was click, if checkbox was not click,
    //data of that checkbox will not be sent to info.html  
    //if corrected nation name, browser will load other layout. If not, warning! 
    if(CHECK_NATIONS_NAME === false) {
      clickCheckbox();
      window.open('info.html', '_self');
    } else {
      alert("Data was wrong!");
    } 
  } else {
    alert("browser doesn't support Storage!");
  }
});

/*==========function==========*/
/*
*get data nations
*/
function getDataNations() {
  var country = '';
  //if select nation was not disabled, browser will get data follow select box nation
  //else, search input was not disabled, browser will get data follow input search nation
  if (!NATION_SELECT.attr('disabled')) {
    country = NATION_SELECT.val();
    CHECK_NATIONS_NAME = false;
    for (var key in RESULT) {
      if (RESULT.hasOwnProperty(key)) {
        for (i = 3; i < RESULT[key].length; i++) {
          if (RESULT[key][i][1] === country) {
            sessionStorage.setItem("continentsName", key);
            sessionStorage.setItem("stt", RESULT[key][i][0]);
            sessionStorage.setItem("nation", RESULT[key][i][1].trim());
            LIST_DATA = RESULT[key][i];
            break;
          }
        }
      }
    }
  } else {
    country = NATION_SEARCH.val();
    for (var key in RESULT) {
      if (RESULT.hasOwnProperty(key)) {
        for (i = 3; i < RESULT[key].length; i++) {
          if (RESULT[key][i][1] === country) {
            CHECK_NATIONS_NAME = false;
            sessionStorage.setItem("continentsName", key);
            sessionStorage.setItem("stt", RESULT[key][i][0]);
            sessionStorage.setItem("nation", RESULT[key][i][1].trim());
            LIST_DATA = RESULT[key][i];
            return;
          } else {
            CHECK_NATIONS_NAME = true;
          }
        }
        //if value was entered that didnt found in list data, set nation name = ''
        if (sessionStorage.getItem("nation") !== country) {
          sessionStorage.setItem("nation", "");
          sessionStorage.setItem("stt", "");
          sessionStorage.setItem("continentsName", "");
        }
      }
    }
  }
}

/*
 * throw data nations and continents into select tags
 */
function clickSelect(keyName) {
  //show list name of continents
  for (var i = 0; i < keyName.length; i++) {
    CONTINENTS.append("<option value='" + keyName[i] + "'>" + keyName[i] + "</option>");
  }
  var item = CONTINENTS.val(); 
  for (var key in RESULT) {
    if (RESULT.hasOwnProperty(key)) {
      //show list nation names following current continent when page loaded
      for (i = 3; i < RESULT[key].length; i++) {
        if (item === key) {
          if (RESULT[key][i][1] !== undefined) {
            NATIONS.append("<option value='" + RESULT[key][i][1] + "'>" + RESULT[key][i][1] + "</option>");
          }
        }
        if (RESULT[key][i][1] !== undefined) {
          arr.push(RESULT[key][i][1]);
        } 
      }
    }
  }
}

/*
 *Pick data to send to info.html 
 */
function saveDataToLocal(typeCheckBox, arrayList, nameSession) {
  if(!typeCheckBox) {
      sessionStorage.removeItem(nameSession);
      return false;
  }
  var check = true;
  var value = "";
  for(var item in arrayList) {
    if(arrayList[item] === undefined) {
      check = false;
    } else {
        value += arrayList[item] + "";
    }
  }
  if(check === false) {
      sessionStorage.setItem(nameSession, '');
  } else {
      sessionStorage.setItem(nameSession, value);
  }
}

function clickCheckbox() {
  $(PICKED_CHECKBOX).each(function (index) {
    var decideVal = PICKED_CHECKBOX.eq(index).val();
    switch (decideVal) {
      case '州':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[2]], "state");
        break;
      case '首都':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[3]], "capital");
        break;
      case '面積':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[4], LIST_DATA[5]], "area");
        break;

      case '人口':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[6], LIST_DATA[7]], "population");
        break;
      case '平均寿命':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[8]], "average");
        break;
      case '主な言語':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[9]], "mainLanguage");
        break;
      case '主な宗教':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[10]], "mainReligion");
        break;
      case '国・地域の旗について':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[14]], "flag");
        break;      
      case '通貨':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[12]], "currency");
        break;      
      case '伝統的な料理':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[13]], "traDishes");
        break;
      case 'さかんなスポーツや国技':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[15]], "nationalSport");
        break;
      
      case '過去のオリンピック開催都市':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[16]], "OlympicCity");
        break;

      case '2016年リオオリンピックでのメダルかくとく数':
        saveDataToLocal(PICKED_CHECKBOX.eq(index).prop("checked"), [LIST_DATA[17], LIST_DATA[18], LIST_DATA[19], LIST_DATA[20], LIST_DATA[21], LIST_DATA[22]], "medal2016");
        break;
    }
  });
}

/*
*Set status checked for all checkbox when page loaded
*/
function checkActiveCheckbox() {
  $(PICKED_CHECKBOX).each(function (index) {
    $(this).prop("checked", true);
  }); 
}

function infoJa() {
  var arr = [];
  for (var key in RESULT) {
    if (RESULT.hasOwnProperty(key)) {
      for (i = 3; i < RESULT[key].length; i++) {
        if (RESULT[key][i][1] !== undefined && RESULT[key][i][1] == "日本国") {
          arr.push(RESULT[key][i]);
          return arr;
        }
      }
    }
  }
  return arr;
}
