// var hoten="nguyễn đức huỳnh";
// alert(hoten);
// var ngaysinh="19-02-2004";
// alert(ngaysinh);
// var quequan="yên dũng -bắc giang";
// alert(quequan);
// var gioitinh="nam";
// alert(gioitinh);




// var x=prompt("nhập số kiểm tra","");
// if(x%2!=0){
//     alert("X là số lẻ");
// }else{
//     alert("x là số chẵn")
// }




// var a=prompt("nhập a:","");  
// var b=prompt("nhập b:","");
// if(a==0){
//     if(b==0){
//         alert(" phương trình vô số nghiệm");
//     }else{
//         alert("phương trình vô nghiệm");
//     }
// }
// else{
//     alert( "phương trình có nghiệm là:" +(-b/a));
// }





// var d=prompt("nhập điểm:","");
// if(d<=10&&d>=1){
//     if(d>=8){
//         alert("sinh viên giỏi");
//     }
//     else if(d>=6.5){
//         alert("sinh viên khá");
//     }
//     else if(d>=5){
//         alert("sinh viên trung bình");
//     }
//     else{
//         alert("sinh viên yếu");
//     }
// }else{
//     alert("yêu cầu nhập lại");
// }




// var : cho phép truy cập toàn cục
// let : truy cập cục bộ
// let : bị giới hạn bởi{}



// let x=5;
// if(3>1){
//     let x=6;
// }
// alert(x);





// var a=prompt("nhập giá trị a:","");
// var b=prompt("nhập giá trị b:","");
// var tong = Number(a)+Number(b);
// alert("tổng a và b là: "+tong);





let ten=prompt("nhập tên:","");
let gioitinh=prompt("gioitinh:","");
let ngaysinh=prompt("năm sinh","");
let nam=new Date().getFullYear();
let tuoi=nam-ngaysinh;
let ongba=gioitinh==0?"ông":"bà";
if (gioitinh==0 & tuoi>=18 && tuoi<=27){
    alert('$ong');
}

if(gioitinh==0 && tuoi>=18 && tuoi<=27 ){
    alert("đủ điều kiện đi nghĩa vụ quân sự");
}else if(gioitinh==0 && 18>=tuoi>=27){
    alert("không đủ điều kiện đi nghĩa vụ");
}else if(gioitinh==1 && tuoi>=18 && tuoi<=27){
    alert()
}else if(gioitinh==1 && tuoi<=18 && tuoi>=27){
    alert()
}

















