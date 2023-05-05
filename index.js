// render the navbar 
const nav = document.querySelector("nav");
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
      break;
    case 'About':
      aTag.setAttribute('onclick', 'getPage("about")');
      break;
    case 'Projects':
      aTag.setAttribute('onclick', 'getPage("projects")');
      break;
    case 'GitHub':
      aTag.setAttribute('onclick', 'gitHubRedirect()');
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
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("home!");
  newDiv.appendChild(newContent);
  
  const script = document.getElementsByTagName('script');
  document.body.insertBefore(newDiv, script[0]);
}

function gitHubRedirect() {
  if(confirm("You will be redirected to GitHub")){
    location.replace("https://github.com/ButlerMW");
  }
}
