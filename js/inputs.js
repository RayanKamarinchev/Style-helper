function OnBorderColorPick() {
    const red = document.getElementById("border-red");
    const green = document.getElementById("border-green");
    const blue = document.getElementById("border-blue");
    const redNum = document.getElementById("red-border-value");
    const greenNum = document.getElementById("green-border-value");
    const blueNum = document.getElementById("blue-border-value");
    const colorDisplayer = document.getElementById("color-border-display");
    const chnageable = document.getElementById("put");
    colorDisplayer.innerText=`Border color code: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put{ border-color: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}}`;
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
chnageable.style.borderStyle = `${selection.value}`;
}

function OnBorderWidthInput() {
const chnageable = document.getElementById("put");
const input = document.getElementById("width-input");
chnageable.style.borderWidth = `${input.value}px`;
}

function OnBorderRadiusInput() {
const chnageable = document.getElementById("put");
const input = document.getElementById("radius-input");
chnageable.style.borderRadius = `${input.value}px`;
}

function OnFontFamillyChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("family-selection")
    editable.style.fontFamily = `${selection.value}`
}

function OnFontStyleChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("style-selection")
    editable.style.fontStyle = `${selection.value}`
}

function OnFontWeidhtChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("weight-selection")
    editable.style.fontWeight = `${selection.value}`
}

function OnFontSizeChange() {
    const editable = document.getElementsByClassName("centered")[0]
    const selection = document.getElementById("font-size-selection")
    editable.style.fontSize = `${selection.value}px`
}

function OnColorPick() {
    const red = document.getElementById("red-color");
    const green = document.getElementById("green-color");
    const blue = document.getElementById("blue-color");
    const redNum = document.getElementById("red-value");
    const greenNum = document.getElementById("green-value");
    const blueNum = document.getElementById("blue-value");
    const colorDisplayer = document.getElementById("color-display");
    colorDisplayer.innerText=`Color code: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put{ background-color: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}

function decToHexa(n)
{
    let hexaDeciNum = Array.from({length: 2}, (_, i) => 0);
    let i = 0;
    while (n != 0) {
        let temp = 0;
        temp = n % 16;
        if (temp < 10) {
            hexaDeciNum[i] = String.fromCharCode(temp + 48);
            i++;
        }
        else {
            hexaDeciNum[i] =  String.fromCharCode(temp + 55);
            i++;
        }
        n = Math.floor(n / 16);
    }
    let hexCode = "";
    if (i == 2) {
        hexCode+=hexaDeciNum[0];
        hexCode+=hexaDeciNum[1];
    }
    else if (i == 1) {
        hexCode = "0";
        hexCode+=hexaDeciNum[0];
    }
    else if (i == 0)
    hexCode = "00";
    return hexCode;
}

//code
function OnBorderFocusColorPick() {
    const red = document.getElementById("focus-border-red");
    const green = document.getElementById("focus-border-green");
    const blue = document.getElementById("focus-border-blue");
    const redNum = document.getElementById("focus-red-border-value");
    const greenNum = document.getElementById("focus-green-border-value");
    const blueNum = document.getElementById("focus-blue-border-value");
    const colorDisplayer = document.getElementById("focus-color-border-display");
    colorDisplayer.innerText=`Border color code on focus: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put:focus{ border-color: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}}`;
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
    const colorDisplayer = document.getElementById("focus-color-display");
    colorDisplayer.innerText=`Color code on focus: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#put:focus{ background-color: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}