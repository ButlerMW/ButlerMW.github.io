
function renderProjects() {
    // document.getElementById("about").removeAttribute("hidden");
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings projects!");
    newDiv.appendChild(newContent);
    
    const script = document.getElementsByTagName('script');
    document.body.insertBefore(newDiv, script[0]);
}