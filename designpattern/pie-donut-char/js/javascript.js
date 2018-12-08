/*
*Pie donut char
*design pattern: Module design pattern
*Idea: draw pie donut chart in canvas, show percent value of each part following exercise 
*@author: danghoangtho1132@gmail.com
*/
var charData = {
    "Xuất sắc" : 10,
    "Tốt" : 20,
    "Trung bình" : 10,
    "Kém" : 60
};

var options = {
    canvas : canvas_char,
    data : charData,
    colors : ["blue", "red", "orange", "green"],
    donutHoleSize : 0.5,
    detail: description
};

var chart = (function () {
    var optionCanvas = options.canvas;
    optionCanvas.width = 400;
    optionCanvas.height = 400;
    var canvas = optionCanvas.getContext("2d");
    var colors = options.colors;
    var val;
    var flag = true;
    for (categ in options.data) {
        if (options.data[categ] < 0 || options.data[categ] > 100) {
            flag = false;
        }
        var categ, total = 0;
        for(categ in options.data) {
          val = options.data[categ];
          total += val;
        }
        if(total !== 100) {
            flag = false; 
        }
    }

  /*----------private function--------*/
  /*
  *Method: Draw pie slice
  *param {canvas} obj: canvas
  *param {centerX} int: center circle x
  *param {centerY} int: center circle y
  *param {radius} float: radius of circle or coordinate of the last x
  *param {startAngle} int: start angle where a part of circle draw
  *param {endAngle} int: end angle where a part of circle stop
  */
  var drawPieSlice = function (canvas, centerX, centrY, radius, startAngle, endAngle, color) {
    canvas.fillStyle = color;
    canvas.beginPath();
    canvas.moveTo(centerX, centrY);
    canvas.arc(centerX, centrY, radius, startAngle, endAngle);
    canvas.closePath();
    canvas.fill();
  };

  var privateDrawChart = function () {
    var total = 0;
    var color_index = 0;
    var categ;
    for(categ in options.data) {
    	  val = options.data[categ];
    	  total += val;
    }

    var start_angle = 1.5 * Math.PI;

    for (categ in options.data) {
      val = options.data[categ];
      var sliceAngle = 2 * Math.PI * val/total;
      drawPieSlice(
      	canvas,
      	optionCanvas.width/2,
      	optionCanvas.height/2,
      	Math.min(optionCanvas.width/2, optionCanvas.height/2),
      	start_angle,
      	start_angle + sliceAngle,
      	colors[color_index % colors.length]
      	);
      
      start_angle += sliceAngle;
      color_index++;
    }
   
   //drawing a mini circle in big circle
   //create a donut pie chart
   if(options.donutHoleSize) {
   	 drawPieSlice(
  	   canvas,
  	   optionCanvas.width/2,
  	   optionCanvas.height/2,
  	   options.donutHoleSize * Math.min(optionCanvas.width/2, optionCanvas.height/2),
  	   0,
  	   2 * Math.PI,
  	   "#fff"
  	 );
   }
  };
  
  var privateWriteLabel = function () {
    //draw label for each slice
    start_angle = 1.5 * Math.PI;
   
    for (categ in options.data) {
      val = options.data[categ];
      sliceAngle = 2 * Math.PI * val / total;
      var pieRadius = Math.min(optionCanvas.width / 2, optionCanvas.height / 2);
      var labelX = optionCanvas.width / 2 + (pieRadius / 2) * Math.cos(start_angle + sliceAngle / 2);
      var labelY = optionCanvas.height / 2 + (pieRadius / 2) * Math.sin(start_angle + sliceAngle / 2);

      if (options.donutHoleSize) {
        var offset = (pieRadius * options.donutHoleSize) / 2;
        //determine position of label lay at center position in a slice
        //x = R * cos(angle), y = R * sin(angle)
        labelX = optionCanvas.width / 2 + (offset + pieRadius / 2) * Math.cos(start_angle + sliceAngle / 2);
        labelY = optionCanvas.height / 2 + (offset + pieRadius / 2) * Math.sin(start_angle + sliceAngle / 2);
      }

      var labelText = Math.round(100 * val / total);
      canvas.fillStyle = "white";
      canvas.font = "bold 20px Arial";
      canvas.fillText(labelText + "%", labelX, labelY);
      start_angle += sliceAngle;      
    }
  }

  var privateDrawDetail = function () {
    if (options.detail) {
    	var color_index = 0;
    	var detailHTML = "";
    	var categ;
    	for (categ in options.data) {
          detailHTML += "<div style='margin-bottom: 5px; font-size: 19px;'><span style='display:inline-block;width:20px;background-color:" 
                       + colors[color_index++] + ";'>&nbsp;</span> " + categ + "</div>";
    	}
    	options.detail.innerHTML = detailHTML;
    }
  };

  /*----------public function--------*/
  var publicDrawChart =function () {
  	if (flag) {
        privateDrawChart();
        privateWriteLabel();
        privateDrawDetail();
    } else {
        alert("value input not true");
    }
  }
  return {
    drawChart : publicDrawChart
  }  
})();

chart.drawChart();