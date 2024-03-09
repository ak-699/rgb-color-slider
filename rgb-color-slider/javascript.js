const copyButton = document.getElementById("copy-color");

const rColor = document.getElementById("color-red");
const gColor = document.getElementById("color-green");
const bColor = document.getElementById("color-blue");

const resultColor = document.getElementById("rgb-color");
const container = document.getElementById("container");


let red = rColor.value;
let green = gColor.value;
let blue = bColor.value;

resultColor.value = `rgb(${red},${green},${blue})`;

rColor.addEventListener("input",()=>{
    red = rColor.value;
    resultColor.value = `rgb(${red},${green},${blue})`;
    container.style.backgroundColor= resultColor.value;
})
gColor.addEventListener("input",()=>{
    green = gColor.value;
    resultColor.value = `rgb(${red},${green},${blue})`;
    container.style.backgroundColor= resultColor.value;
})
bColor.addEventListener("input",()=>{
    blue= bColor.value;
    resultColor.value = `rgb(${red},${green},${blue})`;
    container.style.backgroundColor= resultColor.value;
})
copyButton.addEventListener("click",()=>{
    console.log("color has been copied")
    resultColor.select();
    navigator.clipboard.writeText(resultColor.value)
    copyButton.innerHTML = "copied!";
    setTimeout(()=>{
        copyButton.innerHTML = "copy color code"
    },1000)
})
window.addEventListener("load",()=>{
    container.style.backgroundColor = resultColor.value;
})

