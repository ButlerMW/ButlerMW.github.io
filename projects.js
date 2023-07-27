
let projects = [
    {
        title: "ButlerMW.github.io",
        desc: "A personal website display personal more personal and professional information.",
        links: [ "https://github.com/ButlerMW/ButlerMW.github.io" ],
        tools: ["JavaScript", "HTML", "GitHub", "VSCode", "Trello"],
        role: "Normally, I would not address this website as a project since it is static web files, " +
                "but I wanted to not this project due to a challenge I create for myself and to answer a " +
                "question \"How can I build a website with using as much JavaScript as possible?\" and here " +
                "is this website. This website is created with multiple JS files, photos, and a single HTML file. :)"
    },
    {
        title: "Cards Against Mad Libs",
        desc: "A card web game that is a mix of the classic card game and a popular ad-lib. Multiple players can connect to play a timed round with a voting mechanism.",
        links: ["https://github.com/ButlerMW/CSharp-CardsAgainstMabLibs" ],
        tools: [".Net Core", "C#", "JQuery", "JavaScript", "BootStrap", "SignalR", "MySQL", "GitHub", "VSCode"],
        role: "This was a partnered project. My main roles was designing the project and working on the database and the front end features. Other responsibilities was assisting and testing the live socket connections."
    },
    {
        title: "PivotPro",
        desc: "Senior Design project with a local sponsor farming company. A recent and severe drought in Idaho has renewed calls for the efficient use of water resources. The goal is to help Idaho farms analyze and optimize crop water usage saving up to 30% of water. This project aimed to create a modern web interface to automate, connect to, and collect telemetry data from sensors in the field and make it available to a front-end web interface, allowing farms across Idaho to generate graphs, reports, and visualizations from the data.",
        links: ["https://sdp.boisestate.edu/s23-stone-cold-potatoes/project/", "https://www.boisestate.edu/coen/senior-design-showcase-brochure/"],
        tools: ["Django", "Python", "AG Grid", "ChartJS", "JavaScript", "Materialize", "SQLite", "Docker", "GitHub", "VSCode"],
        role: "We as a team took the role as full stack engineers to gain expirience all parts of the project as well as rotate specific roles. My main focus on the project was working on the API connection to collect live pivot water data and display in an interactive table. Other tasks involed styling with Materialize, and creating the dashboard."
    },
];


renderProjects();

function renderProjects() {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    div1.appendChild(div2);
    div1.setAttribute('class', 'pages container');
    div1.setAttribute('hidden', 'hidden');
    
    for(let i = 0; i < projects.length; i++) {
        const card = document.createElement("div");
        const h3 = document.createElement('h3');
        let p = document.createElement('p');
        let ul = document.createElement('ul');
        const links = projects[i].links;
        const tools = projects[i].tools;
        const role = document.createTextNode(projects[i].role);

        card.setAttribute('class', 'card');

        div2.appendChild(card);
        card.appendChild(h3);
        h3.appendChild(document.createTextNode(projects[i].title));
        
        card.appendChild(p);
        p.appendChild(document.createTextNode(projects[i].desc));
        
        card.appendChild(ul);
        for(let j = 0; j < links.length; j++) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', links[j]);
            a.appendChild(document.createTextNode(links[j]));
            li.appendChild(a);
            ul.appendChild(li);
        }

        ul = document.createElement('ul');
        ul.setAttribute('class', 'tool-list');
        card.appendChild(ul);
        for(let j = 0; j < tools.length; j++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'tool-item');
            p = document.createElement('p');
            p.appendChild(document.createTextNode(tools[j]));
            li.appendChild(p);
            ul.appendChild(li);
        }

        p = document.createElement('p');
        card.appendChild(p);
        p.appendChild(role);

    }
    
    const script = document.getElementsByTagName('script');
    document.body.insertBefore(div1, script[0]);
}

// window.onwheel = e => {
//     if(e.deltaY >= 0){
//         // Scrolling Down with mouse
//         console.log('Scroll Down');
//         console.log(e.deltaY);
//         document.getElementById('navbar').style.backgroundColor = 'black';
//     } else {
//         document.getElementById('navbar').style.backgroundColor = 'black';
//         // Scrolling Up with mouse
//         console.log('Scroll Up');
//         console.log(e.deltaY);
//     }
//   }
// <!-- First Parallax Image with Logo Text -->
// <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
//   <div class="w3-display-middle" style="white-space:nowrap;">
//     <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MICHAEL BUTLER</span>
//   </div>
// </div>
// const div1 = document.createElement("div");
// const div2 = document.createElement("div");
// const span = document.createElement("span")
// const script = document.getElementsByTagName('script');
// const content = document.createTextNode("MICHAEL BUTLER");

// div1.appendChild(div2);
// div2.appendChild(span);
// span.appendChild(content);

// div1.setAttribute('class', 'pages');
// span.setAttribute('id', 'title');

// document.body.insertBefore(div1, script[0]);