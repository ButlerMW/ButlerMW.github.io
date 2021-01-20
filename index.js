function colorChange() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let newColor = `rgb(${r}, ${g}, ${b})`; 
  document.getElementById("title").style.color = newColor;
}