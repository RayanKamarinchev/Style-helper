function OnSelect() {
    const chnageable = document.getElementById("border-chnager-example");
    const selection = document.getElementById("selection");
    chnageable.style.borderStyle = `${selection.value}`;
}

function OnInput() {
    const chnageable = document.getElementById("border-chnager-example");
    const input = document.getElementById("input");
    console.log(input.value)
    chnageable.style.borderWidth = `${input.value}px`;
}

function OnChange() {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redNum = document.getElementById("red-value");
    const greenNum = document.getElementById("green-value");
    const blueNum = document.getElementById("blue-value");
    const imageElement = document.getElementById("border-chnager-example");
    console.log({imageElement})
    redNum.innerText = `Red: ${red.value}`
    greenNum.innerText = `Green: ${green.value}`
    blueNum.innerText = `Blue: ${blue.value}`
    imageElement.style.borderColor =`rgb(${red.value}, ${green.value}, ${blue.value})` 
}

function decToHexa(n)
{
    // char array to store hexadecimal number
    let hexaDeciNum = Array.from({length: 2}, (_, i) => 0);
    
    // counter for hexadecimal number array
    let i = 0;
    while (n != 0) {
    
        // temporary variable to store remainder
        let temp = 0;
    
        // storing remainder in temp variable.
        temp = n % 16;
    
        // check if temp < 10
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
    
    // Return the equivalent
    // hexadecimal color code
    return hexCode;
}