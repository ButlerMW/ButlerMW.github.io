
function renderAbout() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    
    const script = document.getElementsByTagName('script');
    document.body.insertBefore(newDiv, script[0]);
}