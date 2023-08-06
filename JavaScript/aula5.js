//FizzBuzz
//divisivel por 3 = Fizz
//divisivel por 5 = Buzz
//divisivel por 3 e por 5 = FizzBuzz
//Ñ divisivel por 3 e por 5 = retorna entrada
//Ñ é um numero => retorno não é um numero
const resultado = fizzBuzz(1);
console.log(resultado);

function fizzBuzz(entrada){
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz'
    if(typeof entrada !== 'number')
        return 'Não é um numero'
    if(entrada % 3 === 0)
        return 'Fizz'
    if(entrada % 5 === 0)
        return 'Buzz'
    return entrada;
}

//velocidade máxima de ate 70
//a cada 5km acima do limite voce ganha 1 ponto 
//Math.Floor()
//caso pontos maior que 12 -> suspensão da carteira
verificaVelocidade(70);

function verificaVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPontos = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/ kmPontos)
        if(pontos >= 12)
            console.log('carteira suspensa');
        else{
            console.log('Pontos', pontos);
        }

    }
}

exibirTipo(5);
function exibirTipo(limite){
    for (let i = 0; i<= limite; i++){
        if(i % 2 === 0){
            console.log('Par')
        }else{
            console.log('Impar')
        }
    }
}