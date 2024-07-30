//Khai báo thông tin cá nhân bằng thuộc tính trong đối tượng
// let canhan={
//     hoten:"nguyễn đức huỳnh",
//     tuoi:19,
// };
// console.log(canhan);

//Cách viết khác:
// let a=canhan.hoten;
// console.log(a);

//cập nhật giá trị của thuộc tính trong đối tượng:
// canhan.tuoi= 90;
// console.log(canhan);


/////////////////////////////////////////////////////////////////////////////////////////////////////////


//khai báo đối tượng điểm
//thuộc tính gồm : toán , lí , hoá ,sinh;
//cập nhật giá trị của thuộc tính toán =8
// let diem={
//     toan:9,
//     ly:9,
//     hoa:9,
//     sinh:9,
// };
// console.log(diem);
// diem.toan=8;
// console.log(diem);



///////////////////////////////////////////////////////////////////////////////////////////////////////////



// let canhan = {
//     hoten: "nguyễn đức huỳnh", //thuộc tính
//     tuoi: 19,   //thuộc tính
//     di: function () {  //Phương thức (hàm)
//         console.log("chạy bộ");
//     },
//     hienthi:function(){  //phương thức (hàm)
//         return this.hoten+"-"+this.tuoi;
//     }
// };
// console.log(canhan.hienthi());



//////////////////////////////////////////////////////////////////////////////////////////////////////////////




//Khai báo đối tượng cá nhân
//họ tên , tuổi , mã sinh viên , lớp , địa chỉ , môn học
//phương thức kết quả học tập , đi học đúng giờ không

// let canhan = {
//     hoten: "nguyễn đức huỳnh",
//     tuoi: 19,
//     masinhvien: "ph39002",
//     lop: "it18319",
//     diachi: "bắc giang",
//     diemjs: 9,
//     diemhh: 10,
//     diemtb: function () {
//         return (this.diemjs + this.diemhh) / 2;
//     },
//     gio: function () {

//     }

// };




// class SinhVien {
//     constructor(hoTen, tuoi, maSinhVien, lop, diaChi, monHoc) {
//       this.hoTen = "nguyễn đức huỳnh";
//       this.tuoi =19;
//       this.maSinhVien = "ph39002";
//       this.lop = "it1319";
//       this.diaChi = "bắc giang";
//       this.monHoc = monHoc;
//     }

//     ketQuaHocTap(diem) {
//       if (diem >= 5) {
//         return "Đậu";
//       } else {
//         return "Rớt";
//       }
//     }

//     diHocDungGio(gio) {
//       if (gio === "7:30") {
//         return "Đúng giờ";
//       } else {
//         return "Trễ giờ";
//       }
//     }
//   }let sinhVienA = new SinhVien("Nguyễn Văn A", 20, "SV001", "K62-CACLC1", "Hà Nội", "Toán");

// // Gọi phương thức tính kết quả học tập
// let ketQua = sinhVienA.ketQuaHocTap(8.5);
// console.log(ketQua); // Đậu

// // Gọi phương thức kiểm tra đi học đúng giờ
// let gio = "7:30";
// let diHocDungGio = sinhVienA.diHocDungGio(gio);
// console.log(diHocDungGio); // Đúng giờ



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//khai báo đối tượng hình chữ nhật
// thuộc tính chiều dài và chiều rộng
//phương thức tính ra chu vi và diện tích hình chữ nhật

// let hcn = {
//     chieudai: 10,
//     chieurong: 6,
//     chuvi: function () {
//         return 2 * (this.chieudai + this.chieurong);
//     },
//     dientich: function () {
//         return this.chieudai * this.chieurong;
//     }
// }
// let cv = hcn.chuvi();
// let dt = hcn.dientich()




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//bài tập
// khai báo 1 đối tượng oto
//tạo các thuộc tính: hãng xe , năm sản xuất, màu sắc
//tạo phưogn thức : bấm còi , bật đèn
//nhập vào 3 đối tượng

// function oto(hangxe, namsx, mausac) {
//     this.hangxe = hangxe;
//     this.namsx = namsx;
//     this.mausac = mausac;
//     this.bamcoi = function () {
//         return "bip bip";
//     };
//     this.batden = function () {
//             return "sáng";
//         }
// }
// let oto1 = new oto("toyota", 2004, "red");
// console.log(oto1);
// let oto2 = new oto("ferari", 2004, "pink");
// console.log(oto2);
// let oto3 = new oto("mayback", 2004, "black");
// console.log(oto3);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//bài tập lab5
//yêu cầu tạo mảng arrobj
//khai báo đối tượng hình chữ nhật
//thuộc tính :tính chu vi, diện tích (có tham số và có giá trị )
//lưu ý : tạo 5 phần tử
// let arrobj=[];
// function hcn(chieudai , chieurong){
//     this.chieudai=chieudai;
//     this.chieurong=chieurong;
//     this.chuvi=function(){
//         return (this.chieudai+this.chieurong)*2;
//     };
//     this.dientich=function(){
//         return  this.chieudai*this.chieurong ;
//     }
// }
// arrobj[0]=new hcn(10,20);
// arrobj[1]=new hcn(20,30);
// arrobj[2]=new hcn(30,40);
// arrobj[3]=new hcn(40,50);
// arrobj[4]=new hcn(50,60);
// console.log(arrobj);







////////////////////////////////////////////////////////////////////////////////



//tạo 1 class SoHoc gồm 1 thuộc tính so
//và các phương thức sau:
//phương thức kiểm tra xem thuộc tính số đó có phải số chẵn hay số lẻ
//phương thức tính giai thừa của số đó ví dụ so 5= .5!=1*2*3*4*5
//phưogn thúc kiêm tra xem so do co phait là số nguyên tố hay không
//(số nguyên tố là số chia hết cho 1 và chính nó )
//ví dụ 5 là số nguyên tố chia hết cho 1 và 5
//phương thức kiểm tra xem số đó có phải là số hoàn hảo hay không
//số hoàn hảo là số có tổng các ước nó trừ nó bằng chính nó
//ví dụ 28 là số hoàn hảo vì tổng các ước của 28 là 1+2+4+7+14=28


function SoHoc(so) {
    this.so = so;
    this.chanle = function () {
        //toán tử 3 ngôi: return this.so%2==0 ?"là số chẵn " : "là số lẻ";
        if (so % 2 == 0) {
            return "so chan";
        } else {
            return "so le";
        }
    };
    this.giaithua = function () {
        let sum = 1;
        if (this.so < 0) {

        }

    };
    this.songuyento = function () {
        if (this.so <= 1) {
            return "khong là số nguyên tố";
        } else {
            for (let i = 2; i <= Math.sqrt(this.so); i++) {
                if (this.so % i === 0) {
                    return "không là số nguyên tố";
                }
            } return "la so nguyen to";
        }


    };
    this.sohoahao = function () {
        let sum = 1;
        for (let i = 2; i <= Math.sqrt(this.so); i++) {
            if (this.so % i === 0) {
                sum += i;
            }
        } if (i * i !== this.so) {
            sum += this.so / i;
        }
        return sum === this.so;
    }
} const so = new SoHoc(28);
console.log(so.laSoChan());
console.log(so.laSoLe());
console.log(so.laSoNguyenTo());
console.log(so.laSoHoanHao());





/////////////////////////////////////////////////////////////////////////////////////////////////////////




//tạo 1 class SinhVien gồm các thuộc tính sau:
//masv, tensv, namsinh, diemtoan, diemly, diemhoa
//xây dựng phương thức sau:
// tính tuổi = năm hiện tại -năm sinh(có trả về)
//tính điểm trung bình = (diemtoa+ diemly+ diemhoa)/3(có trả về)
//phương thức xếp loại:
//nếu diemtb =>6.5 trả về đạt
//nếu diemtb <6.5 trả về khôgn đạt

function sinhvien(masv, tensv, namsinh, diemtoan, diemly, diemhoa) {
    this.masv = masv;
    this.tensv = tensv;
    this.namsinh = namsinh;
    this.diemtoan = diemtoan;
    this.diemly = diemly;
    this.diemhoa = diemhoa;
    this.tuoi = function () {
        let date = new Date();
        let currentYear = date.getFullYear();
        if (this.namsinh > currentYear || this.namsinh < 0) {
            return "nhập sai năm sinh";
        }
        return currentYear - this.namsinh;
    }
    this.diemtb = function () {
        if (this.diemtoan < 0 || this.diemtoan > 10) {
            return "sai điểm"
        }
        if (this.diemly < 0 || this.diemly > 10) {
            return "sai điểm"
        }
        if (this.diemhoa < 0 || this.diemhoa > 10) {
            return "sai điểm"
        }
        return (this.diemtoana + this.diemly + this.diemhoa) / 3;
    }
    this.xeploai = function () {
        if (this.diemtb() >= 6.5) {
            return "dat";
        } else {
            return "khong dat";
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// tạo 1 mảng đối tượng gồm 5 sinh viên
// hiển thị điểm TB các đối tượng sinh viên có tuổi >15 và tuổi <20
// đếm xem có bao nhiêu sinh viên đạt
// tính tổng điểm trung bình
// của các đối tượng sinh viên có tuổi >15

let sinhvien = [
    { name: "alobeo", age: 18, grade: 8.5 },
    { name: "linh", age: 19, grade: 9.0 },
    { name: "huynh", age: 20, grade: 7.5 },
    { name: "bich", age: 17, grade: 8.0 },
    { name: "đat", age: 16, grade: 9.5 },
];
let count = 0; // Biến đếm số sinh viên đạt
let sum = 0; // Biến tính tổng điểm trung bình

for (let i = 0; i < sinhvien.length; i++) {
    let student = sinhvien[i];
    if (student.age > 15 && student.age < 20) {
        let averageGrade = student.grade;
        console.log(`${student.name}: ${averageGrade}`);
        sum += averageGrade;
        if (averageGrade >= 5) {
            count++;
        }
    }
}

console.log(`Số sinh viên đạt: ${count}`);
console.log(`Tổng điểm trung bình: ${sum}`);







