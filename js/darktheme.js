function DarkMode() {
    // Cache elements to minimize repeated DOM lookups
    let darkModeBtn = document.getElementById("darkmodebtn");
    let navbar = document.getElementById("navbar");
    let body = document.body;
    let hero = document.getElementById("hero");
    let title = document.getElementById("title");
    let bsuSeal = document.getElementById("bsu-seal");
    let aboutMe = document.getElementById("aboutme");
    let education = document.getElementById("education");
    let contact = document.getElementById("contact");
  
    // Toggle 'Dark Theme' / 'Original' button text
    darkModeBtn.innerHTML = darkModeBtn.innerHTML === "Dark Theme" ? "Original Theme" : "Dark Theme";
  
    // Toggle multiple class changes using a loop
    [navbar, hero, body, title, aboutMe, education, contact].forEach(el => { el?.classList.toggle("teal-text"); el?.classList.toggle("white-text"); });
  
    // Toggle navbar colors
    navbar.classList.toggle("teal");
    navbar.classList.toggle("black");
  
    // Toggle background color
    body.classList.toggle("black");
  
    // Toggle background and hero styles
    hero.classList.toggle("dark-hero");
  
    // Image swapping logic
    let lightImages = ["moscow.jpeg", "chicago.jpg", "colorado.jpg", "montana.jpeg"];
    let darkImages = ["greece.jpeg", "nightdrive.jpeg", "lasvegas.jpeg", "boise.jpeg"];
    let images = document.querySelectorAll(".parallax img");
    images.forEach(img => {
        img.classList.toggle("dark-mode");
    });
    images.forEach((img, index) => {
        img.src = "/images/" + img.classList.contains("dark-mode") ? darkImages[index] : lightImages[index];
        img.alt = img.src;
    });
  
    // Toggle BSU logo inversion
    let isDarkMode = bsuSeal.classList.toggle("dark-mode");
    bsuSeal.style.filter = isDarkMode ? "invert(100%)" : "invert(0%)";
  }
  

