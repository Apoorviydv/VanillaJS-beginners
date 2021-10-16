var btnTranslate=document.querySelector("#btn-Translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv=document.querySelector("#Output");
function clickHandler(){
    outputDiv.innerText="ajsjsjsjsjsjjsjsjsj "+ txtInput.value;
};
console.log("outputDiv");
btnTranslate.addEventListener("click",clickHandler)