class NhanVien {

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getExtraSalary(){
        return 500;
    }

    getEmployeeInfo(){
        console.log("Ten nhan vien: ", this.name);
        console.log("MSNV: ", this.id);
    }

}
module.exports = NhanVien;