var main = function() {
var start = new Date().getTime();
var Clicks = 0;
var arrayTime = [];



function circleWillAppear() {
 start = new Date().getTime();
var color = randomColor();
var a = Math.floor(Math.random()*400);
var b = Math.floor(Math.random()*400);
var d = Math.floor(Math.random()*800);

document.getElementById('yellow').style.marginTop = a + "px";
document.getElementById('yellow').style.display = "block";
document.getElementById('yellow').style.backgroundColor = color;
document.getElementById('yellow').style.borderRadius = b + "px";
document.getElementById('yellow').style.marginLeft = d + "px";

function randomColor() {
  var letters = "123456789ABCDEF";
var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[(Math.floor(Math.random()*16))];
}
return color;
}
}

function appearAgain() {
  if(Clicks <= 4) {
  setTimeout(circleWillAppear, Math.random()*2000)
} else {
  document.getElementById('over').innerHTML = "Game Over."
  document.getElementById('body').style.backgroundColor = "#ADD8E6";
  $('#final').text("Your best result is: " + arrayTime[0]);
  $('.btn').show();
 }
}
appearAgain();

function addClick() {
   Clicks += 1;
  }





 document.getElementById('yellow').onclick = function() {
addClick();
  document.getElementById('yellow').style.display = "none";
  var end = new Date().getTime();
  var time = (end - start)/1000;
var a = document.getElementById('result').innerHTML = time;
  document.getElementById('click').innerHTML = Clicks;
    arrayTime.push(a);
    arrayTime.sort(function(a,b) {return(a-b)});
    var length = arrayTime.length;
      document.getElementById('best').innerHTML = arrayTime[0];
      document.getElementById('worst').innerHTML = arrayTime[length - 1];

appearAgain();
 }
 }


$(document).ready(main);
