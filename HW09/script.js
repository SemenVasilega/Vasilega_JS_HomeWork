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

    // const images = {
    //     '0', '1', '2', '3', '4'
    // }

    function getImages(n) {
        let image = new Image();
        let arrayImage = [];
        for(let i = 0; i <= n; i++){            
            image.src = 'img/' + i + '.jfif';
            arrayImage.push(image);
            
        }
        return arrayImage;
    }    
    let arr = getImages(7);
    console.log(arr);
    function imageOutFunc (item) {
        let divImage = document.querySelector('.images');
        item.forEach(src => {
            let img = document.createElement('img');
            img.src = src;
            divImage.append(img);
        });
         
        // for (let key in item){
        //     let img = document.createElement('img');
        //     console.log(key);
        //     console.log(item);
        //     console.log(typeof item);
        // }
    }    
    setInterval(imageOutFunc(arr),5000);
    
};