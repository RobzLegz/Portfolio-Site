window.addEventListener("scroll",function(){
    const activeLink = document.querySelector(".active-link");
    const nav = document.querySelector("nav");
    activeLink.classList.add("scrolled-link");
    activeLink.classList.remove(".active-link");
    nav.classList.add("scrolled-nav");
})

const scrollDown = (endPosition, duration) => {
    var endPosition = document.querySelector(endPosition);
    var targetPosition = endPosition.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distande = targetPosition - startPosition;
    var startTime = null;

    const scrollAnimation = (currentTime) => {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var runAnimation = easeAnimation(timeElapsed, startPosition, distande, duration);
        window.scrollTo(0,runAnimation);
        if(timeElapsed < duration) requestAnimationFrame(scrollAnimation);
    }

    const easeAnimation = (t, b, c, d) => {
        t /= d /2;
        if(t < 1)return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
}

const hireButton = document.querySelector(".hire-button");

hireButton.addEventListener("click", function(){
    scrollDown(".page-footer", 1000);
})