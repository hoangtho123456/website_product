/*
*Column char
*design pattern: Module design pattern
*Idea: draw Column Ox(top line of the screen), 
*then move down bottom line by method stranlate, and invert it by scale
*@author: danghoangtho1132@gmail.com
*/

//input column data
var ColumnData = {
    data: [2, 0.05, 3, 4, 4, 3]
}
var option = {
    canvas : canvas_chart,
    data : ColumnData.data,
    description : description,
    color : ["#2a71d4"],
    columnName : ["A", "B", "C", "D", "E", "F"]
}

//class column chart
var ColumnChart = (function () {
    var canvas = option.canvas;
    canvas.width = 600;
    canvas.height = 400;
    var ctx = canvas.getContext("2d");
    ctx.fillStle = "#ff9800";
    ctx.font = "18px Arial";
   
    var data = option.data;
    var descript = option.description;
    var color = option.color;
    var columnName = option.columnName;
    var colPosition = 50; //the first position at Ox-acis of column
    var stepSizeY = 1;
    var maxValue = 0;

    for (categ in data) {
        if(data[categ] > maxValue) {
            maxValue = data[categ] + 1;
        }
    }
    var margin = 10; //Distance of write letters
    var xScale = (canvas.width - colPosition) / data.length; //width x of column
    var yScale = (canvas.height - colPosition - margin) / maxValue;  //distance between each honrizontal line

    var flag = true;
    for (var categ in data) {
        if(data[categ] < 0 || data[categ] > 4) {
            flag = false;
        }
    }
    
    /*----------------public function-------------*/
    
    //Draw column chart
    privateDrawColumnChart = function () {
        ctx.beginPath();
        var scale,
            i,
            temp = 1;
        ctx.fillStyle = "#000";

        //Write numbers and line on 0y
        for (scale = 0; scale < maxValue ;scale += stepSizeY) {
            var distance = yScale * temp * stepSizeY;
            var y = canvas.height - distance; //position y will draw next
            ctx.fillText(scale, margin, y);
            ctx.moveTo(colPosition, y);
            ctx.lineTo(canvas.width, y);
            temp++;
        }
        
        //write letters on Ox
        for (i = 0; i < data.length ;i++) {
            var x = (i + 0.7) * xScale; //position x will draw next
            ctx.fillText(columnName[i % columnName.length], x, canvas.height - colPosition + margin);
        }

        ctx.fillStyle = "#000";
        ctx.stroke();

        //draw column chart
        //translate column because y scale with yScale
        ctx.translate(colPosition, canvas.height - (yScale * stepSizeY)); //draw first column is started from this coordinate
        ctx.scale(xScale, -yScale); //Invert the column which following y-axis, because y-axis is a top line of screen
        ctx.beginPath();
        ctx.fillStyle = color;
        for (i = 0; i < data.length; i++) {
            ctx.fillRect(i, 0, 0.5, data[i]);
        } 
    }

    //draw description
    privateDescription = function () {
        var color_index = 0;
        var descriptHTML = "";
        descriptHTML = "<div><span style='border: 1px solid black;display: block;"
                       +"width: 60px;height:40px;margin-right:10px;background-color:" 
                       + color + "'>&nbsp;</span>LEVEL OF POSITION</div>";
        descript.innerHTML = descriptHTML;
    }

    /*----------------public function-------------*/
    publicDrawColumnChart = function () {
        if(flag) {
            privateDrawColumnChart();
            privateDescription();
        } else alert("input value is not true");
    }

    return {
        drawChart : publicDrawColumnChart
    }
})();

ColumnChart.drawChart();
