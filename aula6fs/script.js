document.getElementById("d1").innerHTML = "prof. fagner pimentel";

// let nome = prompt ("digite seu nome");
// let idade = prompt ("difite sua idade");
// let ano = 2026;

// let nasc = ano-idade;

// document.getElementById("resp_ex1").innerHTML = "Olá" + nome + ", seu ano de nascimento é " + nasc;

function mensagem(){
    alert("olá")
};
function mensagem_2(texto){
    alert(texto);
}
mensagem();
mensagem();
mensagem_2("fagner");
mensagem_2("pimentel");

function soma(a,b){return a + b;}
function subt(a,b){return a - b;}
function mult(a,b){return a * b;}
function divs(a,b){return a / b;}
resp = soma(5,56);
// document.getElementById("soma").innerHTML = resp

function exemplo2(){
    let x = parseIntdocument.getElementById("in_ex2").ariaValueMax;
    for (let i = 0; i < x; i++){
        console.log(x+1);
    }
    document .getElementById("resp_ex2").innerHTML = x;
}

function exemplo3(){
let a = parseInt(document.getElementById("in_1_ex3").value);
let b = parseInt(document.getElementById("in_2_ex3").value);

let rep = soma(a,b);

document.getElementById("resp_ex3").innerHTML = resp;

}

function exemplo4(){
    let a = parseInt(document.getElementById("in_1_ex4").value);
    let b = parseInt(document.getElementById("in_2_ex4").value);
}

let resp = 0;
if(a<0||b<0){
    resp = soma (a,b);
}else{
    resp=mult(a,b);
}

document.getElementById("resp_ex4").innerHTML = resp;
