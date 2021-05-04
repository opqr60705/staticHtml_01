
// 設 modal 的 class
var modalEat1 = document.getElementById("myModalEat1");
var modalEat2 = document.getElementById("myModalEat2");
var modalEat3 = document.getElementById("myModalEat3");
var modalDrink1 = document.getElementById("myModalDrink1");
var modalDrink2 = document.getElementById("myModalDrink2");
var modalDrink3 = document.getElementById("myModalDrink3");
var modalDessert1 = document.getElementById("myModalDessert1");
var modalDessert2 = document.getElementById("myModalDessert2");
var modalDessert3 = document.getElementById("myModalDessert3");

// 設 button 的 class
var btnEat1 = document.getElementById("myBtnEat1");
var btnEat2 = document.getElementById("myBtnEat2");
var btnEat3 = document.getElementById("myBtnEat3");
var btnDrink1 = document.getElementById("myBtnDrink1");
var btnDrink2 = document.getElementById("myBtnDrink2");
var btnDrink3 = document.getElementById("myBtnDrink3");
var btnDessert1 = document.getElementById("myBtnDessert1");
var btnDessert2 = document.getElementById("myBtnDessert2");
var btnDessert3 = document.getElementById("myBtnDessert3");

// 取消按鈕
var spanEat1 = document.getElementById("closeEat1");
var spanEat2 = document.getElementById("closeEat2");
var spanEat3 = document.getElementById("closeEat3");
var spanDrink1 = document.getElementById("closeDrink1");
var spanDrink2 = document.getElementById("closeDrink2");
var spanDrink3 = document.getElementById("closeDrink3");
var spanDessert1 = document.getElementById("closeDessert1");
var spanDessert2 = document.getElementById("closeDessert2");
var spanDessert3 = document.getElementById("closeDessert3");

// 按下按鈕，打開 modal 
btnEat1.onclick = function () {
    modalEat1.style.display = "block";
}
btnEat2.onclick = function () {
    modalEat2.style.display = "block";
}
btnEat3.onclick = function () {
    modalEat3.style.display = "block";
}
btnDrink1.onclick = function () {
    modalDrink1.style.display = "block";
}
btnDrink2.onclick = function () {
    modalDrink2.style.display = "block";
}
btnDrink3.onclick = function () {
    modalDrink3.style.display = "block";
}
btnDessert1.onclick = function () {
    modalDessert1.style.display = "block";
}
btnDessert2.onclick = function () {
    modalDessert2.style.display = "block";
}
btnDessert3.onclick = function () {
    modalDessert3.style.display = "block";
}

// 按下 (x)， 關掉 modal
spanEat1.onclick = function () {
    modalEat1.style.display = "none";
}
spanEat2.onclick = function () {
    modalEat2.style.display = "none";
}
spanEat3.onclick = function () {
    modalEat3.style.display = "none";
}
spanDrink1.onclick = function () {
    modalDrink1.style.display = "none";
}
spanDrink2.onclick = function () {
    modalDrink2.style.display = "none";
}
spanDrink3.onclick = function () {
    modalDrink3.style.display = "none";
}
spanDessert1.onclick = function () {
    modalDessert1.style.display = "none";
}
spanDessert2.onclick = function () {
    modalDessert2.style.display = "none";
}
spanDessert3.onclick = function () {
    modalDessert3.style.display = "none";
}

// 案在 modal 外的地方關閉
window.onclick = function (event) {
    if (event.target == modalEat1) {
        modalEat1.style.display = "none";
    } else if (event.target == modalEat2) {
        modalEat2.style.display = "none";
    } else if (event.target == modalEat3) {
        modalEat3.style.display = "none";
    } else if (event.target == modalDrink1) {
        modalDrink1.style.display = "none";
    } else if (event.target == modalDrink2) {
        modalDrink2.style.display = "none";
    } else if (event.target == modalDrink3) {
        modalDrink3.style.display = "none";
    } else if (event.target == modalDessert1) {
        modalDessert1.style.display = "none";
    } else if (event.target == modalDessert2) {
        modalDessert2.style.display = "none";
    } else if (event.target == modalDessert3) {
        modalDessert3.style.display = "none";
    }
}