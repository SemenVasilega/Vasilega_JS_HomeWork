console.log('Task 1');
//отримайте через prompt два значення логін і пароль. 
//Якщо логін admin і пароль 12345 то виведіть повідомлення 
//вітаємо в системі, якщо дані не вірні то виведіть 
//"Логін невірни"
let loginUser = prompt('Enter your login: ');
let passwordUser = prompt('Enter your password: ');
if (loginUser === 'admin' && passwordUser === '12345'){
    console.log(`${loginUser} - congratulations, you are in the system.`);
} else if (loginUser === 'admin' && passwordUser != '12345'){
    console.log(`${loginUser} - sorry, but you enter a wrong password.`);
} else {
    console.log(`${loginUser} - sorry, but you are not registered in the system.`);
}
console.log('--------------------------------------------');
console.log('Task 2');
// Отримайте від користувача через prompt число 
// (вартість покупки) якщо вартість більше 1000 то напишіть 
// ваша знижка 2% якдо більше 3000 то напишіть знижка 5% і 
// в усіх інших якщо менше 1000 то напишіть недостатня сума 
// покупки для знижки
let productPrice = Number(prompt('Enter a product price: '));
if (productPrice >= 1000 && productPrice < 3000){
    console.log(`Product price = ${productPrice} , your discount = 2 % `);
} else if (productPrice >= 3000){
    console.log(`Product price = ${productPrice} , your discount = 5 % `);
} 
else{    
    console.log(`Product price = ${productPrice} , the amount of your purchase is not sufficient to receive a discount`);
}
console.log('--------------------------------------------');
console.log('Task 3');
// Отримайте від користувач назву дня неділі якщо це понеділок 
// чи середа виведіть інформацію що у вас курси о 19 годині. 
// Якщ це інший день то виведіть " у вас вільний час " також 
// подбайте про  нестандартний варіант ( наприклад введено що інше, 
// реалізувати задачу через switch)
let dayOfWeek = prompt('Enter a day of the week - ');
switch (dayOfWeek){
    case 'monday':
    case 'Monday':
    case 'MONDAY':
    case 'понеділок':
    case 'Понеділок':
    case 'ПОНЕДІЛОК':    
        console.log(`Today is ${dayOfWeek} - you have a lesson at 19:00`);
        break;
    case 'Wednesday':
    case 'wednesday':
    case 'WEDNESDAY':
    case 'Середа':
    case 'СЕРЕДА':
    case 'середа':
        console.log(`Today is ${dayOfWeek} - you have a lesson at 19:00`);
        break;
    default:
        console.log(`Today is ${dayOfWeek} - you have a free time today`);        
}
console.log('--------------------------------------------');
console.log('Task 4');
// Спитати в користувача вік, далі використовуючи тернарний 
// оператор ( це скорочений запис іf ) створити змінну яка 
// отримує true якщо вік більше 18  i false якщо менше
let userAge = Number(prompt('Enter your age - '));
let controlAge = userAge > 18 ? true : false;
console.log(controlAge);
console.log('--------------------------------------------');
console.log('Task 5');
// Написати  реалізацію  калькулятора  за допомогою if і else if 
// при спробі поділити на 0 виводити alert з попередженням 
// користувачу. Повині бути команди (додавання, множення, 
// ділення, віднімання)
let firstNumber = Number(prompt('Enter first number - '));
let secondNumber = Number(prompt('Enter second number - '));
let operation = prompt('Enter the operation (+) or (-) or (*) or (/) - ');
if(operation === '+'){
    console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if(operation === '-'){
    console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if(operation === '*'){
    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if(operation === '/'){
    if (firstNumber === 0 || secondNumber === 0){
        alert('you can not divide a number by "0"');        
    }
    console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
}
else{
    console.log('wrong operation');
}
console.log('--------------------------------------------');
console.log('Task 6');
// за допомогою циклу вивести в консоль всі 
// парні значення числа 20
let counter = 1;
while (counter <= 20){
    if(counter % 2 === 0){
        console.log(counter);
    }
    counter++;
}