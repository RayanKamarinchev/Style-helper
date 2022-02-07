const options = {
    skew: "10deg, 30deg",
    scale: "2, 4",
    rotate: "90deg",
    translate: "50px, 100px"
};
function OnSelect() {
    const selector = document.getElementById("selection");
    const textElement = document.getElementsByClassName("transform-example")[0];
    textElement.innerText = options[selector.value];
}

function OnInputChange() {
    const selector = document.getElementById("selection");
    const inputElement = document.getElementById("input-text");
    const image = document.getElementById("transform-example");
    image.style.transform = `${selector.value}(${inputElement.value})`
}