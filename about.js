
renderAbout();

function renderAbout() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    
    newDiv.setAttribute('class', 'pages');
    newDiv.setAttribute('hidden', 'hidden');
    
    const script = document.getElementsByTagName('script');
    document.body.insertBefore(newDiv, script[0]);
}


// <!-- First Parallax Image with Logo Text -->
// <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
//   <div class="w3-display-middle" style="white-space:nowrap;">
//     <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MICHAEL BUTLER</span>
//   </div>
// </div>