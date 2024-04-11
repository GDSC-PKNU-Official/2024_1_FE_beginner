// alret: What is Pane??
alert("Pane is bread in Italy")
// 'ON' button
function ON() {
  document.querySelector('.PageName').style.color = 'rgb(61, 203, 247)';
  document.querySelector('.PageName').style.borderColor='rgb(255, 139, 139)';
  document.querySelector('.PageName').style.backgroundColor='rgb(255, 218, 224)';
}
// 'OFF' button
function OFF() {
  document.querySelector('.PageName').style.color = 'rgb(128, 111, 77)';
  document.querySelector('.PageName').style.borderColor='rgb(190, 173, 136)';
  document.querySelector('.PageName').style.backgroundColor='rgb(216, 198, 159)';
}
// Date and Time
let day = new Date();
document.getElementById('today').innerHTML="today's date : " + day; 
// 바다토끼 디테일
function showDetail() {
  document.querySelector('#desc').style.display="block";
  document.querySelector('#open').style.display="none";
}
function hideDetail() {
  document.querySelector('#desc').style.display="none";
  document.querySelector('#open').style.display="block";
}