
renderProjects();

function renderProjects() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings projects!");
    newDiv.appendChild(newContent);
    
    newDiv.setAttribute('class', 'pages');
    newDiv.setAttribute('hidden', 'hidden');
    
    const script = document.getElementsByTagName('script');
    document.body.insertBefore(newDiv, script[0]);
}