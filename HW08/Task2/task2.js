window.onload = function() {
    let btnUpLC = document.querySelector('.upLC');
    let btnUpRC = document.querySelector('.upRC');
    let btnLowLC = document.querySelector('.lowLC');
    let btnLowRC = document.querySelector('.lowRC');
    console.log(btnUpLC);
    // let fragment = new DocumentFragment();
    let divMain = document.querySelector('.windowMessage');
    let divMessage = document.createElement('div');
    let divMessageStyle = getComputedStyle(divMessage);
    divMain.style.position = 'relative';
    
    let width = divMain.offsetWidth;
    let height = divMain.offsetHeight;
    console.log(width, height);
    divMain.style.width = '1510px';
    divMain.style.height = '500px';
    divMain.style.backgroundColor = 'red';
    function createBlokFunc(left, top) {        
        // let divMessage = document.createElement('div');
        // let divMessageStyle = getComputedStyle(divMessage);
        console.log(divMessageStyle);
        divMessage.innerHTML = '';
        divMessage.style.position = 'absolute';
        divMessage.style.position.left = left;
        divMessage.style.position.top = top;
        // divMessage.style.textAlign = 'center';        
        divMessage.style.width = '20%';
        divMessage.style.height = '20%';
        divMessage.style.backgroundColor = 'green';
        divMessage.style.position = position;
        // divMessage.style.padding = paddingLeft;
        // divMessage.style.paddingTop = paddingTop;
        // fragment.appendChild(divMessage);
        divMain.appendChild(divMessage);
        console.log(divMessage);
    }
    btnUpLC.onclick = function() {
        createBlokFunc('100 px', '150 px');
        // divMain.appendChild(fragment);
        console.log('Hi');
    }
    btnUpRC.onclick = function(){
        createBlokFunc('80%','0%');
        // divMain.appendChild(fragment);
    }
    btnLowLC.onclick = function(){
        createBlokFunc('0','80%');
        // divMain.appendChild(fragment);
    }    
    btnLowRC.onclick = function(){
        createBlokFunc('80%','80%');
        // divMain.appendChild(fragment);
    }
};