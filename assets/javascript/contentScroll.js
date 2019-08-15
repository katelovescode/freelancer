function contentScroll(scrollableId, childClass) {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var forward = document.querySelector('.slide-forward');
  var back = document.querySelector('.slide-back');
  var element = document.querySelector(`#${scrollableId}`);
  var contributionTypeCount = document.querySelectorAll(`.${childClass}`).length - 1
  var position = 0;

  window.onresize = function() {
    width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  back.onclick = function() {
    (position >= width) ? position -= width : position = 0;
    element.scrollTo({
      top: 0,
      left: position,
      behavior: 'smooth'
    });
  }

  forward.onclick = function() {
    (position < (width * contributionTypeCount)) ? position += width : position = (width * contributionTypeCount);
    element.scrollTo({
      top: 0,
      left: position,
      behavior: 'smooth'
    });
  }
}

contentScroll("contributions-list", "contribution-type");