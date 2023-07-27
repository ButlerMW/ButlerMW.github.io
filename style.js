const styles = { 
    "*": {
        "font-family": "'Lato', sans-serif;",
    },
    "html, body": {
        "height": "100%;",
        "margin": "0;",
    },
    "body": {
        "background-color": "#539D8B;",
        "-webkit-background-size": "cover;",
        "-moz-background-size": "cover;",
        "-o-background-size": "cover;",
        "background-size": "cover;",
        "background-repeat": "no-repeat",
    },
    "#title": {
        "background-color": "#539D8B;",
        "letter-spacing": "10px;",
        "color": "#F6C5BE;",
        "padding": "10px 0px 10px 10px;",
        "border-radius": "5px;",
    },
    "#navbar": {
        "display": "flex;",
        "justify-content": "center;",
        "align-items": "center;",
        "position": "fixed;",
        "top": "0;",
        "width": "100%;",
    },
    "#navbar a": {
        "padding": "16px 32px;",
        "text-decoration": "none;",
        "color": "#F6C5BE;",
    },
    "#navbar a:hover": {
        "background-color": "rgb(200,200,200,0.5)",
    },
    ".sizeable": {
        "height": "93%;",
    },
    ".container": {
        "margin-top": "50px;"
    },
    "div div": {
        "display": "flex;",
        "flex-direction": "column;",
        "align-items": "center;",
        "justify-content": "center",
    },
    ".about-text": {
        "width": "80%;",
    },
    ".card": {
        "width": "70%;",
        "background-color": "#F6C5BE;",
        "margin": "20px;",
        "border-radius": "25px;",
        "padding": "28px;",
    },
    "ul": {
        "list-style-type": "none;",
        "padding-left": "0;",
    },
    ".tool-list": {
        "display": "inline-flex;",
    },
    ".tool-item": {
        "padding": "0 2px 0 2px;",
        "font-weight": "600;",
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