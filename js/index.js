const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");
const menuMobileList = document.querySelector(".menu-mobile ul li")
const downCvBtn = document.querySelector('.btn-down')
const hisBtn = document.querySelector('.btn-his')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-xmark')
    menuMobile.classList.toggle('on')
});

menuMobileList.addEventListener('click', () => {
    menuBtn.classList.remove('fa-xmark')
    menuMobile.classList.toggle('on')
    menuMobileList.classList.toggle('menu-active')
})

downCvBtn.addEventListener ('click', () => {
    window.open ('#', '_target')
})

hisBtn.addEventListener ('click', () => {
    window.open ('../pages/sobre-mim.html', '_self')
})

