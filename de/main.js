let index = 0;

function SlideShow() {
    let getSlide = document.getElementsByClassName('slide');
    if(index > getSlide.length - 1) {
        index = 0;
    }
    if(index < 0) {
        index = getSlide.length - 1;
    }
    for (let i = 0; i < getSlide.length;i++) {
        getSlide[i].style.display = "none";
    }
    getSlide[index].style.display = "block";
}
SlideShow();

function Next() {
    index++;
    SlideShow();
}

function Previous() {
    index--;
    SlideShow();
}
let loop;
function AutoLoop() {
    loop = setInterval(function() {
        Next()
    },1000)
}

function StopLoop() {
    clearInterval(loop);
}



let dangKyThanhVien = document.getElementById('dangkyThanhVien');
let arrForm = ["name", "email", "phone","user","pass","repass","knowfrom"];
let regexEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
let regexText = /^[a-zA-Z\s]+$/;
let regexTel = /^[0][0-9]{9}$/;


function Validate_2() {
    let data = {};
    let kiemTra = false;
    for(let i = 0; i < arrForm.length;i++) {
        let thongTinNhap = document.getElementById(arrForm[i]);
        let thongBaoLoi = document.querySelector(".error-"+arrForm[i]);
        thongBaoLoi.innerHTML = "";
        if(thongTinNhap.value == "" || thongTinNhap.value == null) {
            thongBaoLoi.innerHTML = "Trường bắt buộc, mời nhập";
            kiemTra = true;
        }
        if(arrForm[i] == "name") {
            if(!regexText.test(thongTinNhap.value)) {
                thongBaoLoi.innerHTML = "Nhập tên không đúng";
                kiemTra = true;
            }
        }
        if(arrForm[i] == "email") {
            if(!regexEmail.test(thongTinNhap.value)) {
                thongBaoLoi.innerHTML = "Nhập không đúng email";
                kiemTra = true;
            }
        }
        if(arrForm[i] == "phone") {
            if(!regexTel.test(thongTinNhap.value)) {
                thongBaoLoi.innerHTML = "Nhập không đúng số điện thoại"
                kiemTra = true;
            }
        }

        let pass = document.getElementById('pass');
        let repass = document.getElementById('repass');
        if(pass.value != repass.value) {
            document.querySelector(".error-repass").innerHTML = "Mật khẩu nhập lại không đúng";
            kiemTra = true;
        }
        
        if(!document.getElementById("friend").checked && !document.getElementById('facebook').checked) {
            document.querySelector('.error-option').innerHTML = "Chưa chọn";
            kiemTra = true;
        }
        if(document.getElementById("friend").checked || document.getElementById('facebook').checked ) {
            document.querySelector('.error-option').innerHTML = null;
            let hienThi = document.querySelector('#knowfrom')
            hienThi.value = BietThongQua();
            if(arrForm[i] == "knowfrom") {
                thongTinNhap.value = hienThi.value;
            }
            
        }
        
        
        data[arrForm[i]] = thongTinNhap.value;
    }
    if(!kiemTra) {
        return data;
    }
    return false;
}

let csdl2 = [{
    name: "Hoang",
    email: "hoang23@gmail.com.vn",
    phone: "09877766655",
    user: "123",
    knowfrom: "facebook",
}]
let yourInfo = document.getElementById('thongTinCuaBan');
function TheRender() {
    let content = "";
    for(let i = 0; i < csdl2.length;i++) {
        content += `
        <tr>
            <td>${csdl2[i].name}</td>
            <td>${csdl2[i].email}</td>
            <td>${csdl2[i].phone}</td>
            <td>${csdl2[i].user}</td>
            <td>${csdl2[i].knowfrom}</td>
            <td><button type = "button" class="xoathongtin" data-id="${i}">Xóa</button></td>
        </tr>
        `
    }
    yourInfo.innerHTML = content;
    let xoaNguoiDung = document.querySelectorAll(".xoathongtin");
    for(let i = 0 ; i < xoaNguoiDung.length;i++) {
        xoaNguoiDung[i].onclick = function() {
            let id = this.dataset.id;
            csdl2.splice(id,1);
            TheRender();
        }
    } 
}
TheRender();
dangKyThanhVien.onsubmit = function(e) {
    e.preventDefault();
    let nguoiDung = Validate_2();
    if(nguoiDung) {
        csdl2.push(nguoiDung)
        TheRender();
    }
}

function BietThongQua() {
    if(document.getElementById("friend").checked) {
        return "qua bạn";
    }
    if(document.getElementById("facebook").checked) {
        return "qua facebook";
    }
}

