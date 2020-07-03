// Parte 1: Rest e Spread Operator
// função de soma simples

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 5, 2, 4));

// para se trabalhar com um numero de argumentos indefinidos

// maneira antiga= arguments
// arguments se refere a todos os argumentos da função
// uma lista com todos os argumentos

function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}

console.log(sum(5, 5, 2, 4));


// ES6: rest operator ...
// já traz os métodos de array para manipular os elementos

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 2, 4));



// lista de arguments é inexistente em arrow functions
// código abaixo irá gerar erro pois a arrow function esta tentando acessar um arguments
const sum = () => {
    console.log(arguments)
};

console.log(sum(5, 5, 2, 4));


// quando trabalhamos com arrow functions devemos usar o rest operator
// rest operator podemos pegar argumentos restantes

const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
};

console.log(sum(5, 5, 2, 3));


// Spread Operator ...
// Tem a função de quebrar os itens e repassar para algum lugar

// Se quisermos passar argumentos de uma função para outra

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    // Atingamente era comum utilizar o apply:
    //return multiply.apply(undefined, rest);

    // No ES6 surgiu o Spread Operator:
    // pega todos os itens do array e tranforma em parÂmetros para a segunda função, semelhante ao apply
    return multiply(...rest);

};

console.log(sum(5, 5, 2, 3));

// Spread não se limita a lista
// Pode ser usado em:
// Strings, arrays, objetos literais e objetos iteraveis
// exemplos:

// strings
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);

// arrays

const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

logArgs(...arr);


// Spread Operator também pode ser utilizado para construir arrays

// combinar arrays:
// uma das formas de combinar arrays é usando o concat
// mas podemos usar o Spread Operator
const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

const arr3 = [...arr, ...arr2, 10, 11, 12];
console.log(arr3);

// clonar array:
const arrClone = [...arr];
console.log(arrClone);

// Spread e objetos literais
// spreado só pode ser usado para contruir novos objetos literais
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'Hello'
};

console.log(obj2);

// Não podemos construir um array, nem fazer um spread no objeto para construir um array

// a ordem com se faz o Spread no objeto é importante, é a ordem que irá prevalecer

// Fazer clone de objeto com o Spread usando Shallow Clone (clone raso)
