let copoVerde = document.querySelector("#copoVerde");
let copoRosa = document.querySelector("#copoRosa");
let copoRoxo = document.querySelector("#copoRoxo");

let imgTroca = document.querySelector("#imgTroca");

let circuloCopo = document.querySelector("#circuloCopo");

let btnSaibaMais = document.querySelector("#btnSaibaMais");

let spanSatarBucks = document.querySelector("#spanSatarBucks");


function trocarImagemVerde(){
    imgTroca.src = "./img/img1.png"
    circuloCopo.style.backgroundColor = "#017143";
    circuloCopo.style.transition = "0.5s";
    btnSaibaMais.style.cssText = "background-color: white; color: #017143;"
    spanSatarBucks.style.color = "white";

}

function trocarImagemRosa(){
    imgTroca.src = "./img/img2.png"
    circuloCopo.style.backgroundColor = "#E7CCCA";
    circuloCopo.style.transition = "0.5s";
    btnSaibaMais.style.cssText = "background-color: 017143; color: 017143;"
    spanSatarBucks.style.color = "#017143";
}


function trocarImagemRoxo(){
    imgTroca.src = "./img/img3.png"
    circuloCopo.style.backgroundColor = "#E361BB";
    btnSaibaMais.style.cssText = "background-color: 017143; color: 017143;"
    spanSatarBucks.style.color = "#017143";
}

copoVerde.addEventListener("click", trocarImagemVerde);
copoRosa.addEventListener("click", trocarImagemRosa);
copoRoxo.addEventListener("click", trocarImagemRoxo);

/*
---ALTERAR IMAGEM

Colocamos o id na imagem HTML, depois chamamos o id em uma variavel no JS, logo depois acesamos a propiedade responsavel pela a imagem, que é src.

imgTrocar.src = "Link da nova imagem"

imgTrocar -> Variavel
.src -> a propiedade do elemento pra trocar
 = "" -> dentro das aspas o valor, ou link/direção etc..
*/

/*
---FUNÇOES: Forma pratica

Criar uma função a parte
Chamar essa função no addEventListener

nomeVariavel.addEventListener("evento", função)

Não colocar () dentro do addEventListener!!!!
Chama só o nome da função
*/