var canvas;
var context;
var centerX;
var centerY;
var radius;
var interval;


function repaint() {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

function move(x) {
    context.clearRect(centerX - radius - 5, centerY - radius - 5, 2 * radius + 10, 2 * radius + 10);
    centerX += x;
}

function moveLeft() {
    move(-10)
}

function moveRight() {
    move(10);
}



var direction = 1;
function animation() {
    if (centerX > canvas.width * .8 || 
        centerX < canvas.width * .2)
            direction = direction * (-1);
    //move(10 * direction);
    repaint();
}

function stopAnimation() {
    clearInterval(interval);
}

function startAnimation() {
    interval = setInterval(animation, 1);
}

function accelerometerSuccess(acceleration) {
    //alert(acceleration.x);
    $("#AccX").val( acceleration.x);
    $("#AccY").val(acceleration.y);
    $("#AccZ").val(acceleration.z);
    move(3*acceleration.x);
}

function accelerometerError() {
    alert('Accelerometer Error!');
}

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var accelerometerOptions = { frequency: 500 };  // Update every 0.5 second
    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                       accelerometerError,
                                                       accelerometerOptions);
}

$(document).ready(function () {
    canvas = document.getElementById('myCanvas'); //var canvas = $('#myCanvas');
    context = canvas.getContext('2d');
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    radius = 30;
    $('#moveLeft').click(moveLeft);
    $('#moveRight').click(moveRight);
    $('#stop').click(stopAnimation);
    repaint();
    startAnimation();
});