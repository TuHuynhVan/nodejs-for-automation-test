let NhanVien = require("./NhanVien");

class NhanVienChinhThuc extends NhanVien{

    constructor(name, id){
        super(name, id);
    }

    signContract(){
        console.log(this.name + " can di den fong HR de ki HDLD."); 
    }

}
module.exports = NhanVienChinhThuc;