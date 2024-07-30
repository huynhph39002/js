//Bài 1: Dùng thuật toán if else tính tiền điện :
// var sodien=prompt("nhập số điện:","");
// if(sodien<0){
//     alert("vui lòng nhập lại");
// }
// else if(sodien <=50 ){
//     alert("tiền điện là :"+(sodien*1500));
// }else if (sodien<=100&&sodien>50){
//     alert("tiền điện là:"+(50*1500+((sodien-50)*2000)));
// }else if(sodien>100){
//     alert("tiền điện là:"+((50*1500)+(50*2000)+(sodien-100)*2500));
// }



//Bài 2: Dùng thuật toán if else tính tiền nước :
// var sokhoi=prompt("nhập số khối:","");
// if(sokhoi<0){
//     alert("vui lòng nhập lại:");
// }
// else if (sokhoi<=10){
//     alert("tiền nước là:"+(sokhoi*13000));
// }
// else if(sokhoi>10&&sokhoi<=15){
//     alert("tiền nước là :"+(10*13000+(sokhoi-10)*15000));
// }else if(sokhoi>15){
//     alert("Tiền nước là :"+(10*13000+5*15000+(sokhoi-15)*18000));
// }




//Bài 3: Giải bài toán fibonacce. Nhập từ bàn phím vị trí n của dãy số, in ra màn hình dãy số fibonacce từ 1 đến n.
// function fibonacci(n) {
//     if (n === 1) {
//       return [0, 1];
//     } else {
//       var arr = fibonacci(n - 1);
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//       return arr;
//     }
//   }
//   var n = prompt("Nhập vị trí n của dãy số Fibonacci:");
//   var result = fibonacci(n);
//   document.write("Dãy số Fibonacci từ 1 đến " + n + " là: " + result);





//Bài 4:khai báo 1 mảng số nguyên :
// let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// //In ra toàn bộ giá trị trong mảng
// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }
// //Tính tổng giá trị các phần tử trong mảng
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// console.log("Tổng giá trị của các phần tử trong mảng là: " + sum);




// //for of:
// let list=["xin","chào","các","em"];
// for(let test of list){
//     console.log(test);
// }



// let a=5;
// let b=6;
// let c=7;
// let d=8;
// function tong(a,b){  //khai báo hàm, nếu đưa giá trị vào trong ngoặc thì sẽ hiểu là đưa các giá trị tham số và ngược lại
//     let c=a+b;
//     alert(c);
// }tong(c,d);  //gọi hàm 
// //c=7, d=8 khi này nó truyền ngược lên fonction thay thế cho a , b lập tức a=7 , b=8 



// let a=prompt("nhập a:");
// let b=prompt("nhập b:");
// // Hàm có trả về:
// function tong(){
//     return Number(a) +Number(b);
// }
// let test =tong();
// alert("tonng:"+test);



// //tính chu vi diện tích sử dụng hàm:
// let a=prompt("nhập chiều dài:");
// let b=prompt("nhập chiều rộng:");
// function chuvi(){
//     return (Number(a)+Number(b))*2;
// }
// function dientich(){
//     return Number(a)*Number(b);
// }
// let cv=chuvi();
// alert("chu vi là:"+cv);
// let dt=dientich();
// alert("diện tích là :"+dt);




//Tính diện tích và chu vi hình tròn sử dụng hàm có trả về:
// let r=prompt("nhập bán kính hình tròn:");
// function chuvi(){
//     return Number(r)*2*3.14;
// }
// function dientich(){
//     return Number(r)*Number(r)*3.14;
// }
// let cv=chuvi();
// let dt=dientich();
// alert("chu vi là:"+cv);
// alert("diện tích là:"+dt);



// var ok= confirm("bạn chắc chắn muốn xoá chứ?");
// if(ok==true){
//     alert("bạn đã xoá thành công");
// }else {
//     alert("bạn chắc chắn muốn huỷ");
// }



// function hello(){
//     alert("chào các bạn sinh viên it18319");
//     alert("mình là huỳnh");
   
// }