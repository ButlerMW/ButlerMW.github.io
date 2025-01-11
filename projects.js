const projects = [
    {
        title: "Kouzina",
        img: "kouzina-logo.png",
        desc: "Kouzina roughly translated from the greek word meaning \"Kitchen\", is an ongoing cookbook-like project. Where you can add your favorite recipes to a collected database. Search for new recipes with items from your kitchen.",
        link: null,
        tools: [".Net", "C#", "JavaScript", "SQLite", "GitHub", "VSCode"],
    },
    {
        title: "PivotPro",
        img: "PivotProLogo.jpeg",
        desc: "A recent and severe drought in Idaho has renewed calls for the efficient use of water resources. The goal is to help Idaho farms analyze and optimize crop water usage saving up to 30% of water. This project aims to create a modern web interface to automate, connect to, and collect telemetry data from sensors in the field and make it available to a front-end web interface, allowing farms across Idaho to generate graphs, reports, and visualizations from the data.",
        link: "https://sdp.boisestate.edu/s23-stone-cold-potatoes/project/",
        tools: ["Django", "Python", "AG Grid", "ChartJS", "JavaScript", "Materialize", "SQLite", "Docker", "GitHub", "VSCode"],
    },
    {
        title: "Cards Against Mad Libs",
        img: "Cards-Against-MadLibs-background.jpg",
        desc: "A card web game that is a mix of the classic card game and a popular ad-lib. Multiple players can connect to play a timed round with a voting mechanism.",
        link: "https://github.com/ButlerMW/CSharp-CardsAgainstMabLibs",
        tools: [".Net Core", "C#", "JQuery", "JavaScript", "BootStrap", "SignalR", "MySQL", "GitHub", "VSCode"],
    },
    {
        title: "Creighton Contracting LLC",
        img: "Creighton-Contracting-Logo.png",
        desc: "Website for an Idaho Construction Company. Creighton Contracting was established in 2017, providing excellent site work, including all underground, grading, and paving with efficiency and accuracy.",
        link: "https://www.creightoncontracting.com/",
        tools: ["Gatsby", "JQuery", "JavaScript", "SCSS", "GitHub", "VSCode"],
    },
    {
        title: "Interpreter Project",
        img: "Interpreter-code-sample.png",
        desc: "Executes source code by translating it into machine-readable instructions and directly executing them, using scanner and recursive parser that builds a Context Free Grammar (CFG) parse tree.",
        link: null,
        tools: ["Python", "Git Bash", "VSCode"],
    },
];


renderProjects();

function renderProjects() {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    
    div1.appendChild(div2);
    div1.setAttribute('class', 'pages container');
    div2.setAttribute('class', 'card-container');
    
    for(let i = 0; i < projects.length; i++) {
        const card = document.createElement("div");
        const img = document.createElement('img');
        card.appendChild(img);
        card.setAttribute('class', 'card');
        img.setAttribute('src', '/images/' + projects[i].img)
        img.setAttribute('alt', projects[i].img)
        img.setAttribute('class', 'card-img')
        
        const cardInfo = document.createElement("div");
        cardInfo.setAttribute('class', 'card-info');
        card.appendChild(cardInfo);

        const h3 = document.createElement('h3');
        let p = document.createElement('p');
        
        const tools = projects[i].tools;

        div2.appendChild(card);
        cardInfo.appendChild(h3);
        h3.appendChild(document.createTextNode(projects[i].title));
        cardInfo.appendChild(p);
        p.appendChild(document.createTextNode(projects[i].desc));
        
        ul = document.createElement('ul');
        ul.setAttribute('class', 'tool-list');
        cardInfo.appendChild(ul);
        for(let j = 0; j < tools.length; j++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'tool-item');
            p = document.createElement('p');
            p.appendChild(document.createTextNode(tools[j]));
            li.appendChild(p);
            ul.appendChild(li);
        }
        
        if(projects[i].link != null) {
            const a = document.createElement('a');
            a.setAttribute('href', projects[i].link);
            a.setAttribute('target', '_blank');
            a.setAttribute('class', 'learn-more');
            a.appendChild(document.createTextNode("More Details"));
            cardInfo.appendChild(a);
        }

    }
    
    const location = document.getElementById('projects');
    document.body.insertBefore(div1, location);
}
