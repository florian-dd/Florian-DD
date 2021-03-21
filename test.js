"use strict"

window.addEventListener("load", Initialize);

var botje;
var textvak;
var isEnabled;

function Initialize(){
    botje = document.getElementById("btnBotje");
    textvak = document.getElementById("TextVak");
    isEnabled = false;

    botje.addEventListener("click", () => {
        if (isEnabled){
            textvak.innerHTML = "De website van Florian";
            isEnabled = false;
        } 
        else{
            textvak.innerHTML = "De website van Marco";
            isEnabled = true;
        } 
    })
}