function submit() {
    let thongBao = document.getElementsByClassName('thongbao');
    let Email = document.getElementById('email');
    let Phone = document.getElementById('phone');
    let Hoten=document.getElementById('hoten');
    let Chumt=document.getElementById('cmt');
    let Gioitinh=document.getElementById('full6','part6')
    

if(Hoten.value==""||Hoten.value==null){
    thongBao[0].innerHTML="vui lòng nhập họ tên";
}
let regexChumt=/^\d+$/;
if(Chumt.value==""||Chumt.value==null){
    thongBao[1].innerHTML="vui lòng nhập cmt";
} else if (!regexChumt.test(Chumt.value)) {
    thongBao[1].innerHTML = "nhập sai";
}
if (regexChumt.test(Chumt.value)) {
    thongBao[1].innerHTML = null;
}
    //BIẾN KIỂM TRA:
    let regexEmail= /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    // console.log("kiểm tra email:", regexEmai.test(Email.vlaue));
    if (Email.value == "" || Email.value == null) {
        thongBao[2].innerHTML = "vui lòng nhập email";
    } else if (!regexEmail.test(Email.value)) {
        thongBao[2].innerHTML = "nhập sai";
    }
    ///nếu nhập lại đúng thì không hiện thông báo
    if (regexEmail.test(Email.value)) {
        thongBao[2].innerHTML = null;
    }

if(Gioitinh.value==""||Gioitinh.value==null){
    thongBao[3].innerHTML="vui lòng chọn giới tính";
}


    let regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (Phone.value == "" || Phone.value == null) {
        thongBao[4].innerHTML = "vui lòng nhập sđt";
    } else if (!regexPhone.test(Phone.value)) {
        thongBao[4].innerHTML = "nhập sai";
    }
    if (regexPhone.test(Phone.value)) {
        thongBao[4].innerHTML = null;
    }




}
