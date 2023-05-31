window.onload = function() {
    let btn = document.querySelector('.delete');
    let ul = document.querySelector('.list');
    let [...list] = document.querySelectorAll('li');
    // console.log(btn);
    // console.log(ul);
    function removeLastChild(container){
        let removeUlLastChild = container.lastElementChild;
        // console.log(removeUlLastChild);       
        if(removeUlLastChild != null){
            container.removeChild(removeUlLastChild);
        } else {alert('There is no element in this list');}
        
    }
    // removeLastChild(ul);
    
    btn.onclick = 
    function(){
        removeLastChild(ul);        
    } 
};