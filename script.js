let farbe;

let rot = document.getElementById('red')
function setred(){
    farbe = "red"
}

let grun = document.getElementById('green')
function setgreen(){
    farbe = "green"
}

const auswahl = [ 'green', 'red' ];
let randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];

let template = document.getElementById('template')
function templatefunction(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template.style.background = randomcolor;
}
let template2 = document.getElementById('template2')
function templatefunction2(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template2.style.background = randomcolor;
}
let template3 = document.getElementById('template3')
function templatefunction3(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template3.style.background = randomcolor;
}




window.onload = templatefunction;
window.onload = templatefunction2;



let color = document.getElementById('button')

function changeColor(){
    color.style.background = farbe;
}
let color2 = document.getElementById('button2')

function changeColor2(){
    color2.style.background = farbe;
}
let color3 = document.getElementById('button3')

function changeColor3(){
    color3.style.background = farbe;
}
let color4 = document.getElementById('button4')

function changeColor4(){
    color4.style.background = farbe;
}
let color5 = document.getElementById('button5')

function changeColor5(){
    color5.style.background = farbe;
}
let color6 = document.getElementById('button6')

function changeColor6(){
    color6.style.background = farbe;
}
let color7 = document.getElementById('button7')

function changeColor7(){
    color7.style.background = farbe;
}
let color8 = document.getElementById('button8')

function changeColor8(){
    color8.style.background = farbe;
}
let color9 = document.getElementById('button9')

function changeColor9(){
    color9.style.background = farbe;
}


