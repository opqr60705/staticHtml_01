// 設 modal 的 class
var modal1 = document.getElementById("myModal_1");
var modal2 = document.getElementById("myModal_2");
var modal3 = document.getElementById("myModal_3");
var modal4 = document.getElementById("myModal_4");
var modal5 = document.getElementById("myModal_5");
var modal6 = document.getElementById("myModal_6");
var modal7 = document.getElementById("myModal_7");
var modal8 = document.getElementById("myModal_8");
var modal9 = document.getElementById("myModal_9");
var modal10 = document.getElementById("myModal_10");


// 設 button 的 class
var btn1 = document.getElementById("myBtn_1");
var btn2 = document.getElementById("myBtn_2");
var btn3 = document.getElementById("myBtn_3");
var btn4 = document.getElementById("myBtn_4");
var btn5 = document.getElementById("myBtn_5");
var btn6 = document.getElementById("myBtn_6");
var btn7 = document.getElementById("myBtn_7");
var btn8 = document.getElementById("myBtn_8");
var btn9 = document.getElementById("myBtn_9");
var btn10 = document.getElementById("myBtn_10");

// 取消按鈕
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");
var span7 = document.getElementById("close7");
var span8 = document.getElementById("close8");
var span9 = document.getElementById("close9");
var span10 = document.getElementById("close10");

// 按下按鈕，打開 modal 
btn1.onclick = function () {
    modal1.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
btn3.onclick = function () {
    modal3.style.display = "block";
}
btn4.onclick = function () {
    modal4.style.display = "block";
}
btn5.onclick = function () {
    modal5.style.display = "block";
}
btn6.onclick = function () {
    modal6.style.display = "block";
}
btn7.onclick = function () {
    modal7.style.display = "block";
}
btn8.onclick = function () {
    modal8.style.display = "block";
}
btn9.onclick = function () {
    modal9.style.display = "block";
}
btn10.onclick = function () {
    modal10.style.display = "block";
}

// 按下 (x)， 關掉 modal
span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
span4.onclick = function () {
    modal4.style.display = "none";
}
span5.onclick = function () {
    modal5.style.display = "none";
}
span6.onclick = function () {
    modal6.style.display = "none";
}
span7.onclick = function () {
    modal7.style.display = "none";
}
span8.onclick = function () {
    modal8.style.display = "none";
}
span9.onclick = function () {
    modal9.style.display = "none";
}
span10.onclick = function () {
    modal10.style.display = "none";
}

// 案在 modal 外的地方關閉
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2){
        modal2.style.display = "none";
    } else if (event.target == modal3){
        modal3.style.display = "none";
    } else if (event.target == modal4){
        modal4.style.display = "none";
    } else if (event.target == modal5){
        modal5.style.display = "none";
    } else if (event.target == modal6){
        modal6.style.display = "none";
    } else if (event.target == modal7){
        modal7.style.display = "none";
    } else if (event.target == modal8){
        modal8.style.display = "none";
    } else if (event.target == modal9){
        modal9.style.display = "none";
    } else if (event.target == modal10){
        modal10.style.display = "none";
    }
}