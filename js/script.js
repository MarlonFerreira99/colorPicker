// window.addEventListener('load', start);
// pode ser substituido por "defer" na tag script do HTML.

var inputRed = document.querySelector('#inputRed');
var inputGreen = document.querySelector('#inputGreen');
var inputBlue = document.querySelector('#inputBlue');

var redRange = document.querySelector('#redRange');
var greenRage = document.querySelector('#greenRange');
var blueRange = document.querySelector('#blueRange');

var boxColor = document.querySelector('#boxColor');


function start () {
  redRange.addEventListener('input', rangeValueChange);
  greenRage.addEventListener('input', rangeValueChange);
  blueRange.addEventListener('input', rangeValueChange);

}

function rangeValueChange () {
  inputRed.value = redRange.value;
  inputGreen.value = greenRage.value;
  inputBlue.value = blueRange.value;

  boxColor.style.backgroundColor = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;

}

start();
rangeValueChange();
