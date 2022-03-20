function ColorChange() {
  // let r = Math.floor(Math.random() * 256);
  // let g = Math.floor(Math.random() * 256);
  // let b = Math.floor(Math.random() * 256);
  // let newTitleColor = `rgb(${r}, ${g}, ${b})`; 
  document.getElementById("title").style.color = RandomColorizer();

  // r = Math.floor(Math.random() * 256);
  // g = Math.floor(Math.random() * 256);
  // b = Math.floor(Math.random() * 256);
  // let newButtonColor = `rgb(${r}, ${g}, ${b})`; 
  var buttons = document.getElementsByClassName("color-change");
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = RandomColorizer();
    buttons[i].style.color = RandomColorizer();
  }
}

function RandomColorizer() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${r}, ${g}, ${b})`; 
  
  return randomColor;
}