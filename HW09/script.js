window.onload = function(){
    let ctrlA = document.querySelector('#ctrlA');
    // console.log(cntrlA);
    let ctrlS = document.querySelector('#ctrlS');
    let allKey = document.querySelector('#allKey');
    let btnCtrlA = document.querySelector('.btnCtrlA');
    let btnCtrlS = document.querySelector('.btnCtrlS');
    btnCtrlA.onclick = function(){
        ctrlA.style.display = 'inline';
        ctrlA.addEventListener('keydown', function(e){
            if(e.key == 'a' && e.ctrlKey == true){
                e.preventDefault();            
                ctrlA.value = `Selected. You press ctrl kye + ${e.key}`;
                let counter = 5000;
                setTimeout(() => ctrlA.style.display = 'none', counter);
                
                allKey.value = `Window with controls Press ctrl+A will close after 5 second`;
                
            }
            else {            
                allKey.value = `You press ${e.key}`;
            }
        });
    }
    btnCtrlS.onclick = function(){
        ctrlS.style.display = 'inline';
        ctrlS.addEventListener('keydown', function(e){
            if(e.key == 's' && e.ctrlKey == true){
                e.preventDefault();            
                ctrlS.value = `Saved. You press ${e.ctrlKey} kye + ${e.key}`;
                let counter = 5000;
                setTimeout(() => ctrlS.style.display = 'none', counter);
                
                allKey.value = `Window with controls Press ctrl+S will close after 5 second`;
            }
            else {            
                allKey.value = `You press ${e.key}`;
            }
        });
    }

    
    // function getImages() {
    //     let image = new Image;
    //     let arrayImage = [];
    //     for(let i = 0; i <= 7; i++){            
    //         image.src = "img/" + i + ".jpg";
    //         // console.log(image);
    //         // console.log(i);
    //         arrayImage.push(image);
            
    //     }
    //     return arrayImage;
    // }
    const arrayImage = [
        'img/0.jpg',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg'
    ]    
    
    // getImages();
    
    let counter = 0;
    function imageOutFunc () {
        let divImage = document.querySelector('.images');
        // let img = document.createElement('img');
        let img = document.querySelector('img');
        img.src = arrayImage[counter];        
        console.log(arrayImage[counter]);
        counter++;
        if(counter === arrayImage.length){
            counter = 0;
        }
        console.log(counter);
        
        // arrayImage.forEach(() => {
        //     // let img = document.createElement('img');
        //     let img = document.querySelector('img');
        //     // console.log(src);
        //     //img.src = src;
            
        //     for(let i = 0; i < arrayImage.length; i++){
        //         let counter = 0;
        //         img.src = arrayImage[i];
        //         console.log(i);
        //         console.log(arrayImage[i]);
        //     }
        //     // divImage.append(img);
            
            
            
        // });
        
    }   
  
    setInterval(imageOutFunc, 1000); 
    
};