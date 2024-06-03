let frutas = ['Maça','Banana','Abacate','Morango','Melancia','Mamão','Melão'];
frutasDeliciosas = [];
novoIndice = 0;

function selecionarFrutas(item, indice){
    if(frutas[indice].indexOf('M') == 0) {
        frutasDeliciosas[novoIndice] = frutas[indice];
        novoIndice++;
    }
}
frutas.forEach(selecionarFrutas);

console.log(frutasDeliciosas);