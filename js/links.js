function OnLinkColorPick() {
    const red = document.getElementById("red-color");
    const green = document.getElementById("green-color");
    const blue = document.getElementById("blue-color");
    const redNum = document.getElementById("red-value");
    const greenNum = document.getElementById("green-value");
    const blueNum = document.getElementById("blue-value");
    const code = document.getElementById("color-prop");
    code.innerText = `#${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `.centered{ color: #${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}

function OnLinkHoverColor() {
    const red = document.getElementById("hover-red");
    const green = document.getElementById("hover-green");
    const blue = document.getElementById("hover-blue");
    const redNum = document.getElementById("red-hover-value");
    const greenNum = document.getElementById("green-hover-value");
    const blueNum = document.getElementById("blue-hover-value");
    const code = document.getElementById("color-hover-prop");
    code.innerText = `#${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `.centered:hover{ color: #${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}

function OnActive() {
    const red = document.getElementById("active-red");
    const green = document.getElementById("active-green");
    const blue = document.getElementById("active-blue");
    const redNum = document.getElementById("red-active-value");
    const greenNum = document.getElementById("green-active-value");
    const blueNum = document.getElementById("blue-active-value");
    const code = document.getElementById("color-active-prop");
    code.innerText = `#${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `.centered:active{ color: #${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}