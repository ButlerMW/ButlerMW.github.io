
renderIntro();

let aTag = document.getElementsByClassName("navLink");
for(let i = 0; i < aTag.length; i++) {
    aTag[i].onclick = () => {
      colorToggle(aTag, i);
      getPage(aTag[i].innerHTML);
  }
}

function colorToggle(list, index) {

  for(let i = 0; i < list.length; i++) {
    if(i == index) {
      list[i].style.color = "rgb(200, 200, 200)";
      list[i].style.fontWeight = 'bold';
    } else {
      list[i].style.color = "#F6C5BE";
      list[i].style.fontWeight = '';
    }
  }
}

function getPage(link) {
  
  const pages = document.getElementsByClassName('pages');
  var index = -1;

  switch(link) {
    case 'Intro':
      index = 0;
      break;
    case 'Education':
      index = 1;
      break;
    case 'Experience':
      index = 2;
      break;
    case 'Projects':
      index = 3;
      break;
    case 'Previous Experience':
      index = 4;
      break;
    case 'Contact':
      index = 5;
      break;
  }

  changePage(index, pages);
}

function changePage(index, pages) {
 
  for(let i = 0; i < pages.length; i++) {
    if(i != index) {
      pages[i].setAttribute('hidden', 'hidden');
    } else {
      pages[i].removeAttribute('hidden');
    }
  }
}

function renderIntro() {
  const sections = document.getElementsByClassName("pages");
  const navLinks = document.getElementsByClassName("navLink");
  navLinks[0].style.color = "rgb(200, 200, 200)";
  navLinks[0].style.fontWeight = 'bold';

  for(let i = 1; i < sections.length; i++) {
    sections[i].setAttribute('hidden', 'hidden');
  }
}

