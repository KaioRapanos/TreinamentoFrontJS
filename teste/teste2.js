const forma = 'quadro';
const alt = 10;
const comprimento = 14;
let area;

if(forma === 'quadro'){
    area = (alt * comprimento)/2;
}else{
    'é uma forma geometrica';
}

console.log(area);


const calcularSoma = (array) = => {
    let soma = 0;
    array.forEach((elemento) => {
        soma += elemento;
    });
    return soma;
};

const numeros = [1,2,3,4,5];

const resultado = calcularSoma(numeros);
console.log("a soma é", resultado);