// 大表格運算
function sumMoneyBig() {
    var KM = document.getElementById('KMBig').value;
    var TIME = document.getElementById('TIMEBig').value;
    if (KM > 1.5) {
        total = ((KM - 1.5) / 0.2) * 5 + 85 + ((TIME / 2) * 5)
        total = Math.round(total);
        document.getElementById('taxiMoneyBig').innerText = `預估車資：${total}元`;
    } else {
        total =  85 + ((TIME / 2) * 5);
        total = Math.round(total);
        document.getElementById('taxiMoneyBig').innerText = `預估車資：${total}元`;
    }
}

// 小表格運算
function sumMoneySmall() {
    var KM = document.getElementById('KMSmall').value;
    var TIME = document.getElementById('TIMESmall').value;
    if (KM > 1.5) {
        total = ((KM - 1.5) / 0.2) * 5 + 85 + ((TIME / 2) * 5)
        total = Math.round(total);
        document.getElementById('taxiMoneySmall').innerText = `預估車資：${total}元`;
    } else {
        total =  85 + ((TIME / 2) * 5);
        total = Math.round(total);
        document.getElementById('taxiMoneySmall').innerText = `預估車資：${total}元`;
    }
}