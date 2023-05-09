
renderHome();
nav.setAttribute('id', 'navbar');
const navLinks = ['Home','About','Projects','GitHub'];

for(let i = 0; i < navLinks.length; i++) {
  let aTag = document.createElement("a");
  aTag.setAttribute('href', '#');
  let aTagContent = document.createTextNode(navLinks[i]);
  aTag.appendChild(aTagContent);
  nav.appendChild(aTag);

  switch(navLinks[i]) {
    case 'Home':
      aTag.setAttribute('onclick', 'getPage("home")');
      // aTag.style.color = "white";
      break;
    case 'About':
      aTag.setAttribute('onclick', 'getPage("about")');
      // aTag.style.color = "white";
      break;
    case 'Projects':
      aTag.setAttribute('onclick', 'getPage("projects")');
      break;
    case 'GitHub':
      aTag.setAttribute('onclick', 'githubRedirect()');
      break;
  }
}

function getPage(link) {
  const pages = document.getElementsByTagName("div");

  for(let i = 0; i < pages.length; i++) {
      pages[i].setAttribute('hidden', 'hidden');
  }

  switch(link) {
    case 'home':
      renderHome();
      break;
    case 'about':
      renderAbout();
      break;
    case 'projects':
      renderProjects();
      break;
  }
}

function renderHome() {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const span = document.createElement("span")
  const script = document.getElementsByTagName('script');
  const content = document.createTextNode("MICHAEL BUTLER");
  
  div1.appendChild(div2);
  div2.appendChild(span);
  span.appendChild(content);

  span.setAttribute('id', 'title');
  
  document.body.insertBefore(div1, script[0]);
}

function githubRedirect() {
  if(confirm("You will be redirected to GitHub")){
    location.replace("https://github.com/ButlerMW");
  }
}


// <!-- First Parallax Image with Logo Text -->
// <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
//   <div class="w3-display-middle" style="white-space:nowrap;">
//     <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MICHAEL BUTLER</span>
//   </div>
// </div>