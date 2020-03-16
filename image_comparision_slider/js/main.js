"use strict"; // to enable strict mode and modern JavaScript functionality

// Global Variables
let _clicked = 0;
let _img;
let _w;
let _h;
let _slider;

function initComparisons() {
  let x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    _img = x[i];
    compareImages();
  }
}

function compareImages() {
  /*get the width and height of the img element*/
  _w = _img.offsetWidth;
  _h = _img.offsetHeight;
  /*set the width of the img element to 50%:*/
  _img.style.width = (_w / 2) + "px";
  /*create slider:*/
  _slider = document.createElement("DIV");
  _slider.setAttribute("class", "img-comp-slider");
  /*insert slider*/
  _img.parentElement.insertBefore(_slider, _img);
  /*position the slider in the middle:*/
  _slider.style.top = (_h / 2) - (_slider.offsetHeight / 2) + "px";
  _slider.style.left = (_w / 2) - (_slider.offsetWidth / 2) + "px";
  /*execute a function when the mouse button is pressed:*/
  _slider.addEventListener("mousedown", slideReady);
  /*and another function when the mouse button is released:*/
  window.addEventListener("mouseup", slideFinish);
  /*or touched (for touch screens:*/
  _slider.addEventListener("touchstart", slideReady);
  /*and released (for touch screens:*/
  window.addEventListener("touchstop", slideFinish);
}

function slideReady(e) {
  /*prevent any other actions that may occur when moving over the image:*/
  e.preventDefault();
  /*the slider is now clicked and ready to move:*/
  _clicked = 1;
  /*execute a function when the slider is moved:*/
  window.addEventListener("mousemove", slideMove);
  window.addEventListener("touchmove", slideMove);
}

function slideFinish() {
  /*the slider is no longer clicked:*/
  _clicked = 0;
}

function slideMove(e) {
  let pos;
  /*if the slider is no longer clicked, exit this function:*/
  if (_clicked == 0) return false;
  /*get the cursor's x position:*/
  pos = getCursorPos(e)
  /*prevent the slider from being positioned outside the image:*/
  if (pos < 0) pos = 0;
  if (pos > _w) pos = _w;
  /*execute a function that will resize the overlay image according to the cursor:*/
  slide(pos);
}

function getCursorPos(e) {
  let a, x = 0;
  e = e || window.event;
  /*get the x positions of the image:*/
  a = _img.getBoundingClientRect();
  /*calculate the cursor's x coordinate, relative to the image:*/
  x = e.pageX - a.left;
  /*consider any page scrolling:*/
  x = x - window.pageXOffset;
  return x;
}

function slide(x) {
  /*resize the image:*/
  _img.style.width = x + "px";
  /*position the slider:*/
  _slider.style.left = _img.offsetWidth - (_slider.offsetWidth / 2) + "px";
}

// initialize comparation of images 
initComparisons();