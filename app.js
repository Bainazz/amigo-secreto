
let amigo=[];

function adicionarAmigo() {
let inputAmigo=document.getElementById("amigo");
let nomeAmigo=inputAmigo.value.trim();

    if (!nomeAmigo){
        alert("Antes de continuar, digite um nome o/ !");}
    else if(amigo.includes(nomeAmigo)){
        alert ("Opa, esse nome já tá na lista, tente outro !");
        return}

    else{ amigo.push(nomeAmigo)}
    atualizarListaAmigos();
    inputAmigo.value="";}


function atualizarListaAmigos() {
let listaAmigos=document.getElementById("listaAmigos");
listaAmigos.innerHTML="";       

amigo.forEach(nome => {
    let li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);
});

}


function sortearAmigo() {

        if (amigo.length === 0) { 
        resultado.textContent = "Sem participantes suficientes, reinicie o jogo!";
        return; }
    
        let indiceSorteado = Math.floor(Math.random() * amigo.length);
        let amigoSorteado = amigo[indiceSorteado];

        amigo.splice(indiceSorteado, 1);
        atualizarListaAmigos();

        resultado.textContent= `Pessoa sorteada: ${amigoSorteado} !`;
        shoot();    
    };
        



function novoSorteio() {
let resultado=document.getElementById("resultado");
resultado.textContent="";
amigo=[];
atualizarListaAmigos();
alert("Todos foram removidos da lista do sorteio !");
}

    


    
