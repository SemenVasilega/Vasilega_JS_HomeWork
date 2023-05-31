window.onload = function() {
    let btnUpLC = document.querySelector('.upLC');
    let btnUpRC = document.querySelector('.upRC');
    let btnLowLC = document.querySelector('.lowLC');
    let btnLowRC = document.querySelector('.lowRC');
    let btnCenter = document.querySelector('.center');
    console.log(btnUpLC);    
    let divMain = document.querySelector('.windowMessage');    
    divMain.style.position = 'relative';    
    // let width = divMain.offsetWidth;
    // let height = divMain.offsetHeight;
    // console.log(width, height);
    divMain.style.width = '1510px';
    divMain.style.height = '500px';
    divMain.style.backgroundColor = 'red';
    function createBlokFunc(firstPosition, secondPosition) {        
        let divMessage = document.createElement('div');
        let divMessageStyle = getComputedStyle(divMessage);
        console.log(divMessageStyle);
        divMessage.innerHTML = '';
        divMessage.style.position = 'absolute';        
        divMessage.style.left = firstPosition;
        divMessage.style.top = secondPosition;        
        divMessage.style.width = '20%';
        divMessage.style.height = '20%';
        divMessage.style.backgroundColor = 'green';        
        divMain.appendChild(divMessage);
        console.log(divMessage);
    }
    btnUpLC.onclick = function() {
        createBlokFunc('0', '0');
        // divMain.appendChild(fragment);
        // console.log('Hi');
    }
    btnUpRC.onclick = function(){
        createBlokFunc('80%', '0');
    }
    btnLowLC.onclick = function(){
        createBlokFunc('0','80%');
    }    
    btnLowRC.onclick = function(){
        createBlokFunc('80%','80%');
    }
    btnCenter.onclick = function(){
        createBlokFunc('40%','40%');
    }
};