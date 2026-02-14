document.getElementById("year").textContent = new Date().getFullYear();

  const container = document.querySelector(".shooting-stars");

  function createStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");

    // Random start position (top half of screen)
    star.style.top = Math.random() * window.innerHeight * 0.5 + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    // Random animation duration
    star.style.animationDuration = (2 + Math.random() * 2) + "s";

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 4000);
  }

  // Create a star every 2–4 seconds
  setInterval(() => {
    createStar();
  }, 2000 + Math.random() * 2000);

   const panel = document.getElementById("contactPanel");
  const overlay = document.getElementById("contactOverlay");
  const openBtn = document.getElementById("openContact");
  const closeBtn = document.getElementById("closeContact");

  openBtn.addEventListener("click", () => {
    panel.classList.add("active");
    overlay.classList.add("active");
  });

  function closePanel() {
    panel.classList.remove("active");
    overlay.classList.remove("active");
  }

  closeBtn.addEventListener("click", closePanel);
  overlay.addEventListener("click", closePanel);