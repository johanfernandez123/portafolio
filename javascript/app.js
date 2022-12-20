const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar")
const links = document.querySelectorAll("#links li a");

links.forEach(element => {
    element.addEventListener("click",linkActivado)
})

function linkActivado(e){
    const desactivarLink = document.querySelector('.active-link');
    desactivarLink.classList.remove('active-link') 
    e.target.classList.add("active-link")
    navBar.classList.toggle("active")
    
}


hamburger.addEventListener("click",() => {
    navBar.classList.toggle("active")
})


