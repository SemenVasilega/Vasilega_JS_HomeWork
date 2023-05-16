console.log('Task 1');
// 1) Отримати від користувача значення name  вивести в консоль, 
// першу і другу літеру  в верхньому регістрі. Якщо імя 
// користувача довше 3 символів, то ще вивсести перші 3 літери 
// + ... 
let userName = prompt ('Enter your name').toUpperCase();
let newUserName = [];
console.log(`You enter name - ${userName}`);

for(let i = 0; i < 3; i++){
    newUserName[i] = userName[i];
    if(i === 2){
        newUserName[i] = userName[i].toLowerCase();
    }    
}
console.log(`${newUserName.join('')} ...`);
console.log('------------------------------------------');
console.log('Task 2');
// 2) Створити функцію конструкток CarFabric   яка створює 
// обєкт з на такими даними, рікВипуску, модель,  максимальна 
// швидкість
function CarFabric (yearOfManufacture, model, speedLimit){
    this.yearOfManufacture = yearOfManufacture;
    this.model = model;
    this.speedLimit = speedLimit;    
}
CarFabric.prototype.carInfo = function () {
    //     function yearFunc (object){
    //     let year = data.getFullYear();        
    //     console.log(`Your car is ${year} years old`);
    // }    
    console.log(`Year of manufacture - ${this.yearOfManufacture}, model - ${this.model}, speed limit is - ${this.speedLimit}`);
}

const porshe = new CarFabric(2000, 'porshe', 250);
porshe.carInfo();
// console.log(porshe);
console.log('------------------------------------------');
console.log('Task 3');
// 3) На прототипі конструктора зробіть функцію carInfo яка 
// вираховує вік машини використовуючи new Date
const data = new Date();

function yearManufacture(object,data){
    let year = Number(data.getFullYear());
    let yearMan = object;    
    console.log(`Today is ${year}, year manufacture - ${yearMan}.Car in privios task is - ${year - yearMan} years old`);
        
}
yearManufacture(porshe.yearOfManufacture,data);
// console.log(`${porshe.carInfo()} + this car is - ${year} years old`);

