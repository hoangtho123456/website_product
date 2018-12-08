/*
*js layout info.html
*Author: Dang Hoang Tho(danghoangtho1994@gmail.com)
*/

/*=========Variable=========*/
var COUNTRY_NAME = $('.country-name-js'); //country name label
var LIST_INFO = $('.info-p-tit'); //list info of specific nation was picked from index.html
var BTN_COMPARE = $('.info-compare-js');
var FLAG  = $('#flag');
var ARR_JA = []; //array data of japan
var LIST_JA = $('.info-ja-js'); //list tags cover data of japan nation

/*=========Event handler=========*/
$(document).ready(function() {
  ARR_JA = showInfoJa();
  
  //Convert data japan to text hirigana
  for (var i = 0; i < ARR_JA.length; i++) {
    ARR_JA[i] = sliceDataRub(ARR_JA[i]);
  }
  showListInfo();
});

/*
*Click compare btn, show data Japan beside current nation data for user can compare.
*/
$(BTN_COMPARE).on('click', function () {
  if(typeof(Storage) !== "undefined") {
    
    $(LIST_JA).each(function (index) {
      var pa = $(LIST_JA).eq(index).siblings(LIST_INFO);
      switch(pa.data('tit')) {
        case '州':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[2]]);
          break;
        case '首都':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[3]]);
          break;
        case '面積':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[4], ARR_JA[5]]);
          break;
        case '人口':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[6], ARR_JA[7]]);
          break;
        case '平均寿命':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[8]]);
          break;
        case '主な言語':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[9]]);
          break;
        case '主な宗教':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[10]]);
          break;
        case '通貨':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[12]]);
          break;
        case '伝統的な料理':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[13]]);
          break;
        case '国・地域の旗について':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[14]]);
          break;
        case 'さかんなスポーツ':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[15]]);
          break;
        case '過去のオリンピック開催都市':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[16]]);
          break;
        case '2016年リオオリンピックでのメダルかくとく数':
          saveDataJa(LIST_JA.eq(index), [ARR_JA[17],ARR_JA[18],ARR_JA[19],ARR_JA[20],ARR_JA[21],ARR_JA[22]]);
          break;
        default: break;
      }     
    });
  }
});

/*
*click link nation, open new tab contains nation flags, and user can download
*/
$('#flag_down').click(function() {
  sessionStorage.setItem('flagcard', FLAG.attr('src'));
  window.open("flag.html","_blank");
});

$('#card_down').click(function() {
  var nameSlice = sliceNationName(sessionStorage.getItem("nation"));
  window.open("assets/images/" + "20180222_国カード" + "/" 
           + sessionStorage.getItem("stt") + nameSlice + ".pdf", "_blank");
});

$('.link-header-js').click(function () {
  window.open("top.html","_self");
});
/*=========function=========*/
function showInfoJa() {
  var res = sessionStorage.getItem('listJa').split(',');
  return res;
}

/*
*function get data of japan and throw data for user when he/ she click btn 'compare'
*@param {tag} textTit: tags use for show data japan nation
*@param {array} listDataJa: array data of japan.
*/
function saveDataJa(textTit, listDataJa) {
  var val = '';
  if (textTit.text() === "") {
    for (var item in listDataJa) {

      if(listDataJa[item] !== "") {
        val += listDataJa[item] + "";
      } else {
        val = "";
      } 
    }
    if (val !== "") {
      textTit.html("【" + val + "】");
    }
  } else {
    textTit.html("");
  }
}

/*
*get data from sessionStorage, then throw it into each label data.
*@param {session} sessionData 
*@param {string} textInfo is data of nation which stored in session
*will be covered by tag span, beside tag label 
*/
function saveDataNation(sessionData, tagInfo) {
  if (sessionData !== null) {
    var newData = sliceDataRub(sessionData);
    //console.log(newData);
    tagInfo.next().html(newData);
    tagInfo.parent().css('display','block');
  } else {
    tagInfo.css("display", "none");
    tagInfo.parent().css("display", "none");
  }
}

/*
*Show list info of picked nations from index.html
*/
function showListInfo() {
  if(typeof(Storage) !== 'undefined') {
    if(sessionStorage.getItem("nation") !== "") {
      COUNTRY_NAME.text(sessionStorage.getItem("nation"));
      COUNTRY_NAME.css({'padding': '5px 10px', 'border': '2px solid black'});
      var nameSlice = sliceNationName(sessionStorage.getItem("nation"));

      FLAG.attr('src', "assets/images/" + "国旗データ" + "/" 
           + sessionStorage.getItem("continentsName") + "/"
           + sessionStorage.getItem("stt") /*sessionStorage.getItem("nation")*/ + nameSlice + ".png" );
     /*console.log("assets/images/" + "国旗データ" + "/" + sessionStorage.getItem("continentsName") + "/"
           + sessionStorage.getItem("stt") + nameSlice + ".png");*/
      FLAG.css({
        'display': 'block'
      });
    }
    
    //if nation has not card, hide link
    if (sessionStorage.getItem('card-nation') === 'undefined') {
      $('#card_down').css({'visibility': 'hidden'});
    }
    
    for (var i = 0; i < LIST_INFO.length; i++) {
      switch(LIST_INFO.eq(i).data('tit')) {
        case '州':
          saveDataNation(sessionStorage.getItem("state"), LIST_INFO.eq(i));
          break;
        case '首都':
          saveDataNation(sessionStorage.getItem("capital"), LIST_INFO.eq(i));
          break;
        case '面積':
          saveDataNation(sessionStorage.getItem("area"), LIST_INFO.eq(i));
          break;
        case '人口':
          saveDataNation(sessionStorage.getItem("population"), LIST_INFO.eq(i));
          break;
        case '平均寿命':
          saveDataNation(sessionStorage.getItem("average"), LIST_INFO.eq(i));
          break;
        case '主な言語':
          saveDataNation(sessionStorage.getItem("mainLanguage"), LIST_INFO.eq(i));
          break;
        case '主な宗教':
          saveDataNation(sessionStorage.getItem("mainReligion"), LIST_INFO.eq(i));
          break;
        case '通貨':
          saveDataNation(sessionStorage.getItem("currency"), LIST_INFO.eq(i));
          break;
        case '伝統的な料理':
          saveDataNation(sessionStorage.getItem("traDishes"), LIST_INFO.eq(i));
          break;
        case '国・地域の旗について':
          saveDataNation(sessionStorage.getItem("flag"), LIST_INFO.eq(i));
          break;
        case 'さかんなスポーツ':
          saveDataNation(sessionStorage.getItem("nationalSport"), LIST_INFO.eq(i));
          break;
        case '過去のオリンピック開催都市':
          saveDataNation(sessionStorage.getItem("OlympicCity"), LIST_INFO.eq(i));
          break;
        case '2016年リオオリンピックでのメダルかくとく数':
          saveDataNation(sessionStorage.getItem("medal2016"), LIST_INFO.eq(i));
          break;
      }
    }
  }
}

/*
*action: optimize string nation name
*/
function sliceNationName (nationName) {
  var nameDemo = nationName;//sessionStorage.getItem("nation")
  var indexHiri = nameDemo.indexOf("【");
  var circleChar = nameDemo.indexOf("◎");
  var nameSlice = "";
  if (indexHiri > 0) {
    if (circleChar > 0) {
      var nameVer = nameDemo.slice(0, indexHiri);
      var nameVerSub1 = nameVer.slice(0, circleChar);
      var nameVerSub2 = nameVer.slice(circleChar + 1);
      nameSlice = nameVerSub1 + nameVerSub2; 
    }
  } else {
    nameSlice = nameDemo;
  }
  return nameSlice; 
}

/*
*Idea: use method replace to replace text was marked in text to hirigana text on html(Duy)
*Action: covert text higarana from normal text to html ruby tag
*/
function sliceDataRub(dataText) {
  var str = dataText; 
  var re = str.replace(/(◎)([\u3000-\u303F]+|[\u3040-\u309F]+|[\u30A0-\u30FF]+|[\uFF00-\uFFEF]+|[\u4E00-\u9FAF]+|[\u2605-\u2606]+|[\u2190-\u2195]+|\u203B+)【【([\u3000-\u303F]+|[\u3040-\u309F]+|[\u30A0-\u30FF]+|[\uFF00-\uFFEF]+|[\u4E00-\u9FAF]+|[\u2605-\u2606]+|[\u2190-\u2195]+|\u203B+)】】/g, function (x) {
      var ruby = x.replace('◎','<ruby>');
      var rt = ruby.replace('【【', '<rt>');
      var end = rt.replace('】】', '</rt></ruby>');
      //console.log(end);
      return end;
  });
  return re;
}
