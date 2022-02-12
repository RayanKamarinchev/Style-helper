/* <div class="color-picker">
                    <label for="red">Red (0 to 255)</label>
                    <input onchange="OnColorPick()" type="range" id="red-color" name="red" min="0" max="255" value="0"> <p id="red-value">Red: 0</p>
                    <label for="green">Green (0 to 255)</label>
                    <input onchange="OnColorPick()" type="range" id="green-color" name="green" min="0" max="255" value="58"> <p id="green-value">Green: 58</p>
                    <label for="blue">Blue (0 to 255)</label>
                    <input onchange="OnColorPick()" type="range" id="blue-color" name="blue" min="0" max="255" value="67"> <p id="blue-value">Blue: 67</p>
                </div> */

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
    var css = `#object{ background-color: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}}`;
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



/* <label for="selection"><small class="class">border-style</small>: </label>
<select onchange="OnBorderSelect()" class="custom-select" id="selection">
<option value="solid">solid</option>
<option value="dashed">dashed</option>
<option value="dotted">dotted</option>
<option value="double">double</option>
<option value="ridge">ridge</option>
<option value="groove">groove</option>
    <option value="outset">outset</option>
    <option value="inset">inset</option>
    </select> <br><br>
    <label for="input"><small class="class">border-width</small>: </label>
    <input onchange="OnBorderWidthInput()" type="number" class="custom-input" id="width-input"> <br><br>
    <label for="input"><small class="class">border-radius</small>: </label>
    <input onchange="OnBorderRadiusInput()" type="number" class="custom-input" id="radius-input"> <br><br>
    <div class="color-picker">
    <label for="red">Red (0 to 255)</label>
    <input onchange="OnColorChange()" type="range" id="red" name="red" min="0" max="255" value="0"> <p id="red-value">Red: 0</p>
    <label for="green">Red (0 to 255)</label>
    <input onchange="OnColorChange()" type="range" id="green" name="green" min="0" max="255" value="58"> <p id="green-value">Green: 58</p>
    <label for="blue">Red (0 to 255)</label>
    <input onchange="OnColorChange()" type="range" id="blue" name="blue" min="0" max="255" value="67"> <p id="blue-value">Blue: 67</p>
    </div>
    </div>
    <div class="image-box">
    <div id="object" class="object">
    
    </div>
    </div> */
    function OnBorderColorPick() {
        const red = document.getElementById("border-red");
        const green = document.getElementById("border-green");
        const blue = document.getElementById("border-blue");
        const redNum = document.getElementById("red-border-value");
        const greenNum = document.getElementById("green-border-value");
        const blueNum = document.getElementById("blue-border-value");
        const imageElement = document.getElementById("object");
        const colorDisplayer = document.getElementById("color-display");
        colorDisplayer.innerText=`Border color code: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
        redNum.innerText = `Red: ${red.value}`
        greenNum.innerText = `Green: ${green.value}`
        blueNum.innerText = `Blue: ${blue.value}`
        imageElement.style.borderColor =`rgb(${red.value}, ${green.value}, ${blue.value})` 
        
    }
    
    function OnBorderSelect() {
        const chnageable = document.getElementById("object");
        const selection = document.getElementById("selection");
    chnageable.style.borderStyle = `${selection.value}`;
}

function OnBorderWidthInput() {
    const chnageable = document.getElementById("object");
    const input = document.getElementById("width-input");
    chnageable.style.borderWidth = `${input.value}px`;
}

function OnBorderRadiusInput() {
    const chnageable = document.getElementById("object");
    const input = document.getElementById("radius-input");
    chnageable.style.borderRadius = `${input.value}px`;
}

/* <div class="color-picker">
                    <label for="red">Red (0 to 255)</label>
                    <input onchange="OnHoverColor()" type="range" id="hover-red" name="red" min="0" max="255" value="0"> <p id="red-value">Red: 0</p>
                    <label for="green">Green (0 to 255)</label>
                    <input onchange="OnHoverColor()" type="range" id="hover-green" name="green" min="0" max="255" value="58"> <p id="green-value">Green: 58</p>
                    <label for="blue">Blue (0 to 255)</label>
                    <input onchange="OnHoverColor()" type="range" id="hover-blue" name="blue" min="0" max="255" value="67"> <p id="blue-value">Blue: 67</p>
                </div>
                <p id="color-display">Color code on hover: #808080</p> */
function OnHoverColor() {
    const red = document.getElementById("hover-red");
    const green = document.getElementById("hover-green");
    const blue = document.getElementById("hover-blue");
    const redNum = document.getElementById("red-hover-value");
    const greenNum = document.getElementById("green-hover-value");
    const blueNum = document.getElementById("blue-hover-value");
    const colorDisplayer = document.getElementById("color-hover-display");
    colorDisplayer.innerText=`Color code on hover: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    var css = `#object:hover{ background-color: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}

/* <label for="input"><small class="class">opacity</small>: </label>
                <input onchange="OnHoverOpacity()" type="number" class="custom-input" id="opcity-hover-input"> <br><br></br> */
function OnHoverOpacity() {
    const input = document.getElementById("opcity-hover-input").value;
    var css = `#object:hover{ opacity: ${input}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}

function OnActiveOpacity() {
    const input = document.getElementById("opcity-active-input").value;
    var css = `#object:active{ opacity: ${input}}`;
    var style = document.createElement('style');
    
    if (style.styleSheet) {
    style.styleSheet.cssText = css;
    } else {
    style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);
}

/* <div class="color-picker">
                            <label for="red">Red (0 to 255)</label>
                            <input onchange="OnBorderColorPick()" type="range" id="border-red" name="red" min="0" max="255" value="0"> <p id="red-border-value">Red: 0</p>
                            <label for="green">Green (0 to 255)</label>
                            <input onchange="OnBorderColorPick()" type="range" id="border-green" name="green" min="0" max="255" value="58"> <p id="green-border-value">Green: 58</p>
                            <label for="blue">Blue (0 to 255)</label>
                            <input onchange="OnBorderColorPick()" type="range" id="border-blue" name="blue" min="0" max="255" value="67"> <p id="blue-border-value">Blue: 67</p>
                        </div> */

/* <label for="family-selector"><small class="class">font-family</Small>: </label>
                  <select onchange="OnFontFamillyChange()" class="custom-select" id="family-selection">
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="cursive">Cursive</option>
                    <option value="fantasy">Fantasy</option>
                  </select><br><br>
                  <label for="style-selector"><small class="class">font-style</Small>: </label>
                    <select onchange="OnFontStyleChange()" class="custom-select" id="style-selection">
                      <option value="normal">Normal</option>
                      <option value="italic">Italic</option>
                    </select><br><br>
                  <label for="weight-selection"><small class="class">font-weight</Small>: </label>
                  <select onchange="OnFontWeidhtChange()" class="custom-select" id="weight-selection">
                    <option value="normal">Normal</option>
                    <option value="bold">Bold</option>
                  </select><br><br>
                  <label for="input"><small class="class">font-size</small>: </label>
                  <input value="20" onchange="OnFontSizeChange()" type="number" class="custom-input" id="font-size-selection"> <br><br>   */
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