let form = document.getElementById('hinhchunhat');
let regexNum = /^\d*(\.\d+)?$/;
let arrCheck = ["chieudai","chieurong"];

function Validate() {
    let check = false;
    let data = {};
    for(let i = 0; i < arrCheck.length;i++) {
        let inputValue = document.getElementById(arrCheck[i]);
        let error = document.querySelector(".error-"+arrCheck[i]);
        error.innerHTML = "";
        if(inputValue.value == 0 || inputValue.value == null) {
            error.innerHTML = "Trường không được để trống";
            check = true;
        }
        else if(!regexNum.test(inputValue.value)) {
            error.innerHTML = "Chỉ được nhập số";
            check = true;
        }
        data[arrCheck[i]] = inputValue.value
    }
    if(!check) {
        return data;
    }
    return false;
}
let table = document.getElementById('ketqua');
let csdl = [{
    chieudai: 2,
    chieurong: 1
}];

function Render() {
    let content = "";
    for(let i = 0;i < csdl.length;i++) {
        content += `
        <tr>
            <td>${i+1}</td>
            <td>${csdl[i].chieudai}</td>
            <td>${csdl[i].chieurong}</td>
            <td>${ChuVi(csdl[i].chieudai,csdl[i].chieurong)}</td>
            <td>${DienTich(csdl[i].chieudai,csdl[i].chieurong)}</td>
            <td><button type="button" class="delete" data-id="${i}">Xóa</button></td>
        </tr>
        
        `;
    }
    table.innerHTML = content;
    let deleteBTN = document.getElementsByClassName('delete');
    for(let i = 0; i < deleteBTN.length;i++) {
        deleteBTN[i].onclick = function() {
            let id = this.dataset.id;
            csdl.splice(id,1);
            Render();
        }
    }
}
Render();
form.onsubmit = function(e) {
    e.preventDefault();
    let hinhChuNhat = Validate();
    if(hinhChuNhat) {
        csdl.push(hinhChuNhat);
        Render();
    }
    
}

function ChuVi(num1, num2) {
    return (Number (num1) + Number(num2))*2;
}

function DienTich(num1,num2) {
    return Number(num1) * Number(num2);
}