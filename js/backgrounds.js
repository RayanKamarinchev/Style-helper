function OnColorPick() {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redNum = document.getElementById("red-value");
    const greenNum = document.getElementById("green-value");
    const blueNum = document.getElementById("blue-value");
    const imageElement = document.getElementsByClassName("image-box")[0];
    const code = document.getElementById("background-prop");
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    imageElement.style.backgroundColor =`rgb(${red.value}, ${green.value}, ${blue.value})` 
    code.innerText = `#${decToHexa(red.value)}${decToHexa(green.value)}${decToHexa(blue.value)}`
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