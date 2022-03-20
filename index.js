function colorChange() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let newTitleColor = `rgb(${r}, ${g}, ${b})`; 
  document.getElementById("title").style.color = newTitleColor;

  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  let newButtonColor = `rgb(${r}, ${g}, ${b})`; 
  var buttons = document.getElementsByClassName("link-button");
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = newButtonColor;
  }
}