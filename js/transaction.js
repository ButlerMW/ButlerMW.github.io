window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");

    const internalLinks = document.querySelectorAll(
        'a[href]:not([target="_blank"]):not([href^="mailto:"]):not([href^="#"])'
    );

    internalLinks.forEach(link => {
        link.addEventListener("click", event => {

            // Ignore modifier keys
            if (
                event.ctrlKey ||
                event.shiftKey ||
                event.metaKey ||
                event.altKey
            ) {
                return;
            }

            const destination = link.href;

            // Only animate links within this website
            if (link.origin !== window.location.origin) {
                return;
            }

            event.preventDefault();

            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-leaving");

            setTimeout(() => {
                window.location.href = destination;
            }, 350);
        });
    });
});