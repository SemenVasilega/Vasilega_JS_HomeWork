window.onload = function(){
    let sectionMain = document.querySelector('.sectionMain');
    let inputHeight = document.querySelector('#inputHeight');
    let inputWidth = document.querySelector('#inputWidth');
    let btn = document.querySelector('.btn-primary');
    let svgSection = document.querySelector('#svgSection');
    let btnHome = document.querySelector('.home');
    function createCircle (heigh, width){
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // svg.setAttribute('width', '1200px');
        // svg.setAttribute('height', '600px');
        let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let radius = 0;
        if(heigh > width){
            radius = heigh/2;
        } else {
            radius = width/2
        }
         
        circle.setAttribute('cx', `${heigh+(width-heigh)/2}`);
        circle.setAttribute('cy', `${width+(heigh-width)/2}`);
        circle.setAttribute('r', radius);
        circle.setAttribute('width', '50%')
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 100);
        const lightness = Math.floor(Math.random() * 100);
        circle.setAttribute('fill', `hsl(${hue}, ${saturation}%, ${lightness}%)`);
        svg.appendChild(circle);
        svgSection.appendChild(svg);        
    }
    btn.onclick = function () {
        let height = Number(inputHeight.value);
        let width = Number(inputWidth.value);
        console.log(height);
        if(height > 100 || width > 100){
            alert('You entering too big numbers');            
        } else if(height === 0 && width === 0){
            alert('Enter at least one number');
        } else {
            createCircle(height, width);
        }
        
    }
    btnHome.onclick = function(){

    }
};