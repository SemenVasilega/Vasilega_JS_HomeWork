console.log('Task 1');
// створити функцію яка вибирає булеві значення з массиву 
// і повертає новий массив
// let arr = ['1', 23, {a: 1}, true, NaN, false, null]
let arr = ['1', 23, {a: 1}, true, NaN, false, null];
function buleanFunction(array){
    let bulArray = [];
    array.forEach((item, index) => {        
        if (typeof item === 'boolean'){
            bulArray.push(array[index]);            
        }
    });
    // return console.log(`From array [${array}], array of boolean values created [${bulArray}]`);
    return bulArray;
}
// buleanFunction(arr);
console.log(`From array [${arr}], array of boolean values created [${buleanFunction(arr)}]`)
console.log('---------------------------------------------');
console.log('Task 2');
// Створити клас "Товар" (Product), який має наступні 
// властивості і методи:
// Властивості:
// name (ім'я товару)
// price (ціна товару)
// quantity (кількість одиниць товару)
// Методи:
// getTotalPrice() - повертає загальну вартість товару 
// (ціна * кількість).
// toString() - повертає рядок з інформацією про товар у 
// форматі "Ім'я: {ім'я}, Ціна: {ціна}, Кількість: {кількість}".
class ProductClass{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalPrice(){
        let totalPrice = this.quantity * this.price;
        console.log(`${this.quantity} * ${this.price} = ${totalPrice}`);
        return totalPrice;
    }
    toStringProductInfo(){
        console.log(`Product name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Total price: ${this.getTotalPrice()}`);       
    }
}
let productClass = new ProductClass('Milk', 25, 15);
// console.log(`${ProductClass.getTotalPrice()}`);
productClass.getTotalPrice();
productClass.toStringProductInfo();
console.log('---------------------------------------------');
console.log('Task 3');
// Напишіть функцію printNames, яка приймає масив об'єктів з 
// інформацією про людей (кожен об'єкт має властивості name і 
// age). Функція повинна використовувати деструктуризацію 
// об'єктів і цикл , щоб вивести імена всіх людей у консоль.
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Tom', age: 20 }
];
function printNames(arr){
    const peopleName = arr;
    for (const {name} of peopleName){
        console.log(name);
    }
}
printNames(people);



console.log('---------------------------------------------');
console.log('Task 4');
// Напишіть функцію capitalizeSubstring, яка приймає рядок і 
// перетворює першу літеру кожного слова в верхній регістр, 
// залишаючи решту рядка без змін. Потім поверніть отриманий 
// рядок. 'i love cod'  => ' 'I Love Cod'';
let str = 'i love cod';
function capitalizeSubstring (str){
    if(!str){return str;}
    let splits = str.split(' ');
    // console.log(splits);
    let newStr = '';
    for (let i = 0; i < splits.length; i++){
        let simbol = splits[i];
        let firstSimbol = simbol.substring(0, 1).toUpperCase();
        let leftOvers = simbol.substring(1, simbol.length);
        // console.log(splits[i]);
        // console.log(simbol);
        // console.log(firstSimbol);
        // console.log(leftOvers);
        newStr += firstSimbol + leftOvers + ' ';        
    }
    return newStr;
}
console.log(`old string is - ${str} => ${capitalizeSubstring(str)}`);