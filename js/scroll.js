document.querySelectorAll('a[href^="#"]').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - (window.innerHeight / 2) + (targetElement.clientHeight / 2);

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth" 
            });
        }
    });
});