
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
      break;
    case 'About':
      aTag.setAttribute('onclick', 'getPage("about")');
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

  const pages = document.getElementsByClassName('pages');
  var index = -1;

  switch(link) {
    case 'home':
      document.body.style.backgroundImage = 'url(Eagle_Idaho_Autumn.jpg)';
      index = 0;
      break;
    case 'about':
      index = 1;
      document.body.style.backgroundImage = 'none';
      break;
    case 'projects':
      index = 2;
      break;
  }
  
  for(let i = 0; i < pages.length; i++) {
    if(i != index) {
      pages[i].setAttribute('hidden', 'hidden');
    } else {
      pages[i].removeAttribute('hidden');
    }
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

  div1.setAttribute('class', 'pages');
  span.setAttribute('id', 'title');
  
  document.body.insertBefore(div1, script[0]);
}

function githubRedirect() {
  if(confirm("You will be redirected to GitHub")){
    location.replace("https://github.com/ButlerMW");
  }
}

