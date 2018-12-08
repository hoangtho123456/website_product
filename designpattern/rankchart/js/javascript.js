/*
*rank char
*design pattern: Module design pattern
*Idea: draw rank char in canvas
*@author: danghoangtho1132@gmail.com
*/

var options = {
	canvas : canvas_chart,
	data : [1.5, 3.5, 1.5, 3.5, 2.5, 3.5], //data use for draw curves line
    oyValue: [0, 1, 2, 3, 4], //data default in Oy.
    colorLine: "#00AEEF",
    colorOyValue: "black",
    fontOyValue: "20px Arial" //set font for value on Oy
};

var chart = (function () {
    var canvas = options.canvas;
    canvas.width = 700;
    canvas.height = 400;
    var ctx = canvas.getContext("2d");
    var maxValue = options.oyValue.length;
    var y;
    var stepSize = 1;
    var columnSpace = 70; //top to Oy
    var rowSpace = 30; //space between each data on Ox
    var space = 10; //distance between Oy and value on Oy
    var xScale; //scale following Ox
    var yScale; //Scale following Oy
    var flag = true;
    
    for (var i in options.data) {
      if (options.data[i] < 0 || options.data[i] > 4) {
      	flag = false;
      }
    }

    /*-------------private function-----------*/
    privateDrawChart = function() {
        /*calculate xCale and yScale*/
        xScale = (canvas.width - rowSpace) / (options.data.length);
        yScale = (canvas.height - columnSpace - space) / (maxValue);

        /*Draw value on Oy*/
        ctx.beginPath();
        ctx.fillStyle = options.colorOyValue;
        ctx.font = options.fontOyValue;
        var count = 0;
        var scale = 0;
        
        for (scale = maxValue; scale >= 1; scale = scale - stepSize) {
            y = columnSpace / 2 + (yScale * count * stepSize);
            ctx.fillText(scale, space, y + space - 5);
            count++;
        };
        
        //Draw line Oy
        ctx.beginPath();
        var locationOy; //exactly location of Oy
        locationOy = y = columnSpace / 2 + (yScale * count * stepSize);
        ctx.moveTo(rowSpace, y);
        ctx.lineTo(rowSpace, columnSpace / 4);
        ctx.strokeStyle = "black";
        ctx.stroke();

        //Draw line Ox
        ctx.beginPath();
        y = columnSpace / 2 + (yScale * count * stepSize);
        ctx.fillText(scale, space, y + space -5);
        ctx.moveTo(rowSpace, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = "black";
        ctx.stroke();

        privateDrawCurve(xScale, yScale, locationOy);
    }
    var privateDrawCurve = function (xScale, yScale, locationOy) {
        /*Draw Chart follow sin cos line*/
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = options.colorLine; //color of curves
        ctx.moveTo(xScale * (0.7), locationOy -(yScale * options.data[0] * stepSize));
        var i;
        for (i = 0; i < options.data.length - 1; i++) {
            //control curvature of curve
            var maskX = Math.abs(options.data[i] - options.data[i + 1]) / 5;  
            var maskY = Math.abs(options.data[i] - options.data[i + 1]) / 50;

            if(options.data[i] < options.data[i + 1]) {
                ctx.bezierCurveTo (xScale * (i + 0.7 + maskX), locationOy - (yScale * (options.data[i] + maskY)),
                                  xScale * (i + 1 + 0.7 - maskX), locationOy - (yScale * (options.data[i + 1]) - maskY),
                                  xScale * (i + 1 + 0.7), locationOy - (yScale * options.data[i + 1] * stepSize));
            }
            else {
                ctx.bezierCurveTo (xScale * (i + 0.7 + maskX) ,locationOy - (yScale * (options.data[i] - maskY )),
                                   xScale * (i + 1 + 0.7 - maskX), locationOy - (yScale * (options.data[i + 1] + maskY )),
                                   xScale * (i + 1 + 0.7), locationOy - (yScale * options.data[i + 1] * stepSize));    
            }
        }
        ctx.stroke();
    } 

    /*-------------public function---------------*/
    publicDrawChart = function() {
    	if(flag) {
            privateDrawChart();
    	} else {
            alert("input data is empty or data < 0");
    	}
    }
    return {
        drawChart : publicDrawChart
    }
})();

chart.drawChart();