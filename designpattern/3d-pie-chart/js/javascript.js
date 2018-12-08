/*
*Pie 3D char
*design pattern: Module design pattern 
*@author: danghoangtho1132@gmail.com
*/
var Data = {
    data : [80, 20],
    dataTitle : ["ĐÃ ĐẠT", "CHƯA ĐẠT"]
};

var options = {
    canvas: canvas_char,
    data : Data.data,
    dataTitle : Data.dataTitle,
    color3D : ["#00ccff", "#0033cc", "#ff0000", "#a00505"]
};

var chart = (function () {
    var canvas = options.canvas;
    canvas.width = 650;
    canvas.height = 400;
    var ctx = canvas.getContext("2d");
    var data = options.data;
    var dataTitle = options.dataTitle;
    var colors3D = options.color3D;
    var radius = Math.min(canvas.width / 2, canvas.height / 2);
    var centerX = canvas.width / 2;
    var centerY = canvas.height;
    var xScale = 1;
    var yScale = 0.5;
    var space = 15;
    var total = 0;
    var successAngle = 0;
    var flag = true;

    //check value input
    for (var i in data) {
        if (data[i] < 0 || data[i] > 100) {
            flag = false;
        }
        var categ, checkTotal = 0;
        for(categ in options.data) {
          val = options.data[categ];
          checkTotal += val;
        }
        if(checkTotal !== 100) {
            flag = false; 
        }
    }

    /*------------private function--------------*/
    
    //function draw success slice or fail slice
    var privateDrawChart2D = function (space, color, start_angle, end_angle, numDrawtimes) {
        ctx.save();
        ctx.scale(xScale, yScale); //scale pie from circle to elipse
        ctx.beginPath();
        ctx.arc(centerX + space, centerY - space + numDrawtimes, radius, start_angle, end_angle);
        ctx.lineTo(centerX + space, centerY - space + numDrawtimes); //distance between 2 slice
        ctx.restore();

        if(numDrawtimes === 1) {
          ctx.fillStyle = colors3D[color];
        } else {
          ctx.fillStyle = colors3D[color + 1];
        }
        ctx.fill();
    };

    //draw chart 3D
    var privateDrawChart3D = function () {
        var i;
        for (categ in data) {
            total += data[categ];
        }
        successAngle = 2 * Math.PI * data[0] / total;
        if(data[0] !== 100 && data[1] !== 100) {
            for (i = 100; i > 0; i--) {
                privateDrawChart2D(0, 0, 0, successAngle, i);
                privateDrawChart2D(space, 2, successAngle, -0.01, i);
            }
        } else if(data[0] === 100){
            for (i = 100; i > 0; i--) {
                privateDrawChart2D(0, 0, 0, successAngle, i);
             }
        } else if (data[1] === 100) {
            for (i = 100; i > 0; i--) {
                privateDrawChart2D(0, 2, successAngle, 2 * Math.PI, i);
            }
        }
    };

    //draw line for comment percent
    var privateDrawLine = function (firstX, firstY, secondX, secondY, width, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(firstX, firstY);
        ctx.lineTo(secondX, secondY);
        ctx.lineTo(secondX + width, secondY);
        ctx.stroke();
    };

    //draw detail title for each slice
    var privateDescription = function () {
      var start_angle = 0,
          categ;
      for (categ in data) {
        var width = 0;
        var val = data[categ];
        var percent = val / total;
        var end_angle = 2 * Math.PI * percent;

        width = percent < 0.5 ? 110 : -110; //if percent < 0.5, line and text will lay on the right oh screen, or reverse
        var curX = canvas.width / 3 + (radius / 2) * Math.cos(start_angle + end_angle / 2) + 100;
        var curY = canvas.width / 3 + (radius / 2) * Math.sin(start_angle + end_angle / 2) * yScale - 10;
        privateDrawLine(curX, curY, curX + width, curY - 70, width, "brown");
        ctx.fillStyle = "#000";
        ctx.font = "17px Arial";
        width = percent < 0.5 ? 56 : -105;
        //curX + width * 2 use for move text to the edge of line 
        ctx.fillText(Math.round(percent * 100) + "% " + dataTitle[categ], curX + width * 2, curY - 75);
        start_angle += end_angle;
      }
    }

    /*------------public function--------------*/
    var publicDrawChart3D = function () {
      if(flag) {
        privateDrawChart3D();
        privateDescription();
      } else alert("input value is not true!");
    }
    return {
      drawChart : publicDrawChart3D
    }
})();

$(document).ready( function () {
    chart.drawChart();
});
