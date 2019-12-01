// Thuoc Tinh va Phuong thuc

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    talk(friendName) {
        console.log("Hello ", friendName);
    }

    getPersonalInfo() {
        console.log("My name is: ", this.name);
        console.log("My age: ", this.age);
    }
}

module.exports = Person;
