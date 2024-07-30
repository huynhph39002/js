function dk(){
    let thongBao=document.getElementsByClassName('thongbao');
    let hoTen=document.getElementById('hoten');
    let Email=document.getElementById('email');
    let sDt=document.getElementById('sdt');
    let User=document.getElementById('user');
    let Pass=document.getElementById('pass');
    let Repass=document.getElementById('repass');

    if(hoTen.value==""||hoTen.value==null){
        thongBao[0].innerHTML="vui lòng nhập họ tên";
    }
}