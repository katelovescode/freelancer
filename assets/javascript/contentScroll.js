var forward = document.getElementById('slide-forward');
var back = document.getElementById('slide-back');

forward.onclick = function() {
  var container = document.getElementById('contributions-list');
  sideScroll(container,'right',25,100,10);
};

back.onclick = function() {
  var container = document.getElementById('contributions-list');
  sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function() {
    if(direction == 'left') {
      console.log("scrolling left");
      element.scrollLeft -= step;
    } else {
      console.log("scrolling right");
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if(scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed)
};