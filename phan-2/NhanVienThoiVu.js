let NhanVien = require("./NhanVien");

class NhanVienThoiVu extends NhanVien {

    constructor(name, id) {
        super(name, id);
    }

    getExtraSalary(){
        return 0;
    }

}
module.exports = NhanVienThoiVu;