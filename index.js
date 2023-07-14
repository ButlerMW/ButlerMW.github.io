
renderHome();
nav.setAttribute('id', 'navbar');
const navLinks = ['Home','About','Projects','GitHub'];

for(let i = 0; i < navLinks.length; i++) {
  let aTag = document.createElement("a");
  aTag.setAttribute('href', '#');
  let aTagContent = document.createTextNode(navLinks[i]);
  aTag.appendChild(aTagContent);
  nav.appendChild(aTag);

  aTag.onclick = () => {
    getPage(navLinks[i]);
  }
}

var op = 0.01;  // initial opacity
var timer = setInterval(function () {
  if (op >= 1) {
    clearInterval(timer);
  }
  nav.style.opacity = op;
  op += op * 0.1;
}, 30);

function getPage(link) {

  const pages = document.getElementsByClassName('pages');
  var index = -1;

  switch(link) {
    case 'Home':
      index = 0;
      break;
    case 'About':
      index = 1;
      break;
    case 'Projects':
      index = 2;
      break;
    case 'GitHub':
      githubRedirect();
      return;
  }
      
  if(index > 0) {
    var spacing = 10;  // initial opacity
    var op = 1;
    var fontsize = 16;
    var timer = setInterval(function () {
      if (spacing >= 50) {
        clearInterval(timer);
      }
      document.getElementById('title').style.opacity = op;
      document.getElementById('title').style.letterSpacing = spacing + "px";
      document.getElementById('title').style.fontSize = fontsize + "px";
      spacing += 1;
      fontsize += 1;
      op -= 0.1;
    }, 50);
  } else {
    var spacing = 50;  // initial opacity
    var op = 0.1;
    var fontsize = 56;
    var timer = setInterval(function () {
      if (spacing <= 10) {
        clearInterval(timer);
      }
      document.getElementById('title').style.opacity = op;
      document.getElementById('title').style.letterSpacing = spacing + "px";
      document.getElementById('title').style.fontSize = fontsize + "px";
      spacing -= 1;
      fontsize -= 1;
      op += 0.1;
    }, 50);

  }

  setTimeout(() => { changePage(index, pages) }, 800);
}

function changePage(index, pages) {
  for(let i = 0; i < pages.length; i++) {
    if(i != index) {
      // var op = 1;  // initial opacity
      // // console.log(op);
      // var timer = setInterval(function () {
      //   if (op = 0) {
      //     clearInterval(timer);
      //   }
      //   pages[i].style.opacity = op;
      //   op -= 0.1;
      // }, 30);
      pages[i].setAttribute('hidden', 'hidden');
    } else {
      pages[i].style.opacity = 0;
      pages[i].removeAttribute('hidden');
      var op = 0.01;  // initial opacity
      var timer = setInterval(function () {
        if (op >= 1) {
          clearInterval(timer);
        }
        pages[i].style.opacity = op;
        op += op * 0.1;
      }, 30);
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

  div1.setAttribute('class', 'pages sizeable');
  div2.setAttribute('class', 'sizeable');
  span.setAttribute('id', 'title');
  
  document.body.insertBefore(div1, script[0]);
}

function githubRedirect() {
  if(confirm("You will be redirected to GitHub")){
    location.replace("https://github.com/ButlerMW");
  }
}

