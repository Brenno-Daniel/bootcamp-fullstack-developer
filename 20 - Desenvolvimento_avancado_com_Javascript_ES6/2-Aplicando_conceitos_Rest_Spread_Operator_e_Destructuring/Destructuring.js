var arr = ['Apple', 'Banan', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

console.log(apple);
console.log(banana);
console.log(orange);

// Destructuring Assignment
// 'destruir/desestruturar arrays
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(apple2);
console.log(banana2);
console.log(orange2);
console.log(tomato2);
// se atentar ao usar destructuring em dois níveis, a chave que iremos acessar deve existir, exemplo do tomato2 acima


// Destructuring pode ser usado para "destruir/desetruturar" objetos
var obj = {
    name: 'Brendon'
};

// Destructuring Assignment

var { name } = obj;

console.log(obj);
// podemos atribuir o valor a uma nova variável sem mexer no valor do obj
var { name: name2 } = obj;

console.log(obj);

// Destruct com nested, objeto dentro de objeto

var obj = {
    name: 'Brendon',
    props: {
        age: 22
    }
};

var { props: { age } } = obj;
// podendo também atribuir a uma nova variável
var { props: { age: age2 } } = obj;

console.log(age2);

// fazer dustructing de arrays dentro de objetos, e vice-versa

var obj = {
    name: 'Brendon',
    props: {
        favoriteColors: ['green', 'brown'] // array dentro do obj
    }
};

var { props: { favoriteColors: [color1, color2] } } = obj;

console.log(color1);
console.log(color2);


// exemplo de obj dentro de array
var arr = [{ name: 'Apple', type: 'Fruit' }];

var [{ name }] = arr;
// também atribuindo a uma outra variavel
var [{ name: fruitName }] = arr;

console.log(fruitName);


// lugares onde podemos usar o destructing:
// definir variaveis, lista de argumentos de uma função, conforme exemplo abaixo:

// forma tradicional:
function sum(arr) {
    a = arr[0];
    b = arr[1];

    return a + b;
};

console.log(sum([5, 5]));

// utilizando destructing
function sum([ a, b ]) {
    return a + b;
};

console.log(sum([5, 4]));


// também podemos utilizar default values com destructing
function sum([ a, b ] = [0 , 0]) {
    return a + b;
};

console.log(sum());

// o mesmo funciona para objetos
function sum({a, b}) {
    return a + b;
};

console.log(sum({ a: 4, b: 4 }));
