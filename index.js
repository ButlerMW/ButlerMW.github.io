document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});
     



// function ColorChange() {
//   // let r = Math.floor(Math.random() * 256);
//   // let g = Math.floor(Math.random() * 256);
//   // let b = Math.floor(Math.random() * 256);
//   // let newTitleColor = `rgb(${r}, ${g}, ${b})`; 
//   document.getElementById("main").style.backgroundColor = null;

//   document.getElementById("title").style.color = RandomColorizer();

//   // r = Math.floor(Math.random() * 256);
//   // g = Math.floor(Math.random() * 256);
//   // b = Math.floor(Math.random() * 256);
//   // let newButtonColor = `rgb(${r}, ${g}, ${b})`; 
//   var elements = document.getElementsByClassName("color-change");
//   for(var i = 0; i < elements.length; i++) {
//     elements[i].style.backgroundColor = RandomColorizer();
//     elements[i].style.color = RandomColorizer();
//   }
// }

// function RandomColorizer() {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   let randomColor = `rgb(${r}, ${g}, ${b})`; 
  
//   return randomColor;
// }

// function DarkMode() {
//   // document.footer.style.color = "#121212";
//   var elements = document.getElementsByClassName("color-change");
//   for(var i = 0; i < elements.length; i++) {
//     elements[i].style.backgroundColor = RandomColorizer();
//     elements[i].style.color = RandomColorizer();
//   }

//   // document.documentElement.style.setProperty('--ocean-green', '#121212');
//   document.getElementById("container").style.backgroundColor = "#121212";
//   document.getElementById("title").style.color = "#d5f2e3"; 
//   document.getElementById("footer").style.backgroundColor = "#121212"; 
//   // document.body.style.backgroundColor = "#121212";
//   // document.body.style.backgroundImage = null;
//   document.getElementById("main").style.backgroundColor = "#121212";
// }