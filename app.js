window.addEventListener("scroll",function(){
    const activeLink = document.querySelector(".active-link");
    activeLink.classList.add("scrolled-link");
    activeLink.classList.remove(".active-link");
})