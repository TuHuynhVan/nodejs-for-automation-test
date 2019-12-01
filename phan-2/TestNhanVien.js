let NhanVienChinhThuc = require("./NhanVienChinhThuc")
let NhanVienThoiVu = require("./NhanVienThoiVu")

let teo = new NhanVienChinhThuc("Teo", 113)
let ti = new NhanVienThoiVu("Ti", 114)

teo.getEmployeeInfo();
ti.getEmployeeInfo();

let teoExtraSalary = teo.getExtraSalary();
let tiExtraSalary = ti.getExtraSalary();

console.log("Phu cap cua TEo: ", teoExtraSalary);
console.log("Phu cap cua Ti: ", tiExtraSalary);

teo.signContract();

