// buttons
let farbe;
let currentColor = document.getElementById('currentColor')
let clicks = 0;

let rot = document.getElementById('red')
function setred(){
    farbe = "red"
    document.getElementById('currentColor').innerHTML=farbe;
    currentColor.style.color = farbe;
}

let grun = document.getElementById('green')
function setgreen(){
    farbe = "green"
    document.getElementById('currentColor').innerHTML=farbe;
    currentColor.style.color = farbe;
}

let purple = document.getElementById('purple')
function setpurple(){
    farbe = "purple"
    document.getElementById('currentColor').innerHTML=farbe;
    currentColor.style.color = farbe;
}

let turquoise = document.getElementById('turquoise')
function setturquoise(){
    farbe = "turquoise"
    document.getElementById('currentColor').innerHTML=farbe;
    currentColor.style.color = farbe;
}

let salmon = document.getElementById('salmon')
function setsalmon(){
    farbe = "salmon"
    document.getElementById('currentColor').innerHTML=farbe;
    currentColor.style.color = farbe;
}

let chocolate = document.getElementById('chocolate')
function setchocolate(){
    farbe = "chocolate"
    document.getElementById('currentColor').innerHTML=farbe;
    currentColor.style.color = farbe;
}

const templateArray = [];
let colorArray;
function othername() {
    let input = document.getElementById("number").value;
    generateTemplate(input);
    generateBoard(input);
    colorArray = new Array(input);
    document.getElementById('number').style.visibility = "hidden";
    document.getElementById('submit').style.visibility = "hidden";
}

const auswahl = [ 'green', 'red', 'turquoise', 'purple', 'chocolate', 'salmon' ];

// gameboard and template generation
let table = document.getElementById('game')
let template = document.getElementById('template')
function generateBoard(size){
    let counter = 0;
    for (let i = 0; i < size; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++){
            let td = document.createElement('td');
            td.id = `${counter}`;
            td.setAttribute("onclick", `colorChange(${counter})`);
            tr.appendChild(td);
            counter++;
        }
        table.appendChild(tr);
    }
}
function colorChange(id){
    let td = document.getElementById(`${id}`);
    td.style.background = farbe;
    colorArray[id] = farbe;
    clicks++;
}


function generateTemplate(size){
    let counter = 1000;
    for (let i = 0; i < size; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++){
            let randomcolor = auswahl[Math.floor(Math.random()*auswahl.length)];
            let td = document.createElement('td');
            td.id = `${counter}`;
            //td.setAttribute("onclick", `colorChange(${counter})`);
            templateArray.push(randomcolor);
            td.style.background = randomcolor;
            tr.appendChild(td);
            counter++;
        }
        template.appendChild(tr);
    }
}

var seconds = 0;
function incrementSeconds() {
    seconds += 1;
}
var cancel = setInterval(incrementSeconds, 1000);
incrementSeconds();

function checking(){
    let errorCount = 0;
    for (let i = 0; i < templateArray.length; i++) {
        if (templateArray[i] != colorArray[i]) {
            errorCount++;
        }
    }
    alert(`You made ${errorCount} mistakes and it took you ${clicks} clicks in ${seconds} seconds`)
    window.location.reload();
}