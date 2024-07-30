function timkiem(){
    let thongBao = document.getElementsByClassName('thongbao');
    let timkiem=document.getElementById('tim');

    if(timkiem.value==""||timkiem.value==null){
        thongBao[0].innerHTML="vui lòng nhập";
    }
}
