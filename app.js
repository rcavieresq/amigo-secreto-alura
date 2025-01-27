// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo');

    if (nombreAmigo.value === ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(nombreAmigo.value);
        mostrarAmigos(amigos);
        nombreAmigo.focus();
    }

    let elementoHTML = document.querySelector('#amigo');
    elementoHTML.value = '';
    return;
}

function mostrarAmigos(x) {
    lista.innerHTML = "";
    largoLista = x.length;

    for (let i = 0; i < x.length;i++) {
        lista.innerHTML += `<li> ${x[i]} `;
    }
    resultado.innerHTML = "";
}

function sortearAmigo(){
    resultado.innerHTML = "";

    if (amigos.length === 0){
        alert("No se han ingresado amigos");
    }
    else{
        let indexRandom = Math.floor(Math.random()*amigos.length)
        console.log (indexRandom);
        let amigoSorteado = amigos[indexRandom];
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        lista.innerHTML = "";
        amigos =[];
    }
    
}