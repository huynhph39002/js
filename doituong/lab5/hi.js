

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
        if (so % 2 == 0) {
            return "so chan";
        } else {
            return "so le";
        }
    };
    this.giaithua = function () {

    };
    this.songuyento = function () {
        if (this.so <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(this.so); i++) {
            if (this.so % i === 0) {
                return false;
            }
        }
        return "la so nguyen to";

    };
    this.sohoahao = function () {
        let sum = 1;
        for (let i = 2; i <= Math.sqrt(this.so); i++) {
            if (this.so % i === 0) {
                sum += i;
                if (i * i !== this.so) {
                    sum += this.so / i;
                }
            }
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
        var current=new Date().getFullYear();
        var birthday=prompt("Nhập vào ngày tháng năm sinh theo định dạng 'MM/dd/yyyy':");
        birthday=new Date(birthday).getFullYear();
        return "tuoi"(current-birthday);
    };
    this.diemtb = function () {
        return (this.diemtoana + this.diemly + this.diemhoa) / 3;
    };
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

let sinhvien=[
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







