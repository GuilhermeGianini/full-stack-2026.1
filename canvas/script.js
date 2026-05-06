let idades = [18, 20]
console.log(idades)

idades.push(25)
console.log(idades) 

idades.pop()
console.log(idades)

console.log(idades[0])
console.log(idades.length)

let retangulo1 = {
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    cor: "red"
}

var retangulo2 = {
    x:100,
    y: 100,
    largura: 50,
    altura: 50,
    cor: "blue"
}

console.log(retangulo1)

// ---------------------------------------------------

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,100,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeText("Olá",200,400);
ctx.fillText("Olá",190,400);
ctx.closePath();
