console.log('Task 1');
//За допомогою циклу вивести значення від 10 до 0 
for (let i = 10; i >= 0; i--){
    console.log(i);
}
console.log('-------------------------------------');
console.log('Task 2');
//Створити пустий массив і заповнити його всіма парними 
//занченнями від 0 до 8
let arrayEvenNumbers = [];
// for (let i = 0, j = 0; i <= 8; i++){
//     if (i % 2 === 0 && i!=0){
//         arrayEvenNumbers[j] = i;
//         j++;     
//     }
// }
for (let i = 0; i <= 8; i++){
    if (i % 2 === 0 && i != 0){
        arrayEvenNumbers.push(i);
    }
}
console.log(arrayEvenNumbers);
console.log('-------------------------------------');
console.log('Task 3');
// Створити цикл який виводить значення в консоль в такому 
// форматі "Сьогодні ....  у вас такі плани .." 
// let days = ["Понеділок", "Середа", "Неділя"] 
// let plans = ["Урок 03", "Урок 04", "Вихідни"]
let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідни"];
if (days.length === plans.length){
    for(let i = 0; i < days.length; i++){
        console.log(`Сьогодні - ${days[i]} у вас такі плани - ${plans[i]}`);
    }
} else {
    console.log(`your arrays ${days} and ${plans} are not equal`);
}
console.log('-------------------------------------');
console.log('Task 4');
// Вибрати  з массива 5 перших значень та вивести їх в консоль 
// з нумераціє "Значення № ..."
// let numbers = [79, 9, 88, 57, 89, 42, 86, 88, 37, 14]
let numbers = [79, 9, 88, 57, 89, 42, 86, 88, 37, 14];
let arraySlice = numbers.slice(0,5);
console.log(`Origin array is - ${numbers}`);
// console.log(`Slice array is - ${arraySlice}`);
for (let i = 0; i < arraySlice.length; i++){
    console.log(`Значення № ${arraySlice[i]}`);
}
console.log('-------------------------------------');
console.log('Task 5');
// Написати цикл який замінює відємне значення в масиві на 0  
// let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]
let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36];
console.log(`Origin array - ${checkArr}`);
for (let i = 0; i < checkArr.length; i++){
    if (checkArr[i] < 0){
        checkArr[i] = 0;
    }
}
console.log(`Array after changes - ${checkArr}`);
