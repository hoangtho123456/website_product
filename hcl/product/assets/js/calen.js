/*
@author danghoangtho1132@gmail.com (Đặng Hoàng Thọ)
*Product : create the action for calendar popup like:
  *+show dates of the month
  *+show days of a week
  *+choose fast year or fast month
*/

/*=========popup=================*/
var POPUP = $('#popup');
var LABEL = $('#label_calen');
var CLOSE = $('#btn_close');

LABEL.click(function () {
	POPUP.fadeIn();
});
CLOSE.click(function () {
	POPUP.fadeOut();
});


/*==========calendar==============*/
var NOW = new Date(); 
var CUR_DAY = NOW.getDate();  //the current day in pc
var CUR_MON = NOW.getMonth(); //the current month 
var CUR_YEAR = NOW.getFullYear(); //the current year
var BG_DAY = "";
//determine table of popup, if not, will determine the first table of the page, it's not true
var TABLE = document.getElementById("calen_table");
var CELL_DAYS = TABLE.getElementsByTagName('td'); //the cells in calendar
var LISTMONTH = document.getElementById("calen_select_months"); //list month in combobox-month
var LISTYEAR = document.getElementById("calen_select_years"); //list years in combobox-year
var PREV = document.getElementById("prev");
var NEXT = document.getElementById("next");
var PICK_BTN = document.getElementById("pickDay_btn");//click this, will print datetime into text-input
var PICKED_DAY = document.getElementById("picked_day");

showListYear();
chooseAnyDay();
/*========Event Handler==========*/
LISTMONTH.onchange = function(e) {
  chooseFastMonth();
};

LISTYEAR.onchange = function(e) {
  chooseFastYear();
};

PREV.addEventListener('click', function () {
  chooseYear(-1);
});

NEXT.addEventListener('click', function () {
  chooseYear(1);
});

//if day was picked, get data and show on input (id = "picked_day")
PICK_BTN.addEventListener('click', function () {
  for (var i = 7; i < 49; i++) {
    if(CELL_DAYS[i].style.background === "rgb(255, 241, 166)" || CELL_DAYS[i].style.background === BG_DAY) {
      PICKED_DAY.value = CUR_YEAR + "-" + (CUR_MON + 1) + "-" + CELL_DAYS[i].innerHTML;
      POPUP.fadeOut();
      return true;
    }
  }
});

/*==========function=============*/
function drawCalender(year, month) {
  parseInt(year);
  parseInt(month);
  var firstDay = new Date(year, month, 1).getDay(); //get the first day of month(1 == monday)
  var lastDate = new Date(year, month + 1, 0).getDate(); //get the Last date of month(ex:28 ,29, 30, 31)
  var i = 0, day = 0, d = 0;
  day = 7 + firstDay; 
  
  //cells from 7 to 49 is the days of a months
  for (var i = 7; i < 49; i++) {
    CELL_DAYS[i].innerHTML = "";
    CELL_DAYS[i].style.background = "linear-gradient(white, #efeff0)";
    CELL_DAYS[i].style.border = "none";
  }
  //write number into the cells
  for (var i = 1; i <= lastDate; i++) {
    CELL_DAYS[day].innerHTML = i;
    CELL_DAYS[day].style.fontWeight = "bold";
    CELL_DAYS[day].style.color = "#3d87b2";
    CELL_DAYS[day].style.border = "1px solid #e3e3e3";
    day++;
  }
  for (var i = 7; i < 49; i++) {
    if(CELL_DAYS[i].innerHTML === "") {
      CELL_DAYS[i].style.background = "";
      CELL_DAYS[i].style.border = "none";
    }
  }

  //hide row if all its cells have content "".
  if (CELL_DAYS[42].innerHTML === "") {
    CELL_DAYS[42].parentElement.style.display = "none";
  } else {
    CELL_DAYS[42].parentElement.style.display = "table-row";
  }
  showTimeBox(); //show CUR_MON and CUR_YEAR on combobox
}

//show list year in combobox of year
function showListYear() {
  var i = 0;
  
  for (i = 1954; i < 2100; i++) {
    LISTYEAR.innerHTML += "<option value='" + i + "'>" + i + "</option>";
  }
  drawCalender(CUR_YEAR, CUR_MON);
}

/*
*show current date (update from pc) into the combobox-month and combobox-year
*/
function showTimeBox() {
  LISTMONTH.value = CUR_MON;
  LISTYEAR.value = CUR_YEAR;
}

/*
*action choose Month:
*if month < 0 (value 0 is January), current month is January
*if month > 11 (value 11 is December), current month is December
*/
function chooseMonth(month) {
  CUR_MON += month;
  if (CUR_MON < 0) {
    CUR_MON = 11;
    CUR_YEAR -= 1;
  }
  if (CUR_MON > 11) { 
    CUR_MON = 0;
    CUR_YEAR += 1;
  }
  checkTime();
  drawCalender(CUR_YEAR,CUR_MON);
}

/*
*check if year overflow out of [1954, 2100]?
*/
function checkTime() {
  if (CUR_YEAR < 1954) {
    CUR_YEAR = 1954;
  }
  if (CUR_YEAR >= 2100) {
    CUR_YEAR = 2099;
  }
}

/*
*When you pick a year value, 
*it will be show the current month of the year you just picked
*/
function chooseYear(year) {
  CUR_YEAR = parseInt(CUR_YEAR) + parseInt(year);
  checkTime();
  drawCalender(CUR_YEAR,CUR_MON);
}

/*
*it use for combobox choose fast month
*/
function chooseFastMonth() {
  CUR_MON = parseInt(LISTMONTH.value);
  drawCalender(CUR_YEAR, CUR_MON);
}

/*
*it use for combobox choose fast year
*/
function chooseFastYear() {
  CUR_YEAR = parseInt(LISTYEAR.value);
  drawCalender(CUR_YEAR, CUR_MON);
}

/*
*function choose day by click at the cell of the table
*/
function chooseAnyDay() {
  var i = 0;
  PICKED_DAY.value = CUR_YEAR + "-" + (CUR_MON + 1) + "-" + CUR_DAY;
  for (i = 7; i < 49; i++) {
    CELL_DAYS[i].addEventListener("click", function() {
      var dayCheck = this.innerHTML;
      for (var j = 7; j < 49; j++) {
        CELL_DAYS[j].style.background = "linear-gradient(white, #efeff0)";
      }
      for (var i = 7; i < 49; i++) {
        if(CELL_DAYS[i].innerHTML === "") {
          CELL_DAYS[i].style.background = "";
        }
      }
      if (dayCheck != "") {
        this.style.background = "#fff1a6";
        BG_DAY = this.style.background;
      }
    });
  }
}