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

function buttonChangeColor(color, element) {
  if (element) {
    element.style.backgroundColor = color; // 버튼의 배경색을 변경합니다.
  }
}

// 페이지 진입 시 기본 값
window.addEventListener('DOMContentLoaded', function() {
  showContent('1');
});

function showContent(content) {
  var content1 = document.getElementById("content1");
  var content2 = document.getElementById("content2");
  var content3 = document.getElementById("content3");
  var content4 = document.getElementById("content4");

  if (content === "name") {
    content1.style.display = "block";
  } else if (content === "age") {
    content2.style.display = "block";
  } else if (content === "major") {
    content3.style.display = "block";
  } else if (content === "mbti") {
    content4.style.display = "block";
  }
}