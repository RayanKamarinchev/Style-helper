function OnBorderColorPick() {
    const red = document.getElementById("border-red");
    const green = document.getElementById("border-green");
    const blue = document.getElementById("border-blue");
    const redNum = document.getElementById("red-border-value");
    const greenNum = document.getElementById("green-border-value");
    const blueNum = document.getElementById("blue-border-value");
    const code = document.getElementById("border-color-prop")
    code.innerText = `#${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put{ border-color: #${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}
function OnBorderSelect() {
    const chnageable = document.getElementById("put");
    const selection = document.getElementById("selection");
    const code = document.getElementById("border-style-prop")
    code.innerText =  selection.value;
    chnageable.style.borderStyle = `${selection.value}`;
}

function OnBorderWidthInput() {
const chnageable = document.getElementById("put");
const input = document.getElementById("width-input");
const code = document.getElementById("border-width-prop")
    code.innerText =  input.value;
chnageable.style.borderWidth = `${input.value}px`;
}

function OnBorderRadiusInput() {
const chnageable = document.getElementById("put");
const input = document.getElementById("radius-input");
const code = document.getElementById("border-radius-prop")
    code.innerText =  input.value;
chnageable.style.borderRadius = `${input.value}px`;
}

function OnFontFamillyChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("family-selection")
    const code = document.getElementById("font-familly-prop")
    code.innerText =  selection.value;
    editable.style.fontFamily = `${selection.value}`
}

function OnFontStyleChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("style-selection")
    const code = document.getElementById("font-style-prop")
    code.innerText =  selection.value;
    editable.style.fontStyle = `${selection.value}`
}

function OnFontWeidhtChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("weight-selection")
    const code = document.getElementById("font-weight-prop")
    code.innerText =  selection.value;
    editable.style.fontWeight = `${selection.value}`
}

function OnFontSizeChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("font-size-selection")
    const code = document.getElementById("font-size-prop")
    code.innerText =  selection.value;
    editable.style.fontSize = `${selection.value}px`
}

function OnColorPick() {
    const red = document.getElementById("red-color");
    const green = document.getElementById("green-color");
    const blue = document.getElementById("blue-color");
    const redNum = document.getElementById("red-value");
    const greenNum = document.getElementById("green-value");
    const blueNum = document.getElementById("blue-value");
    const code = document.getElementById("color-prop")
    code.innerText =  `#${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}`;
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put{ background-color: #${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}

function decToHexa(number)
{
  return Number(number).toString(16)
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

//code
function OnBorderFocusColorPick() {
    const red = document.getElementById("focus-border-red");
    const green = document.getElementById("focus-border-green");
    const blue = document.getElementById("focus-border-blue");
    const redNum = document.getElementById("focus-red-border-value");
    const greenNum = document.getElementById("focus-green-border-value");
    const blueNum = document.getElementById("focus-blue-border-value");
    const code = document.getElementById("border-color-prop-focus")
    code.innerText =  `#${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}`;
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put:focus{ border-color: #${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}


//code
function OnFocusColorPick() {
    const red = document.getElementById("focus-red");
    const green = document.getElementById("focus-green");
    const blue = document.getElementById("focus-blue");
    const redNum = document.getElementById("focus-red-value");
    const greenNum = document.getElementById("focus-green-value");
    const blueNum = document.getElementById("focus-blue-value");
    const code = document.getElementById("color-prop-focus")
    code.innerText =  `#${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}`;
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put:focus{ background-color: #${pad(decToHexa(red.value))}${pad(decToHexa(green.value))}${pad(decToHexa(blue.value))}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}