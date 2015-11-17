/*****************************
Utility functions
------------------------------
A handful of utility functions
for requiring in our app
******************************/

// Get and element's position
// http://www.kirupa.com/html5/get_element_position_using_javascript.htm
export default function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while(element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
  }
  return { x: xPosition, y: yPosition };
}