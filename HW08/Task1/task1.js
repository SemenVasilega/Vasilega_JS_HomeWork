window.onload = function(){
    let body = document.querySelector('body');
    let fragment = new DocumentFragment();
    body.style.display = 'flex';
    body.style.width = '80%';    
    body.style.justifyContent = 'space-between';
    body.style.flexWrap = 'wrap';
    function elementsFunc(number){
        for(let i = 0; i < number; i++){
            console.log(i);
            let bgcolo = Math.floor(1+Math.random()*(100+1-1));
            // console.log(bgcolo);
            let div = document.createElement('div');
            div.innerHTML = ':)';
            div.style.width = '20px';
            div.style.height = '20px';
            div.style.borderRadius = '100%';
            div.style.border = '1px solid black';
            div.style.marginRight = '2px';
            div.style.backgroundColor = `hsl(${bgcolo}, 100%, 40%)`;            
            div.style.textAlign = 'center';            
            // console.log(div);            
            fragment.appendChild(div);
        }        
    }
    elementsFunc(100);
    body.appendChild(fragment);    
};