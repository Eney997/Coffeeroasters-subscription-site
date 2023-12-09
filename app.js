const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const barIcon = document.querySelector('.bar') 
const openPopup = document.querySelectorAll('[data-modal-target]')
const closePopup = document.querySelectorAll('[data-close-button]')
const blur = document.getElementById('blur')


openPopup.forEach(button => {
    button.addEventListener('click', () => {
        const modalTarget = button.getAttribute('data-modal-target');
        const popup = document.querySelector(modalTarget);
        openmodals(popup);
    });
});


closePopup.forEach(button => {
    button.addEventListener('click', ()=>{
        const popup = button.closest('.popup')
        closemodals(popup)
    })
})


function openmodals(popup) {
    if(popup == null) return
    popup.classList.add('active')
    blur.classList.add('active')
}


function closemodals(popup) {
    if(popup == null) return
    popup.classList.remove('active')
    blur.classList.remove('active')
}


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))


barIcon.onclick = function(){
    document.body.classList.toggle('bar')
    if(document.body.classList.contains('bar')){
        barIcon.src = "/assets/BurgerMenuXicon.svg"
    } else {
        barIcon.src= "/assets/BurgerMenuIcon.svg"
    }
}