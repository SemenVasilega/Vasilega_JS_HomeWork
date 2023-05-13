console.log('Task 1');
// let =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
// 1) створити функцію яка отримує аргумент і массив, якщо 
// його значення 'last' то функція повертає останній елемент 
// 'first' то повертає перший елемент массиву
let arrayFirsLast =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let firstOrLastNumberArray = Number(prompt('Enter 0 or 1'));
firstOrLast(firstOrLastNumberArray,arrayFirsLast); 
function firstOrLast(argument,array){
    if (argument === 0){
        return console.log(`Fist position from array [${array}] is - ${array.slice(0,1)}`);
    } else if (argument === 1){
        return console.log(`Last position from array [${array}] is - ${array.slice(-1)}`);
    } else {
        return console.log('You enter wrong number');
    }
} 
console.log('-------------------------------------------');
console.log('Task 2');
// 2)let smile = [':)', '=)',':)', '=)',':)', '=)']; 
// Створити функцію яка отримує аргументом новий самйл і 
// змінює  в масиві '':)' на новий смайл
let smile = [':)', '=)',':)', '=)',':)', '=)'];
let newSmile = prompt('Enter new smile: ')
console.log(`Your array of smile - [${smile}]`);
smileReplaceFunction(newSmile);
function smileReplaceFunction(argument){
    for(let i = 0; i < smile.length; i++){
        if(smile[i] === ':)'){
            smile[i] = argument;
        }
    }
    return console.log(`All smiles ":)" was changed on ${argument}, now your array - [${smile}]`);
}
console.log('-------------------------------------------');
console.log('Task 3');
// 3)Створити функції дій калькулятора (додавання, ділення, 
// множення, віднімання).При значення і операції вводяться  
// черз prompt. Викликати ту чи іншу функцію з отриманими 
// данними ( для вирішення можна викорисатти if або switch)
let firstNumber = Number(prompt('Enter first number - '));
let secondNumber = Number(prompt('Enter second number - '));
let sing = prompt('Enter the sing (+ , - , / , *) - ');
calculator();
function calculator(){
    switch(sing){
        case '+':
            console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case '-':
            console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case '*':
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case '/':
            if(secondNumber === 0){
                console.log(`wrong action! Can't divide by ${secondNumber}`);
                break;
            }
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
        default:
            console.log('You enter wrong sing!')
    }
}
console.log('-------------------------------------------');
console.log('Task 4');
// 4) Створити функцію яка заповнює глобальну змінну непарними 
// числами, а потім сортує їх в порядку зростання.
let arrayNotPairedNumbers = [];
arrayFillingAndSortFunction();
function arrayFillingAndSortFunction (){
    for (let i = 0; i <= 50; i++){        
        let rand = Math.floor(1 + Math.random() * (100 + 1 - 1));
        if(rand % 2 != 0){
            arrayNotPairedNumbers.push(rand);            
        }    
    }
    console.log(`Your filling array not paired number - [${arrayNotPairedNumbers}]`);
    console.log(`Your array after sort - [${arrayNotPairedNumbers.sort((a,b) => a-b)}]`);
}
console.log('-------------------------------------------');
console.log('Task 5');
// 5) Створити функцію яка отримує массив з списком покупок 
// (будь-які стрінг значення) а також отримує колбек функію 
// яка отримує як аргумент стрінг  і в консоль лог  повертає 
// "Вам треба купити ..."
let arrayPurchase = ['milk', 'coffe', 'bread', 'banana', 'mango', 'patato'];
purchaseFunction(arrayPurchase);
function purchaseFunction(array, callbackFn){
    for(let i = 0; i < array.length; i++){
        callbackPurchase(array[i]);        
    }
}
function callbackPurchase(array){
    return console.log(`Вам треба купити ${array}`);
}
console.log('-------------------------------------------');
console.log('Task 5*');
// 5) Створити функцію яка рахує кількість false в масиві і 
// повертає число 
// let countMe =[true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
let countMe =[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

countMeFunction(countMe);

function countMeFunction(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === false){
            count++;
        }
    }
    return console.log(`In array [${countMe}] - ${count} false`);
}