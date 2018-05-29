/**
 * Created by wangxiao on 17-7-6.
 */

var Brush = document.getElementById('means_brush');
var Eraser = document.getElementById('means_eraser');
var Paint = document.getElementById('means_paint');
var Text = document.getElementById('means_text');
var Straw = document.getElementById('means_straw');
var Magnifier = document.getElementById('means_magnifier');

var Line = document.getElementById('shape_line');
var Arc = document.getElementById('shape_arc');
var Rect = document.getElementById('shape_rect');
var Poly = document.getElementById('shape_poly');
var ArcFill = document.getElementById('shape_arcfill');
var RectFill = document.getElementById('shape_rectfill');

//12个操作标签放在一个数组中，不能重复获得
var action = [Brush, Eraser, Paint, Text, Straw, Magnifier,
  Line, Arc, Rect, Poly, ArcFill, RectFill];

//获取线宽按钮
var Line_1 = document.getElementById('size_1');
var Line_3 = document.getElementById('size_3');
var Line_5 = document.getElementById('size_5');
var Line_8 = document.getElementById('size_8');
//把4中线宽对象放到一个数组中
var widths = [Line_1, Line_3, Line_5, Line_8];

//获取颜色按钮
var ColorRed = document.getElementById('red');
var ColorGreen = document.getElementById('green');
var ColorBlue = document.getElementById('blue');
var ColorYellow = document.getElementById('yellow');
var ColorWhite = document.getElementById('white');
var ColorBlack = document.getElementById('black');
var ColorPink = document.getElementById('pink');
var ColorPurPle = document.getElementById('purple');
var ColorCyan = document.getElementById('cyan');
var ColorOrange = document.getElementById('orange');

var colors = [ColorRed, ColorGreen, ColorBlue, ColorYellow, ColorWhite, ColorBlack, ColorPink, ColorPurPle, ColorCyan, ColorOrange];


var canvas = document.getElementById('drawBoard');
var flag = false;
var cxt = canvas.getContext('2d');


var drawBrush = function (num) {
  setStatus(action, num,0);
};

var drawEraser = function (num) {
  setStatus(action, num,0);
  var startX;
  var startY;
  canvas.onmousedown = function (e) {
    flag = true;
    e = window.event || e;
    startX = e.pageX - this.offsetLeft;
    startY = e.pageY - this.offsetTop;
    cxt.clearRect(startX -cxt.lineWidth, startY -cxt.lineWidth, cxt.lineWidth*2, cxt.lineWidth*2)

  };
  canvas.onmousemove = function (e) {
    e = window.event || e;
    var endX = e.pageX - this.offsetLeft;
    var endY = e.pageY - this.offsetTop;
    if(flag){
      cxt.clearRect(endX -cxt.lineWidth, endY -cxt.lineWidth, cxt.lineWidth*2, cxt.lineWidth*2)
    }
  };

  canvas.onmouseup = function () {
    cxt.closePath();
    flag = false;
  };
  canvas.onmouseout = function () {
    flag = false;
  };


}

var drawPaint = function (num) {
  setStatus(action, num,0);

  canvas.onmousedown = function () {
    cxt.fillRect(0,0,880,400);

  }
  canvas.onmouseup = null;
  canvas.onmouseout = null;
  canvas.onmousemove = null
}
var drawline = function (num) {
  setStatus(action, num, 0);
  cxt.beginPath();

  canvas.onmousedown = function (e) {
    flag = true;
    e = window.event || e;
    var startX = e.pageX - this.offsetLeft;
    var startY = e.pageY - this.offsetTop;
    cxt.beginPath();
    cxt.moveTo(startX, startY);

  };
  canvas.onmousemove =null

  canvas.onmouseup = function () {
    e = window.event || e;
    var endX = e.pageX - this.offsetLeft;
    var endY = e.pageY - this.offsetTop;
    if(flag){
      cxt.lineTo(endX, endY);
      cxt.stroke();
    }
    cxt.closePath();
    flag = false;
  };
  canvas.onmouseout = function () {
    flag = false;
  };


};

var drawarc = function (num) {
  setStatus(action, num,0);
  var arcX;
  var arcY;
  canvas.onmousedown = function (evt) {
    //圆心位置
    evt = window.event ||evt;

    arcX = evt.pageX - this.offsetLeft;
    arcY = evt.pageY - this.offsetTop;

  }
  canvas.onmouseup = function (evt) {
    // 获取半径
    var endX = evt.pageX - this.offsetLeft;
    var endY = evt.pageY - this.offsetTop;
    var x = endX-arcX;
    var y = endY-arcY
    var z = Math.sqrt(x*x +y*y);
    cxt.beginPath();
    cxt.arc(arcX, arcY, z, 0, 360, false);
    cxt.stroke();
    cxt.closePath();

  }
  canvas.onmousemove = null;
  canvas.onmouseout = function () {
    flag = false;

  }


}

var drawrect =  function (num) {
  setStatus(action, num,0);

  setStatus(action, num,0);
  var arcX;
  var arcY;
  canvas.onmousedown = function (evt) {
    //圆心位置
    evt = window.event ||evt;

    arcX = evt.pageX - this.offsetLeft;
    arcY = evt.pageY - this.offsetTop;

  }
  canvas.onmouseup = function (evt) {
    // 获取半径
    var endX = evt.pageX - this.offsetLeft;
    var endY = evt.pageY - this.offsetTop;
    var width = Math.abs(endX-arcX);
    var height = Math.abs(endY-arcY);
    cxt.beginPath();
    cxt.rect(arcX, arcY, width, height);
    cxt.stroke();
    cxt.closePath();

  }
  canvas.onmousemove = null;
  canvas.onmouseout = function () {
    flag = false;

  }

}
var drawarcfill =  function (num) {
  setStatus(action, num,0);
  var arcX;
  var arcY;
  canvas.onmousedown = function (evt) {
    //圆心位置
    evt = window.event ||evt;

    arcX = evt.pageX - this.offsetLeft;
    arcY = evt.pageY - this.offsetTop;

  }
  canvas.onmouseup = function (evt) {
    // 获取半径
    var endX = evt.pageX - this.offsetLeft;
    var endY = evt.pageY - this.offsetTop;
    var x = endX-arcX;
    var y = endY-arcY;
    var z = Math.sqrt(x*x +y*y);
    cxt.beginPath();
    cxt.arc(arcX, arcY, z, 0, 360, false);
    cxt.fill();
    cxt.closePath();

  }
  canvas.onmousemove = null;
  canvas.onmouseout = function () {
    flag = false;

  }

}

var drawrectfill =  function (num) {
  setStatus(action, num,0);

  setStatus(action, num,0);
  var arcX;
  var arcY;
  canvas.onmousedown = function (evt) {
    //圆心位置
    evt = window.event ||evt;

    arcX = evt.pageX - this.offsetLeft;
    arcY = evt.pageY - this.offsetTop;

  }
  canvas.onmouseup = function (evt) {
    // 获取半径
    var endX = evt.pageX - this.offsetLeft;
    var endY = evt.pageY - this.offsetTop;
    var width = Math.abs(endX-arcX);
    var height = Math.abs(endY-arcY);
    cxt.beginPath();
    cxt.fillRect(arcX, arcY, width, height);
    cxt.stroke();
    cxt.closePath();

  }
  canvas.onmousemove = null;
  canvas.onmouseout = function () {
    flag = false;

  }


}

var drawpoly =  function (num) {
  setStatus(action, num,0);

  setStatus(action, num,0);
  var arcX;
  var arcY;
  canvas.onmousedown = function (evt) {
    //圆心位置
    evt = window.event ||evt;

    arcX = evt.pageX - this.offsetLeft;
    arcY = evt.pageY - this.offsetTop;

  }
  canvas.onmouseup = function (evt) {
    // 获取半径
    var endX = evt.pageX - this.offsetLeft;
    var endY = evt.pageY - this.offsetTop;

    var a = Math.abs(endX-arcX);
    var b = Math.abs(endY-arcY);
    var c = Math.sqrt(a*a +b*b);


    cxt.beginPath();
    cxt.moveTo(arcX, arcY - c);
    cxt.lineTo(endX, endY);
    cxt.lineTo(2*arcX - endX, endY);
    cxt.lineTo(arcX, arcY - c);
    cxt.stroke();
    cxt.closePath();

  }
  canvas.onmousemove = null;
  canvas.onmouseout = function () {
    flag = false;

  }

}

var drawtext = function (num) {
  setStatus(action, num,0);
  canvas.onmousedown = function (evt) {
    evt = window.event ||evt;

    var x = evt.pageX - this.offsetLeft;
    var y = evt.pageY - this.offsetTop;

    var text = window.prompt('请在这里输入文字','');

    if (text) {
      cxt.fillText(text, x, y);
    }
  }
  canvas.onmouseup = null;
  canvas.onmouseout = null;
  canvas.onmousemove = null


}

var drawStraw = function (num) {
  setStatus(action, num,0);
  canvas.onmousedown = function (evt) {
    evt = window.event ||evt;

    var x = evt.pageX - this.offsetLeft;
    var y = evt.pageY - this.offsetTop;
    var sf = cxt.getImageData(x,y,1,1).data;
    var color = 'rgb('+sf[0]+','+ sf[1]+','+sf[2]+')';
    cxt.strokeStyle = color;
    cxt.fillStyle = color;
    drawBrush(0)
  }
  canvas.onmouseup = null;
  canvas.onmouseout = null;
  canvas.onmousemove = null



}
var drawMagnifier = function (num) {
  setStatus(action, num,0);
  var uerValue = window.prompt('请输入要放大的倍数','100');

  uerValue = uerValue+'%';
  canvas.style.width = parseInt(880* uerValue/100) +'ps';
  canvas.style.height = parseInt(400* uerValue/100) +'ps';

}

//线宽设置函数
function setLineWidth(num){
  setStatus(widths,num,0);
  switch(num){
    case 0:
      cxt.lineWidth=1;
      break;
    case 1:
      cxt.lineWidth=3;
      break;
    case 2:
      cxt.lineWidth=5;
    case 3:
      cxt.lineWidth=8;
      break;
    default:
      cxt.lineWidth=1;

  }
}

//颜色设置函数
function setColor(obj,num){
  setStatus(colors,num,1);
  //设置画笔颜色和填充颜色
  cxt.strokeStyle=obj.id;
  cxt.fillStyle=obj.id;
}

function clearBorad() {
  cxt.clearRect(0,0,880,400);
}
function saveBorad() {
  debugger
  var imageData = canvas.toDataURL();
  var b64 = imageData.substring(22);

}


function setStatus(arr,num, type) {
  for (var i = 0; i < arr.length; i++) {
    if (i == num) {
      if (type == 0) {
        arr[i].style.background = 'yellow'
      } else {
        arr[i].style.border = '1px solid #fff';
      }
    } else {
      if (type == 0) {
        arr[i].style.background = '#ccc'
      } else {
        arr[i].style.border = '1px solid #000';
      }
    }
  }
}

//设置默认
drawBrush(0);
setLineWidth(0);
setColor(0);


canvas.onmousedown = function (e) {
  flag = true;
  e = window.event || e;
  var startX = e.pageX - this.offsetLeft;
  var startY = e.pageY - this.offsetTop;
  cxt.beginPath();
  cxt.moveTo(startX, startY);

};
canvas.onmousemove = function (e) {
  e = window.event || e;
  var endX = e.pageX - this.offsetLeft;
  var endY = e.pageY - this.offsetTop;
  if(flag){
    cxt.lineTo(endX, endY);
    cxt.stroke();
  }
};

canvas.onmouseup = function () {
  cxt.closePath();
  flag = false;
};
canvas.onmouseout = function () {
  flag = false;
};



