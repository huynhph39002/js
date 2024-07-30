// function text() {
//    // console.log(document.getElementById('test').value);
//     document.getElementById('test'.value);
//     let x = document.getElementById('test').value;
//     if (x == 0) {
//         document.getElementById('name').value = null;
//     } else if (x == 1) {
//         document.getElementById('name').value = "5000$";
//     }  else if (x == 2) {
//         document.getElementById('name').value = "6000$";
//     }  else if (x == 3) {
//         document.getElementById('name').value = "7000$";
//     }  else if (x == 4) {
//         document.getElementById('name').value = "8000$";
//     }
// }





function myButton() {
    let thongBao = document.getElementsByClassName('thongbao');
    let Email = document.getElementById('email');
    let Phone = document.getElementById('phone');


    //BIẾN KIỂM TRA:
    let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    // console.log("kiểm tra email:", regexEmai.test(Email.vlaue));

    if (Email.value == "" || Email.value == null) {
        thongBao[0].innerHTML = "vui lòng nhập email";
    } else if (!regexEmail.test(Email.value)) {
        thongBao[0].innerHTML = "nhập sai";
    }
    ///nếu nhập lại đúng thì không hiện thông báo
    if (regexEmail.test(Email.value)) {
        thongBao[0].innerHTML = null;
    }

    let regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (Phone.value == "" || Phone.value == null) {
        thongBao[1].innerHTML = "vui lòng nhập sđt";
    } else if (!regexPhone.test(Phone.value)) {
        thongBao[1].innerHTML = "nhập sai";
    }
    if (regexPhone.test(Phone.value)) {
        thongBao[1].innerHTML = null;
    }

}
