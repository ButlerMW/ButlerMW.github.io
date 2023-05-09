
const text = [
    "I am a recent graduate with a second degree in Computer Science and have passion for all things technology and computing.",
    "Throughout my career path, I have demonstrated a commitment to excellence, constantly pushing myself to learn, grow, and develop new skills in all sorts of fields in land surveying, IT, Cybersecurity, as well as Software Development. ",
    "In addition to myprofessional pursuits, I am an foody, spending my free time cooking in the kitchen and trying new dishes. I also enjoy outdoor activities such hiking, running, biking, and playing fetch with my dog. ",
    "I am commited to building personal projects to help me advance my career with learning new languages and tools. I am excited to continue on my journey in the Computer Science realm, always striving to learn, grow, and make a meaningful impact."
];

renderAbout();

function renderAbout() {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    
    div1.appendChild(div2);
    div1.setAttribute('class', 'pages');
    div1.setAttribute('hidden', 'hidden');
    
    for(let i = 0; i < text.length; i++) {
        const p = document.createElement('p');
        const content = document.createTextNode(text[i]);
        div2.appendChild(p);
        p.appendChild(content);
    }
    
    const script = document.getElementsByTagName('script');
    document.body.insertBefore(div1, script[0]);
}

