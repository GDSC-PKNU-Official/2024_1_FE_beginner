function zoomIn(event) {
  event.target.style.transform = "scale(1.4)";
  event.target.style.zIndex = 1;
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.zIndex = 0;
  event.target.style.transition = "all 0.5s";
}

function changeColor(color, element) {
  if (element) {
    element.querySelector("a").style.color = color;
  } else {
    event.target.style.color = color;
  }
}