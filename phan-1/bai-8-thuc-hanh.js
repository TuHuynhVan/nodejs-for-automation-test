// Cho 1 mang so tu nhien
// tach so chan va so le ra thanh 2 mang
// In ket qua

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = [];
let oddNumber = [];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 == 0) {
        evenNumber.push(myArray[i]);
    } else {
        oddNumber.push(myArray[i])
    }
}

console.log("Mang so chan: ", evenNumber);
console.log("Mang so le: ", oddNumber);


