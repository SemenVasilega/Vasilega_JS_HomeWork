window.onload = function() {
    // document.body.style.backgroundColor = 'red';    
    let headerVarible = document.querySelector('header');
    //console.log(headerVarible);
    let bodyUl = document.querySelector('.bodyUl');
    let footerVarible = document.querySelector('footer');
    
    function borderFunc(container){
        let borderF = container;
        console.log(borderF);        
        if(container != null){            
            borderF.setAttribute("style","border:1px solid red");
        }        
    }
    borderFunc(headerVarible);
    borderFunc(bodyUl);
    borderFunc(footerVarible);
    let newLi = ['New li1', 'New li2', 'New li3'];    
    function createLi(liContainer){
        let li = document.createElement('li');
        li.className = 'active';
        li.innerHTML = liContainer;
        return li;
    }
    for(let i = 0; i < newLi.length; i++){        
        bodyUl.appendChild(createLi(newLi[i]));        
    }
    let colorLi = document.querySelectorAll('.active');
    console.log(colorLi);
    function colorElement(container){  
        if(container != null){
            for(let i = 0; i < container.length; i++){
                container[i].setAttribute("style","color:yellow; background-color:blue; list-style:none");
            }
            
        }
    }    
    colorElement(colorLi);
    let siblingElement = document.querySelectorAll('.active');
    console.log(siblingElement);
    
    function nextElementSibling(container){    
        if(container.nextElementSibling === null){
            console.log('There is no next sibling element!');
        }
        container.nextElementSibling.setAttribute('style', 'background-color:red');    
    }
    function previousElementSibling(container){    
        if(container.previousElementSibling === null){
            console.log('There is no previous sibling element!');
        }
        container.previousElementSibling.setAttribute('style', 'background-color:yellow');    
    }
    nextElementSibling(bodyUl);
    // nextElementSibling(siblingElement);
    previousElementSibling(bodyUl);
};