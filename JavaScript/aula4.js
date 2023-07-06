//Funções base do software
// verbo + substantivo
let corSite = 'Azul';
function resetaCor(cor, tonalidade){
    corSite= cor + ' ' + tonalidade;
}

console.log(corSite);
resetaCor();
console.log(corSite);

console.log(corSite);
resetaCor("Vermelho");
console.log(corSite);

console.log(corSite);
resetaCor("Verde","Claro");
console.log(corSite);

// tipos de função 

function dizerNome(){
    console.log('Jhonatan');
}

dizerNome();

function multiplicarPorDois(valor){
    return valor*2;
}

console.log(multiplicarPorDois(5));

//operadores logicos
//Aritiméticos

let salario = 100;

// +.-.*./.**

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log( 5 ** 5 );
