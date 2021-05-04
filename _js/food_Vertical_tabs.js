{/* 橫Bar */}
function openTabrow(evt, cityName) {
    var i, tabtitle, tablinkscol;
    tabtitle = document.getElementsByClassName("tabtitle");
    for (i = 0; i < tabtitle.length; i++) {
        tabtitle[i].style.display = "none";
    }
    tablinkscol = document.getElementsByClassName("tablinkscol");
    for (i = 0; i < tablinkscol.length; i++) {
        tablinkscol[i].className = tablinkscol[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 找吃
function openList01(evt, foodName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(foodName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 找喝
function openList02(evt, drinkName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(drinkName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpencol").click();