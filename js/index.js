window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 0) {
        navbar.style.opacity = this.window.scrollY / 100;
    } else {
        navbar.style.opacity = 0;
    }
});