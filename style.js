const styles = { 
    "*": {
        "font-family": "'Lato', sans-serif;",
    },
    "html, body": {
        "height": "100%;",
        "margin": "0;",
    },
    "body": {
        "background-color": "#E7E7E7;",
        "background-image": "url(Eagle_Idaho_Autumn.jpg);",
        "-webkit-background-size": "cover;",
        "-moz-background-size": "cover;",
        "-o-background-size": "cover;",
        "background-size": "cover;",
        "background-repeat": "no-repeat",
    },
    "#title": {
        "background-color": "#404040;",
        "letter-spacing": "10px;",
        "color": "white;",
        "padding": "10px 0px 10px 10px;",
        "border-radius": "5px;",
    },
    "nav": {
        "display": "flex;",
        "align-items": "center;",
        "justify-content": "center",
    },
    "#navbar a": {
        "padding": "16px 32px;",
        "text-decoration": "none;",
        "color": "#404040",
    },
    "#navbar a:hover": {
        "background-color": "rgb(200,200,200,0.5)",
    },
    "div": {
        "height": "93%;",
    },
    "div div": {
        "display": "flex;",
        "flex-direction": "column;",
        "align-items": "center;",
        "justify-content": "center",
    },
    "p": {
        "width": "80%;"
    }
}

const newStyle = document.createElement('style');
const nav = document.querySelector("nav");
newStyle.setAttribute("type", "text/css");
newStyle.appendChild(document.createTextNode(renderCSS()));

document.body.insertBefore(newStyle, nav);

function renderCSS() {
    var css = [];
    for (let i in styles) {
        let style = i + " {";

        for (let j in styles[i]) {
            style += j + ":" + styles[i][j];
        }

        style += "}";

        css.push(style);
    }

    return css.join("\n");
}