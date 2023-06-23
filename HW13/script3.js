window.onload = function(){
    let images = document.querySelectorAll('.slider .slider-line img');
    // console.log(images);
    let sliderLine = document.querySelector('.slider .slider-line');
    console.log(sliderLine);
    let count = 0;
    let width;
    let heigh;
    let btnPre = document.querySelector('.pre');
    // console.log(btnPre);
    let btnNext = document.querySelector('.next');
    function init(){
        console.log('resize');
        width = document.querySelector('.slider').offsetWidth;
        heigh = document.querySelector('.slider').offsetHeight;
        // console.log(width);
        console.log(heigh);
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = heigh + 'px';
        });
        rollSlider();
    }
    init();
    window.addEventListener('resize', init);
    
    // btnPre.onclick = function(){
    //     count--;
    //     if(count < 0){
    //         count = images.length - 1;
    //     }
    //     rollSlider();
    // };
    btnPre.addEventListener('click', function(){
        count--;
        if(count < 0){
            count = images.length - 1;
        }
        rollSlider();
    });
    btnNext.addEventListener('click', function(){
        count++;
        if(count >= images.length){
            count = 0;
        }
        rollSlider();
    });
    function autoMoveSlider(){
        count++;
        if(count >= images.length){
            count = 0;
        }
        rollSlider();
    }
    function rollSlider(){        
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
    setInterval(autoMoveSlider, 5000);
}