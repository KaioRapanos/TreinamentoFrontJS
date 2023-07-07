const filme = {
    title : 'vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}

somar(10);
function somar(limite){
    let multiplosDe3= 0;
    let multiplosDe5= 0;
    for(i=0; i<= limite; i++){
        if(i % 3 === 0 ){
            multiplosDe3 += i;
        }
        if(i % 5 === 0 ){
            multiplosDe5 += i;
        }
    }
    console.log(multiplosDe3 + multiplosDe5);
}

const array = [70,70,80];

console.log(medidaDoAluno(array));

function medidaDoAluno(notas){
    const media = calcularMedia(notas);

    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A'
}

function calcularMedia(array){
    let soma = 0;
    for(let valor of array){
        soma += nota;
    }
    const media = valor/(array.length);
}

exibirAsteriscos(10);

function exibirAsteriscos(linhas){
    let padrao = '';
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}