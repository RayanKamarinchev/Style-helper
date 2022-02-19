const options = {
    radial: "color1 {x%}, color2 {y%}...",
    conic: "color1 {x%}, color2 {y%}...",
    linear: "(direstion), color1 {x%}, color2 {y%}...",
};

function OnColorPick() {
    const red = document.getElementById("red-color");
    const green = document.getElementById("green-color");
    const blue = document.getElementById("blue-color");
    const redNum = document.getElementById("red-value");
    const greenNum = document.getElementById("green-value");
    const blueNum = document.getElementById("blue-value");
    const colorDisplayer = document.getElementById("color-display");
    const changeable = document.getElementById("color-box")
    colorDisplayer.innerText=`Color code: #${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    changeable.style.backgroundColor = `#${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
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
function OnChange() {
    const chnageable = document.getElementsByClassName("image-box")[0];
    const selection = document.getElementById("selection");
    const values = document.getElementById("width-input");
    const transformer = document.getElementsByClassName("transform-example")[0];
    transformer.innerText = options[selection.value];
    chnageable.style.backgroundImage = `${selection.value}-gradient(${values.value})`
}