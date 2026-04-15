const { createContext } = require("react");

let idades = [18, 20, 25];
console.log(idades)

idades.push(25)
console.log(idades)

idades.pop()
console.log(idades)

console.log(idades[0])
console.log(idades[1])
console.log(idades.length)

var retangulo_1 = {
    x: 10,
    y: 10,
    w: 5, 
    h: 50,
    color: "green"
};
var retangulo_2 = {
    x: 10,
    y: 10,
    w: 5, 
    h: 50,
    color: "yellow"
}

console.log(retangulo_1)

//------------------------------------------------

let canvas = document.getElementById("canvas")
let (ctx) = canvas.getContext("2d")

ctx.beginPath();
ctx.linewidth = 5;
ctx.fillstyle  = "blue";
ctx.strokestyle ="red";
createContext.fillrect (10,10,50,50);
ctx.closePath();