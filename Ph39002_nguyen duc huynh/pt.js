// //Bài 1: giải phương trình bậc 2:
// var a = prompt("nhập a:");
// var b = prompt("nhập b:");
// var c = prompt("nhập c:");
// var x;
// if(a == 0) {
//     // a== 0 phuong trinh tro thanh phuong trinh bac mot bx + c = 0
//     if(b == 0) {
//         if (c == 0) {
//            alert("Phuong trinh vo so nghiem") ;
//         } else {
//            alert("Phuong trinh vo nghiem") ;
//         }
//     } else {
//        alert("phương trình có nghiệm duy nhất là : x= " +(-c/b )) ;
//     }
// }else {
// delta==b*b-(4*a*c);
// if(delta>0){
//     alert("phương trình có hai nghiêm phân biệt là: x1="+((-b-math.sqrt(delta))/(2*a)) +"và x2="+((-b-math.sqrt(delta))/(2*a)));
// }else if(delta==0){
//     alert("phương trình có một nghiệm kép là : x1=x2="+(-b)/(2*a));
// }else{
//     alert("phương trình vô nghiệm");
// }
// }


//Bài 2: Tính chỉ số BMI:
// var a=prompt("nhập trọng lượng cơ thể :","");
// var b=prompt("nhập chiều cao:","");
// bmi=a/(b*b);
// if(bmi<18.5){
//     alert("Dưới chuẩn");
// }else if( bmi>=18.5 && bmi<=24.9 ){
//     alert("Bình thường");
// }else if( bmi>=25 && bmi<=29.9 ){
//     alert("Thừa cân");
// }else if( bmi>=30 && bmi<=34.9 ){
//     alert("Béo phì cấp độ 1");
// }else if( bmi>=35 && bmi<=39.9 ){
//     alert("Béo phì cấp độ 2");
// }else if( bmi>=40 ){
//     alert("Béo phì cấp độ 3");
// }





//in ra dãy số từ 1 đến 10 bằng vòng lặp for
// nhập từ bàn phím 1 số n, in ra tổng của dãy số
// in ra màn hình các số chẵn, và tính tổng của dãy số chẵn đó
var n = prompt("nhập n","");
var tong=0;
for(let i=1;i<=n;i++){
    if(i%2==0){
    tong=tong+i;
    console.log(i);
    }    
}
alert(tong);


// nhập từ bàn phím số n, kiểm tra xem n có phải số nguyên tố không:
// var n =prompt("Nhập n","");
// var count=0;
// if(n<2){
//     alert(n + " không phải số nguyên tố");
// }else{
//     for(var i=2;i<n;i++){
//         if(n%i==0){
//             count ++;
//         }
//     }if(count==0){
//         alert(n + " là số nguyên tố");
//     }else{
//         alert(n + " không là số nguyên tố");
//     }

// }




//arr1 = new Array("hello", "world", "javascript", "array");
//arr2 = ["hello", "world", "javascript", "array", "world"];
//console.log(arr1);

// arr2[0]="Hi"
// console.log(arr2.length);
// console.log(arr2);
// arr2.push("IT18319");
// console.log(arr2);


// splice xóa y phần tử tính từ vị trí x (x,y)
// với x là vị trí, y là số lượng
// arr2.splice(0,1);
// console.log(arr2);

// arr2.pop();
//console.log(arr2);
// indexof đếm vị trí phần tử đầu tiên
//arr3=arr2.indexOf("world");
//console.log(arr3);
// lastindexof đếm vị trí của phần tử cuối cùng
//arr3=arr2.lastIndexOf("world");
//console.log(arr3);






