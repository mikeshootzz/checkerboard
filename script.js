let farbe;

let rot = document.getElementById('red')
function setred(){
    farbe = "red"
}

let grun = document.getElementById('green')
function setgreen(){
    farbe = "green"
}
const templateArray = [];
const colorArray = new Array(9);

const auswahl = [ 'green', 'red' ];
let randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];


let template = document.getElementById('template')
function templatefunction(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template2 = document.getElementById('template2')
function templatefunction2(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template2.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template3 = document.getElementById('template3')
function templatefunction3(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template3.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template4 = document.getElementById('template4')
function templatefunction4(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template4.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template5 = document.getElementById('template5')
function templatefunction5(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template5.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template6 = document.getElementById('template6')
function templatefunction6(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template6.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template7 = document.getElementById('template7')
function templatefunction7(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template7.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template8 = document.getElementById('template8')
function templatefunction8(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template8.style.background = randomcolor;
    templateArray.push(randomcolor);
}
let template9 = document.getElementById('template9')
function templatefunction9(){
    randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
    template9.style.background = randomcolor;
    templateArray.push(randomcolor);
}

templatefunction();
templatefunction2();
templatefunction3();
templatefunction4();
templatefunction5();
templatefunction6();
templatefunction7();
templatefunction8();
templatefunction9();

let color = document.getElementById('button')

function changeColor(){
    color.style.background = farbe;
    colorArray[0] = farbe;
}
let color2 = document.getElementById('button2')

function changeColor2(){
    color2.style.background = farbe;
    colorArray[1] = farbe;
}
let color3 = document.getElementById('button3')

function changeColor3(){
    color3.style.background = farbe;
    colorArray[2] = farbe;
}
let color4 = document.getElementById('button4')

function changeColor4(){
    color4.style.background = farbe;
    colorArray[3] = farbe;
}
let color5 = document.getElementById('button5')

function changeColor5(){
    color5.style.background = farbe;
    colorArray[4] = farbe;
}
let color6 = document.getElementById('button6')

function changeColor6(){
    color6.style.background = farbe;
    colorArray[5] = farbe;
}
let color7 = document.getElementById('button7')

function changeColor7(){
    color7.style.background = farbe;
    colorArray[6] = farbe;
}
let color8 = document.getElementById('button8')

function changeColor8(){
    color8.style.background = farbe;
    colorArray[7] = farbe;
}
let color9 = document.getElementById('button9')

function changeColor9(){
    color9.style.background = farbe;
    colorArray[8] = farbe;
}

let check = document.getElementById('check')

function checking(){
    let errorCount = 0;
    for (let i = 0; i < templateArray.length; i++) {
        if (templateArray[i] != colorArray[i]) {
            errorCount++;
        }
    }
    alert(`You had ${errorCount} mistakes`)
}


