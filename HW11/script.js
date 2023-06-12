window.onload = function(){
    let sectionOne = document.querySelector('.section-one');
    let sectionTwo = document.querySelector('.section-two');
    let numberP = document.querySelector('.number-p');
    let spacesP = document.querySelector('.spaces-p');
    let countNumbersId = document.querySelector('#count-numbers-id');
    let countNumbersInput = document.querySelector('.count-numbers-input');
    // console.log(countNumbersInput);
    let numberDiv = document.querySelector('.number-div');
    numberDiv.style.margingBotom = '20px';
    numberDiv.style.height = '100px';
    function countNumbersFunc(){        
        let reg = /\d/g;
        // console.log(countNumbersInput.value);
        let count = countNumbersInput.value.match(reg);
        // console.log(count);
        // console.log(typeof count);
        if(count != null){
            // console.log(count);
            numberP.innerHTML = `In this text - ${countNumbersInput.value} , count of numbers is - ${count.length}`; 
        } else {
            numberP.innerHTML = `This text - ${countNumbersInput.value} , does not containes a number`;
        }        
    }
    // countNumbersFunc();
    sectionOne.addEventListener('change', countNumbersFunc);
    function changeSpaces(){
        let valueCountOfSpaces = document.querySelector('.count-spaces-input').value;
        console.log(valueCountOfSpaces);
        let reg = /\s/g;
        let changeString = valueCountOfSpaces.replace(reg, '!');
        let count = valueCountOfSpaces.match(reg);
        // console.log(count);
        if(count != null){
            
            spacesP.innerHTML = `In this text ${valueCountOfSpaces}, all spaces ${count.length} changed on "!" - ${changeString}`;
        } else {
            spacesP.innerHTML = `In this text ${valueCountOfSpaces}, does not have spaces`;
        }
    }
    // changeSpaces();
    sectionTwo.addEventListener('change', changeSpaces);
};