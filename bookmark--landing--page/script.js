'use strict'

const section2Btn = document.querySelectorAll('.section__2__btn')
const section2BtnCon = document.querySelector('.section__2__btn__con')
const section2Img = document.querySelector('.section__2__img')

section2BtnCon.addEventListener('click', function(e){
    const target = e.target
    if(target.classList.contains('section__2__btn')){
        section2Btn.forEach(el => el.classList.remove('section__2__btn__active'))
        target.classList.add('section__2__btn__active')
        console.log(target.dataset.img);
        const dataSet = target.dataset.img;
        console.log(dataSet);
        if( dataSet === '1'){
            section2Img.src='images/illustration-features-tab-1.svg';
            section2Img.alt = 'illustration-features-tab-1'
        }else if (dataSet === '2'){
            section2Img.src= 'images/illustration-features-tab-2.svg';
            section2Img.alt = 'illustration-features-tab-2'
        }else{
            section2Img.src= 'images/illustration-features-tab-3.svg';
            section2Img.alt = 'illustration-features-tab-3'
        }
    }
})