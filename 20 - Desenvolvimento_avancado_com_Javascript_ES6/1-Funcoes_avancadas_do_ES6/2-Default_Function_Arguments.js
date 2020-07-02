// Parte 2: Default Function Arguments

// podemos atribuir um valor padrão aos parâmetros
function multiply(a = 1, b = 1){
    return a * b;
}

console.log(multiply(5, 0));
console.log(multiply(5, undefined));
console.log(multiply(undefined, 2));

// podemos referenciar a outro parÂmetro também
// function multiply(a, b = a) {
//     ...
// }

// Precisamos ter atenção na ordem de criação dos parametros, não podemos referenciar um parametro antes de iniciá-lo

// Lazy evaluation

function randomNumber() {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply2(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply2(5));
console.log(multiply2(5));