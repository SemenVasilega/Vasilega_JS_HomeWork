window.onload = function() {
    const pizza = [
        {
            'name': 'Margherita',
            'compound': 'Начинка – томаты и сыр. Обычно томаты нарезаны кружочками, сверху всё обильно присыпается зеленью типа орегано или базилика.',
            'priceM': 100,
            'priceL': 120,
            'priceXL': 150,
            'src': 'img/Margherita.jpg'
        },
        {
            'name': 'Marinara',
            'compound': 'Основа – томатный соус, смешанный с чесноком и специями. Начинка — каперсы, оливки, сыр.',
            'priceM': 90,
            'priceL': 110,
            'priceXL': 130,
            'src': 'img/Marinara.jpg'
        },
        {
            'name': 'Carbonara',
            'compound': 'Основа – соус на основе томатного с пармезаном. Начинка — яйца, обжаренный бекон.',
            'priceM': 110,
            'priceL': 130,
            'priceXL': 160,
            'src': 'img/Carbonara.jpg'
        },
    ]

    let body = document.querySelector('body');
    let pizzaName = document.querySelector('.form-select');
    let choosePizza = document.querySelector('.choose-pizza');
    let pizzaSizeBlock = document.querySelector('.pizza-size');
    let pizzaInfo = document.querySelector('.pizza-info');
    let pizzaImageBlock = document.querySelector('.pizza-image');
    let pizzaImage = document.querySelector('.img-fluid');
    let [...pizzaSize] = document.querySelectorAll('.pizza-size input[type=radio]');
    let mainForm = document.querySelector('.main-form');
    let sizeM = document.querySelector('#sizeM');
    let sizeL = document.querySelector('#sizeL');
    let sizeXL = document.querySelector('#sizeXL');
    let additivesBlock = document.querySelector('.additives-block');
    let [...additives] = document.querySelectorAll('.additives-block input[type=checkbox]');
    let priceOnion = document.querySelector('#onion');
    let priceCheeseBoard = document.querySelector('#cheese-board');
    let priceBlock = document.querySelector('.price-block');
    let pizzaPriceWithoutAdditives = document.querySelector('#pizzaPriceWithoutAdditives');
    let pizzaPriceWithAdditives = document.querySelector('#pizzaPriceWithAdditives');
    let quantityBlock = document.querySelector('.quantity-block');
    let quantityInput = document.querySelector('#quantity');
    let btnPreOrder = document.querySelector('.a-btn-pre-order');
    let btnPrimary = document.querySelector('.make-an-order');
    let btnFinalOrder = document.querySelector('.make-final-order');
    // let oBtn = document.querySelector('.btn btn-primary make-an-order');
    let sectionOne = document.querySelector('.section-one');
    let sectionTwo = document.querySelector('.section-two');
    let sectionThree = document.querySelector('.section-three')
    let pizzaPrice = 0;
    let additivesPrice = 0;
    let totalPrice = 0;
    let quantity = 0;
    pizzaInfo.style.display = 'none';
    pizzaSizeBlock.style.display = 'none';
    additivesBlock.style.display = 'none';
    pizzaImageBlock.style.display = 'none';
    priceBlock.style.display = 'none';
    btnPreOrder.style.display = 'none';
    quantityBlock.style.display = 'none';
    btnPrimary.setAttribute('disabled', 'disabled');    
    function changeSelect(){
        // console.log(pizzaName);
        // console.log(pizzaName.value);
        pizza.forEach(element => {
            // console.log(element.name.toLowerCase());
            if (pizzaName.value === element.name.toLowerCase()){                
                pizzaInfo.style.display = 'block';
                pizzaSizeBlock.style.display = 'block';
                additivesBlock.style.display = 'block';
                pizzaImageBlock.style.display = 'block';
                quantityBlock.style.display = 'block';
                priceBlock.style.display = 'block';
                btnPreOrder.style.display = 'block';                
                pizzaInfo.innerHTML = element.compound;
                pizzaImage.src = element.src;                
                for(let i = 0; i < pizzaSize.length; i++){
                    if(pizzaSize[i].checked){
                        if(pizzaSize[i].value === 'sizeM'){
                            // console.log(element.priceM);
                            // console.log(typeof element.priceM);
                            pizzaPrice = element.priceM;                            
                            break;
                        } else if(pizzaSize[i].value === 'sizeL'){                            
                            pizzaPrice = element.priceL;                            
                            break;
                        } else if(pizzaSize[i].value === 'sizeXL'){                            
                            pizzaPrice = element.priceXL;                            
                            break;
                        }
                        // console.log(typeof pizzaSize[i].value)
                        
                    } 
                    
                }
                // console.log(priceOnion);
                // console.log(typeof priceOnion);
                let sumOnion = 0;
                let sumCheeseBoard = 0;
                if(priceOnion.checked){
                    sumOnion = Number(priceOnion.value);
                    // console.log(additivesPrice);
                }                 
                if(priceCheeseBoard.checked){
                    sumCheeseBoard = Number(priceCheeseBoard.value);
                }                 
                additivesPrice = sumOnion + sumCheeseBoard;
                
                quantity = Number(quantityInput.value);
                if (quantity < 1){
                    alert('quantity cannot be less than 1');
                    quantity = 1;
                }        
                
            } else if(pizzaName.value === 'none'){
                // console.log('ERROR');
                pizzaInfo.style.display = 'none';
                pizzaSizeBlock.style.display = 'none';
                additivesBlock.style.display = 'none';
                pizzaImageBlock.style.display = 'none';
                priceBlock.style.display = 'none';
                btnPreOrder.style.display = 'none';
                quantityBlock.style.display = 'none';
                pizzaPrice = 0;
                additivesPrice = 0;
                quantity = 0;
            }
            totalPrice = (pizzaPrice + additivesPrice) * quantity;
            if(pizzaPrice != 0){
                pizzaPriceWithoutAdditives.value = `${pizzaPrice}`;
            } else {                
                pizzaPriceWithoutAdditives.value = 'choose size of pizza';
            }
            if(additivesPrice != 0){
                pizzaPriceWithAdditives.value = totalPrice;
            } else if (additivesPrice === 0 && pizzaPrice === 0){
                pizzaPriceWithAdditives.value = '0';
            } 
            else {pizzaPriceWithAdditives.value = totalPrice;}
                     
            if(pizzaPrice != 0 && quantity >= 1){
                btnPrimary.removeAttribute('disabled');
            }
        });

        let phoneNumber = document.querySelector('#phone-id-input');
        let maskOptions = {
            mask: '+38(000)000-00-00',
            lazy: false
        }
        let mask = new IMask(phoneNumber, maskOptions);
        // console.log(mask);
        // phoneNumber.onblur = function(){
        //     let number = document.querySelector('#phone-id-input').value;
        //     let reg = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        //     if(!reg.test(number)){
        //         alert('Enter a valid phone number (for example: +**(***)***-**-**)');
        //         phoneNumber.style.color = 'red';
        //         return false;
        //     } else{phoneNumber.style.color = 'green';}
        // };
        let errorMasegeName = document.querySelector('.error-name');
        let errorMasegeEmail = document.querySelector('.error-email');
        let email = document.querySelector('#email-id-input');
        // let reg = document.querySelector('#email-id-input').pattern;
        // console.log(email);
        let adress = document.querySelector('#email-id-input').value;
        let attr = 0;
        email.onblur = function (){                   
            
            // console.log(adress);            
            let reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;            
            if(!reg.test(adress)){
                // alert('Enter a valid e-mail adress (for example: ****@****.***)');
                // email.style.color = 'red';
                email.classList.add('invalid');
                // email.setAttribute('name', 'invalid');

                // attr = email.getAttribute('name');
                // console.log(attr);
                // console.log(email.getAttribute('name'));
                // console.log(typeof email.getAttribute('name'));
                errorMasegeEmail.innerHTML = 'Enter a valid e-mail adress (for example: ****@****.***)';
                attr = 1;
                // console.log(attr);
                return false;                
            } else {email.style.color = 'green';}
        }
        // console.log(email);
        email.onfocus = function(){
            if(this.classList.contains('invalid')){
                attr = this.classList.contains('invalid');                
                this.classList.remove('invalid');
                // this.removeAttribute('name');                
                errorMasegeEmail.innerHTML = '';
            }
        }
        let userNameBlock = document.querySelector('#name-id-input');
        let userName = document.querySelector('#name-id-input').value;
        userNameBlock.onblur = function(){
                        
            if(userName === ''){
                userNameBlock.classList.add('invalid');
                errorMasegeName.innerHTML = 'Please, enter you name';
            } else {userNameBlock.style.color = 'green';}
        userNameBlock.onfocus = function(){
            if(this.classList.contains('invalid')){
                this.classList.remove('invalid');                
                errorMasegeName.innerHTML = '';
            }
        }
        }

        
        let namePizza = document.querySelector('.name-pizza-p');
        let pricePizza = document.querySelector('.price-pizza-p');
        let priceAdditivesPizza = document.querySelector('.price-additives-pizza-p');
        let quantityPizza = document.querySelector('.quantity-pizza-p');
        let totalPricePizza = document.querySelector('.total-price-pizza-p');
        // console.log(namePizza);
        let deliveryPrice = document.querySelector('#delivery-price-id');
        
        btnFinalOrder.setAttribute('disabled', 'disabled');
        let priceDelivery = 0;
        let totalPriceFinal = document.querySelector('.total-price-final-div h4');
        namePizza.innerHTML = `Name of pizza - ${pizzaName.value}`;
        pricePizza.innerHTML = `Pizza price - ${pizzaPrice}`;
        priceAdditivesPizza.innerHTML = `Price of additives - ${additivesPrice}`;
        quantityPizza.innerHTML = `Quantity - ${quantity}`;
        totalPricePizza.innerHTML = `Total price without delivery - ${totalPrice}`;
        if(deliveryPrice.checked){
            priceDelivery = Number(deliveryPrice.value);
        }        
        totalPriceFinal.innerHTML = totalPrice + priceDelivery;
        
        
        if(userName != '' && adress != ''){
            btnFinalOrder.removeAttribute('disabled');
        }
        // && phoneNumber.value != '' && email === true
    }
    // console.log(additives);
    changeSelect();
    body.addEventListener('change', changeSelect);
    btnPreOrder.onclick = function(e){
        e.preventDefault();
        sectionOne.style.display = 'none';
        sectionTwo.style.display = 'block';
    }
    btnFinalOrder.onclick = function(e){
        e.preventDefault();
        sectionTwo.style.display = 'none';
        sectionThree.style.display = 'block';
    }
    

    
};


