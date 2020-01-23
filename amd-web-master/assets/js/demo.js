///////////////////////////////////////////////////////
/**
 * Author: Tho dang
 * Method: create function configuration for PC
 */
///////////////////////////////////////////////////////

//////////////////Main Variables//////////////////////
var configure = {
  cpu: $(".cpu-js"),
  main: $(".main-js"),
  card: $(".card-js"),
  tabs: $(".menu-estimate-js .col-sm-3-js"),
  ram: $(".ram-js"),
  tabGame: $(".menu-estimate-js .game-dropdown-js")
};
///////////////////////////////////////////////////////

///////////////Get data from excel file/////////////
var url = "assets/js/file1.xlsx"; // link file excel

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
  initDefault();
}
oReq.send();

/*====================handle====================*/
/**
 * Action: check active for tab was choosen
 */
configure.tabs.click(function(e) {
  configure.tabs.find('a').removeClass('active');
  configure.tabGame.find('a').removeClass('active');

  $(this).children('a').addClass('active');

  initDefault();
});
/*--------------------------------------------*/
configure.tabGame.find('a').click(function(e) {
  configure.tabGame.find('a').removeClass('active');
  configure.tabs.find('a').removeClass('active');

  $(this).addClass('active');

  initDefault();
})
/*----------------------------------------------*/
/** 
 * action: custom cpu and card following main
*/
configure.main.on('change', function() {
  var result = JSON.parse(JSON.stringify(RESULT));
  configure.cpu.html('');
  configure.card.html('');

  switch($(this).val()) {
    case "X570":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][11],
            firstIndex: 0,
            lastIndex: 13
          };

          var objCard = {
            result: result[key],
            priCPU: result[key][0][result[key][0].length - 1],
            firstIndex: 13,
            lastIndex: result[key][0].length - 1
          };

          customCPUfollowMain(obj);
    
          // configure.cpu.append("<option value='" + result[key][0][13] + "'>" + result[key][0][13] + "</option>");
          
          customCardfollowMain(objCard);
        }
      }
    break;
    
    case "X470":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {

          //object contain variables for getting the list CPU
          var obj = {
            result: result[key], //array data
            priCPU: result[key][0][9], // primary cpu
            firstIndex: 0, //count from 0
            lastIndex: 14 // count to [lastIndex - 1]. vd: 14 elements, count from 0 to 13
          };

          var objCard = {
            result: result[key],
            priCPU: result[key][0][result[key][0].length - 1],
            firstIndex: 13,
            lastIndex: result[key][0].length - 1
          };

          customCPUfollowMain(obj);
          customCardfollowMain(objCard);
        }
      }
    break;

    case "B450":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][7],
            firstIndex: 0,
            lastIndex: 12
          };

          var objCard = {
            result: result[key],
            priCPU: result[key][0][19],
            firstIndex: 13,
            lastIndex: result[key][0].length
          };

          customCPUfollowMain(obj);
          customCardfollowMain(objCard);
        }
      }
    break;

    case "X370":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][6],
            firstIndex: 0,
            lastIndex: 12
          };

          var objCard = {
            result: result[key],
            priCPU: result[key][0][17],
            firstIndex: 13,
            lastIndex: result[key][0].length
          };

          customCPUfollowMain(obj);
          //configure.cpu.append("<option value='" + result[key][0][13] + "'>" + result[key][0][13] + "</option>");
          customCardfollowMain(objCard);
        }
      }
    break;

    case "B350":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][5],
            firstIndex: 0,
            lastIndex: 10
          };

          var objCard = {
            result: result[key],
            priCPU: result[key][0][16],
            firstIndex: 13,
            lastIndex: result[key][0].length
          };

          customCPUfollowMain(obj);
          customCardfollowMain(objCard);
        }
      }
    break;

    case "A320":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][2],
            firstIndex: 0,
            lastIndex: 6
          };

          var objCard = {
            result: result[key],
            priCPU: result[key][0][13],
            firstIndex: 13,
            lastIndex: result[key][0].length
          };

          customCPUfollowMain(obj);
          customCardfollowMain(objCard);
        }
      }
    break;
    default: console.log('????????');
  }
});
/*----------------------------------------------*/
/** 
 * action: custom main and card following cpu
*/
configure.cpu.on('change', function() {
  var result = JSON.parse(JSON.stringify(RESULT));
  configure.main.html('');
  configure.card.html('');
  var mainNames = [];
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      mainNames = [result[key][1][0],result[key][2][0], result[key][3][0], result[key][4][0],
          result[key][5][0], result[key][6][0]];
    }
  }

  switch($(this).val()) {
    case "Athlon 200GE":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][1][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;
    case "Ryzen 3 2200G":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][2][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;
    
    case "Ryzen 3 3200G":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][6][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;
    
    case "Ryzen 5 3400G":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][3][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 5 2600":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][5][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 5 2600X":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][4][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length - 1
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 5 3600":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][3][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length - 1
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 5 3600X":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][1][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length - 1
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 7 3700X":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][2][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length - 1
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 7 3800X":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][2][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length - 2
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 9 3900X":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][2][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length - 2
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;

    case "Ryzen 9 3950X":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][2][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length - 4
          };

          customMainfollowCPU(obj);
          customCardfollowChooseCPU(configure.main.val(), result);
        }
      }
    break;
    default: console.log('????????');
  }
});
/*----------------------------------------------*/
/** 
 * action: custom main and cpu following card
*/
configure.card.on('change', function() {
  var result = JSON.parse(JSON.stringify(RESULT));
  configure.main.html('');
  configure.cpu.html('');
  var mainNames = [];
  
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      mainNames = [result[key][1][0],result[key][2][0], result[key][3][0], result[key][4][0],
          result[key][5][0], result[key][6][0]];
    }
  }

  switch($(this).val()) {
    case "Radeon RX 550":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][1][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;

    case "Tích hợp":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][6][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;

    case "Radeon RX 560":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][1][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;

    case "Radeon RX 570":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][5][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;

    case "Radeon RX 580":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][4][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;

    case "Radeon RX 590":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][1][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;

    case "Radeon RX 5700":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][3][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;
    
    case "Radeon RX 5700XT":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            mainKey: result[key][1][0],
            mainArr: mainNames,
            firstIndex: 0,
            lastIndex: mainNames.length
          };

          customMainfollowCard(obj, result[key][2][0]);
          customCPUfollowChooseCard(configure.main.val(), result);
        }
      }
    break;
    default: console.log('????????');
  }
});

/*======================function=========================*/
/*
@action: load default data for tab LEARN and VP
@param {result}: array DATA
@param {num1}: start index of CPU arr
@param {num2}: length of CPU arr
@param {num1}: start index of Main arr
@param {num2}: length of Main arr
@return: object html seclection of CPU and Main
*/
var loadDefaultDataType1 = (result, num1, num2, num3, num4) => {
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      for (var i = num1; i < num2; i++) {
        if (result[key][0][i]) {
          configure.cpu.append("<option value='" + result[key][0][i] + "'>" + result[key][0][i] + "</option>");
        }
      }

      configure.card.append("<option value='" + result[key][0][13] + "'>" + result[key][0][13] + "</option>");

      for (var i = num3; i < num4; i++) {
        if (result[key][i]) {
          configure.main.append("<option value='" + result[key][i][0] + "'>" + result[key][i][0] + "</option>");
        }
      }
    }
  }
};
/*----------------------------------------------*/
/*
@action: load default data for all tabs
*/
function initDefault() {
  var result = JSON.parse(JSON.stringify(RESULT));
  var tabs = configure.tabs;
  var tabGame = configure.tabGame;
  configure.cpu.html('');
  configure.main.html('');
  configure.card.html('');
  configure.ram.html('');

  tabs.each(function(index) {
    if ($(this).children("a").hasClass("active")) {
      var linkName = $(this).text().trim();
      
      if (linkName == "ĐI HỌC") {
        loadDefaultDataType1(result, 0, 5, 1, 7);
        configure.ram.append("<option value='" + '8GB' + "'>" + '8GB' + "</option>");
      }
      if (linkName == "VĂN PHÒNG") {
        loadDefaultDataType1(result, 0, 4, 1, 7);
        configure.ram.append("<option value='" + '8GB' + "'>" + '8GB' + "</option>");
      }

      if (linkName == "ĐỒ HOẠ") {
        loadDefaultDataDH(result);
        configure.ram.append("<option value='" + '16GB' + "'>" + '16GB' + "</option>");
      }
    }
  });

  var linkTabGame = tabGame.find('li');

  linkTabGame.each(function(index) {
    if ($(this).children("a").hasClass("active")) {
      linkName = $(this).text().trim();

      if (linkName == "eSport") {
        loadDefaultDataEsport(result);
        configure.ram.append("<option value='" + '16GB' + "'>" + '16GB' + "</option>");
      }
      else {
        loadDefaultDataAAA(result);
        configure.ram.append("<option value='" + '16GB' + "'>" + '16GB' + "</option>");
      }
    }
  });
}
/*----------------------------------------------*/
/*
@action: load default data for tab Do Hoa
*/
var loadDefaultDataDH = (result) => {
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      configure.cpu.append("<option value='" + result[key][0][12] + "'>" + result[key][0][12] + "</option>");
      configure.cpu.append("<option value='" + result[key][0][5] + "'>" + result[key][0][5] + "</option>");
      for (var i = 7; i < 10; i++) {
        if (result[key][0][i]) {
          configure.cpu.append("<option value='" + result[key][0][i] + "'>" + result[key][0][i] + "</option>");
        }
      }

      configure.card.append("<option value='" + result[key][0][20] + "'>" + result[key][0][20] + "</option>");
      configure.card.append("<option value='" + result[key][0][19] + "'>" + result[key][0][19] + "</option>");
      configure.card.append("<option value='" + 'Radeon RX 5700' + "'>" + 'Radeon RX 5700' + "</option>");
      configure.card.append("<option value='" + result[key][0][18] + "'>" + result[key][0][18] + "</option>");
      configure.card.append("<option value='" + result[key][0][17] + "'>" + result[key][0][17] + "</option>");

      for (var i = 1; i < 7; i++) {
        if (result[key][i]) {
          configure.main.append("<option value='" + result[key][i][0] + "'>" + result[key][i][0] + "</option>");
        }
      }
    }
  }
};
/*----------------------------------------------*/
var loadDefaultDataEsport = (result) => {
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      for (var i = 2; i < 5; i++) {
        if (result[key][0][i]) {
          configure.cpu.append("<option value='" + result[key][0][i] + "'>" + result[key][0][i] + "</option>");
        }
      }

      configure.card.append("<option value='" + result[key][0][20] + "'>" + result[key][0][20] + "</option>");
      for (var i = 13; i < result[key][0].length - 1; i++) {
        if (result[key][0][i]) {
          configure.card.append("<option value='" + result[key][0][i] + "'>" + result[key][0][i] + "</option>");
        }
      }
      
      for (var i = 1; i < 7; i++) {
        if (result[key][i]) {
          configure.main.append("<option value='" + result[key][i][0] + "'>" + result[key][i][0] + "</option>");
        }
      }
    }
  }
};
/*----------------------------------------------*/
var loadDefaultDataAAA = (result) => {
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
      configure.cpu.append("<option value='" + result[key][0][5] + "'>" + result[key][0][5] + "</option>");
      for (var i = 7; i < 10; i++) {
        if (result[key][0][i]) {
          configure.cpu.append("<option value='" + result[key][0][i] + "'>" + result[key][0][i] + "</option>");
        }
      }

      for (var i = 16; i < result[key][0].length; i++) {
        if (result[key][0][i]) {
          configure.card.append("<option value='" + result[key][0][i] + "'>" + result[key][0][i] + "</option>");
        }
      }
      
      for (var i = 1; i < 7; i++) {
        if (result[key][i]) {
          configure.main.append("<option value='" + result[key][i][0] + "'>" + result[key][i][0] + "</option>");
        }
      }
    }
  }
};
/*----------------------------------------------*/
var customCPUfollowMain = (obj, plusPriCPU = null) => {
  configure.cpu.append("<option value='" + obj.priCPU + "'>" + obj.priCPU + "</option>");

  if(plusPriCPU) {
    configure.cpu.append("<option value='" + plusPriCPU + "'>" + plusPriCPU + "</option>");
  }

  for (var i = obj.firstIndex; i < obj.lastIndex; i++) {
    if (obj.result[0][i] && obj.result[0][i] !== obj.priCPU) {
      if (plusPriCPU && obj.result[0][i] !== plusPriCPU) {
        configure.cpu.append("<option value='" + obj.result[0][i] + "'>" + obj.result[0][i] + "</option>");
      } else configure.cpu.append("<option value='" + obj.result[0][i] + "'>" + obj.result[0][i] + "</option>");
    }
  }
}
/*----------------------------------------------*/
/** 
 * function: custom card following main
*/
/*----------------------------------------------*/
var customCardfollowMain = (obj) => {
  configure.card.append("<option value='" + obj.priCPU + "'>" + 
    obj.priCPU + "</option>");

  for (var i = obj.firstIndex; i < obj.lastIndex; i++) {
    if (obj.result[0][i] && obj.result[0][i] !== obj.priCPU) {
      configure.card.append("<option value='" + obj.result[0][i] + "'>" + obj.result[0][i] + "</option>");
    }
  }
}
/*----------------------------------------------*/
var customMainfollowCPU = (obj) => {
  configure.main.append("<option value='" + obj.mainKey + "'>" + obj.mainKey + "</option>");

  for (var i = obj.firstIndex; i < obj.lastIndex; i++) {
    if (obj.mainArr[i] && obj.mainArr[i] !== obj.mainKey) {
        configure.main.append("<option value='" + obj.mainArr[i] + "'>" + obj.mainArr[i] + "</option>");
    }
  }
}
/*----------------------------------------------*/
var customCardfollowChooseCPU = (value, result) => {
  switch(value) {
    case "X570":
    for (var key in result) {
      if (result.hasOwnProperty(key)) {          
        var objCard = {
          result: result[key],
          priCPU: result[key][0][result[key][0].length - 1],
          firstIndex: 13,
          lastIndex: result[key][0].length - 1
        };
  
        customCardfollowMain(objCard);
      }
    }
    break;

    case "X470":
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        var objCard = {
          result: result[key],
          priCPU: result[key][0][result[key][0].length - 1],
          firstIndex: 13,
          lastIndex: result[key][0].length - 1
        };
  
        customCardfollowMain(objCard);
      }
    }
    break;
    
    case "B450":
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        var objCard = {
          result: result[key],
          priCPU: result[key][0][19],
          firstIndex: 13,
          lastIndex: result[key][0].length
        };

        customCardfollowMain(objCard);
      }
    }
    break;
    
    case "X370":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var objCard = {
            result: result[key],
            priCPU: result[key][0][17],
            firstIndex: 13,
            lastIndex: result[key][0].length
          };
          customCardfollowMain(objCard);
        }
      }
      break;
    case "B350":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var objCard = {
            result: result[key],
            priCPU: result[key][0][16],
            firstIndex: 13,
            lastIndex: result[key][0].length
          };

          customCardfollowMain(objCard);
        }
      }
      break;
    case "A320":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var objCard = {
            result: result[key],
            priCPU: result[key][0][13],
            firstIndex: 13,
            lastIndex: result[key][0].length
          };

          customCardfollowMain(objCard);
        }
      }
      break;
    default: console.log('????????');
  }
}
/*----------------------------------------------*/
var customMainfollowCard = (obj, plusMain) => {
  configure.main.append("<option value='" + obj.mainKey + "'>" + obj.mainKey + "</option>");

  if (plusMain) {
    configure.main.append("<option value='" + plusMain + "'>" + plusMain + "</option>");
  }

  for (var i = obj.firstIndex; i < obj.lastIndex; i++) {
    if (obj.mainArr[i] && obj.mainArr[i] !== obj.mainKey) {
      if (plusMain && plusMain !== obj.mainArr[i]) {
        configure.main.append("<option value='" + obj.mainArr[i] + "'>" + obj.mainArr[i] + "</option>");  
      } else configure.main.append("<option value='" + obj.mainArr[i] + "'>" + obj.mainArr[i] + "</option>");
    }
  }
}
/*----------------------------------------------*/
var customCPUfollowChooseCard = (value, result) => {
  switch(value) {
    case "X570":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][11],
            firstIndex: 0,
            lastIndex: 13
          };

          customCPUfollowMain(obj);
        }
      }
    break;

    case "X470":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][9],
            firstIndex: 0,
            lastIndex: 13
          };

          customCPUfollowMain(obj);
        }
      }
    break;
    
    case "B450":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][7],
            firstIndex: 0,
            lastIndex: 12
          };

          customCPUfollowMain(obj);
        }
      }
    break;
    
    case "X370":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][6],
            firstIndex: 0,
            lastIndex: 12
          };

          customCPUfollowMain(obj);
        }
      }
    break;
    
    case "B350":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][5],
            firstIndex: 0,
            lastIndex: 10
          };

          customCPUfollowMain(obj);
        }
      }
    break;
    
    case "A320":
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
          var obj = {
            result: result[key],
            priCPU: result[key][0][2],
            firstIndex: 0,
            lastIndex: 6
          };

          customCPUfollowMain(obj);
        }
      }
    break;
    default: break;
  }
}
