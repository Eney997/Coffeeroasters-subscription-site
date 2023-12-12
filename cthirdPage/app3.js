const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const barIcon = document.querySelector('.bar') 


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



