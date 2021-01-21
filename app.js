window.addEventListener("scroll",function(){
    const activeLink = document.querySelector(".active-link");
    const nav = document.querySelector("nav");
    activeLink.classList.add("scrolled-link");
    activeLink.classList.remove(".active-link");
    nav.classList.add("scrolled-nav");
})