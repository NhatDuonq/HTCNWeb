function kiemTraUsername()
{
let regex = /^[a-zA-Z0-9_\.]{6,30}$/;
let chuoi=document.getElementById("txtChuoiUsername").value;
let kq = regex.test(chuoi);
if (kq) {
    document.getElementById("tbUsername").innerHTML="Username hợp lệ";
} else {
    document.getElementById("tbUsername").innerHTML="Username không hợp lệ";
}
}

function kiemTraPassword() {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let chuoi = document.getElementById("txtChuoiPassword").value;
    let kq = regex.test(chuoi);
    if (kq) {
        document.getElementById("tbPassword").innerHTML = "Password hợp lệ";
    } else {
        document.getElementById("tbPassword").innerHTML = "Password không hợp lệ";
    }
}

function kiemTraEmail() {
    let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let chuoi = document.getElementById("txtChuoiEmail").value;
    let kq = regex.test(chuoi);
    if (kq) {
        document.getElementById("tbEmail").innerHTML = "Email hợp lệ";
    } else {
        document.getElementById("tbEmail").innerHTML = "Email không hợp lệ";
    }
}

function kiemTraIP() {
    let regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/ 
    let chuoi = document.getElementById("txtChuoiIP").value;
    let kq = regex.test(chuoi);
    if (kq) {
        document.getElementById("tbIP").innerHTML = "IPv4 hợp lệ";
    } else {
        document.getElementById("tbIP").innerHTML = "IPv4 không hợp lệ";
    }
}
