// let a = document.getElementsByTagName('p');
// // a[0].style.color='red';

// function maudo(){
//     // a[0].style.color='red';

//    //// đổi màu vị trí chẵn tính từ 0:
//     for(let i=0;i<a.length;i++){
//         if(i%2==0){
//             a[i].style.color='red';
//         }
//     }
// }



//// TĂNG KÍCH THƯỚC:
// let size=20;
// function tangsize(){
//     // a[1].style.fontSize =`${size++}px`;//// TĂNG TỪNG PHẦN TỬ
//     for(let i=0;i<a.length;i++){//// TĂNG TẤT CẢ
//         a[i].style.fontSize=`${size++}px`;
//     }
// }


//// LẤY GIÁ TRỊ TẠI VỊ TRÍ MONG MUỐN
// console.log(a[0].outerText);

// ////IN RA MÀN HÌNH
// a[0].innerHTML="hu hu"; 



// let i = 0;
// let a = document.getElementsByTagName('p');

// function thaydoimau() {
//     //QUAY LẠI TỪ ĐẦU
//     if (i >= a.length) {
//         i = 0;
//     }

//     //RESET MÀU VỀ ĐEN
//     for (let index = 0; index < a.length; index++) {
//         a[index].style.color = 'black';
//     }

//     //THỰC HIỆN ĐỔI MÀU:
//     a[i].style.color = 'red';
//     i++;
// }



// let a = document.getElementsByClassName('cuoi1')
// function thaydoimau(){
//     for(let i=0;i<length;i++){
//     a[i].style.color='red';
// }
// }



// let b=document.getElementsByClassName('cuoi1');
// let kichthuoc=20;
// function tangsize(){
//     for(let i=0;i<b.length;i++){
//         b[i].style.fontSize='$(kichthuoc++)px';
//     }
// }



// let a=document.getElementById('xinchao');
// function doimau(){xinchao.style.color='red';}





// let ten = document.getElementById('name');
// let tuoi = document.getElementById('age');
// let tinhthanh = document.getElementById('tinh');
// function submit() {
//     // console.log(ten.value);
//     // console.log(tuoi.value);
//     // console.log(tinhthanh.value);

//     if (tinhthanh.value == 1) {
//         var que = "Hà Nội";
//     } else if (tinhthanh.value == 2) {
//         var que = "Đà Nẵng";
//     } else if (tinhthanh.value == 3) {
//         var que = "HCM";
//     }

//     let result = `
//     <tr>
//         <td> họ và tên</td>
//         <td>tuổi</td>
//         <td>quê</td>
//     </tr>
//     <tr>
//         <td> ${ten.value}</td>
//         <td> ${tuoi.value}</td>
//         <td >${que}</td>
//     </tr>
//     `
//     document.getElementById('ketqua').innerHTML = result;
// }

let chieudai=document.getElementById('dai');
let chieurong=document.getElementById('rong');
let tinh=document.getElementById('chon');
function chuvi(){
   return (chieudai+chieurong)*2;
    } 
function dientich(){
    return chieudai*chieurong;
}
    let result = `
        <tr>
            <th>chiều dài</th>
            <th></th>
            <th></th>
            <th> </th>
        </tr>
        <tr>
        <th>chiều rộng</th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
    <tr>
    <th>chu vi</th>
    <th> </th>
    <th> </th>
    <th> </th>
</tr>
<tr>
<th>diện tích</th>
<th> </th>
<th> </th>
<th> </th>
</tr>
        <tr>
            <th> ${chieudai.value}</th>
            <th> ${chieurong.value}</th>
            <th >${chuvi.value}</th>
            <th >${dientich.value}</th>
        </tr>
        `
        document.getElementById('ketqua').innerHTML = result;


