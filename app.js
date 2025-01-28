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
    let listaResultado = amigos;

    if (listaResultado.length === 0){
        alert("No hay nombres para sortear");
    }
    else{
        let indexRandom = Math.floor(Math.random()*listaResultado.length)
        let amigoSorteado = listaResultado[indexRandom];
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
        listaResuiltado = listaResultado.splice(indexRandom, 1);
        lista.innerHTML = "";
    }
    
}