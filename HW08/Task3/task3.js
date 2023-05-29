window.onload = function() {
    let btn = document.querySelector('.delete');
    let ul = document.querySelector('.divList');
    let [...list] = document.querySelectorAll('.list li');
    // console.log(btn);
    console.log(ul);
    btn.onclick = function(){
        console.log(ul.lastChild);
        
        // for (let i = 0; i < list.length; i++){
        //     console.log(list.length);
        //     if(list[i] === null){
        //         alert('There is no element in this list');
        //     } else if (i+1 === list.length){
        //         console.log('hi');
        //         delete list[i];
        //     }
        //     console.log(list);
        //     console.log(i);

        // }
        
    } 
};