'use strict'

const section2Btn = document.querySelectorAll('.section__2__btn')
const section2BtnCon = document.querySelector('.section__2__btn__con')
const section2Img = document.querySelector('.section__2__img')
const section2Right = document.querySelectorAll('.section__2__right')
const section2BoxCon = document.querySelectorAll('.section__2__box__con')
const section4BoxCon = document.querySelectorAll('.section__4__box__con')
const boxP = document.querySelector('.box__p')

section2BtnCon.addEventListener('click', function(e){
    const target = e.target;
    if(target.classList.contains('section__2__btn')){
        section2Btn.forEach(el => el.classList.remove('section__2__btn__active'));
        target.classList.add('section__2__btn__active');
        const dataSet = target.dataset.img;
        section2Right.forEach(el => el.classList.remove('section__2__right__active'));
        section2BoxCon.forEach(el =>  el.classList.remove('section__2__box__con__active'));
        
        if( dataSet === '1'){
            section2Right.forEach(el => el.dataset.text === '1' ? el.classList.add('section__2__right__active') : console.log(`yes`));
            section2BoxCon.forEach(el => el.dataset.img === '1' ? el.classList.add('section__2__box__con__active') : console.log(`yes`));
        }else if (dataSet === '2'){
            section2Right.forEach(el => el.dataset.text === '2' ? el.classList.add('section__2__right__active') : console.log(`yes`));
            section2BoxCon.forEach(el => el.dataset.img === '2' ? el.classList.add('section__2__box__con__active') : console.log(`yes`));
        }else{
            section2Right.forEach(el => el.dataset.text === '3' ? el.classList.add('section__2__right__active') : console.log(`yes`));
            section2BoxCon.forEach(el => el.dataset.img === '3' ? el.classList.add('section__2__box__con__active') : console.log(`yes`));
        }
    }
})

section4BoxCon.forEach(el => {
    el.addEventListener('click', function(e){
        const target = e.target.closest('.section__4__box');
        target.children[1].classList.toggle('box__p__active');
       const arrow  = target.children[0];
      arrow.children[1].classList.toggle('arrow__active');
      
       
    })
})

    
