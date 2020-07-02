// Parte 1: Arrow Functions

var sumOld = function(a, b){
    return a + b;
}


// Arrow functions
// São funções anonimas

var sum = (a, b) => a + b; // existe um return implicito

console.log(sum(5, 15));

// se possuir um argumento podemos omitir os parenteses

var sum = a => a + 5;

// objetos literais

var obj = {
    teste: '123'
}

// return implicito de um objeto

var createObj = () => ({ test: 123 });

console.log(createObj());

// outra forma de construir objetos é através de funções construtoras

// function Car() {
//     this.foo = 'bar';
// }

// console.log(new Car());

// não podemos fazer o mesmo utilizando arrow function, por conta do this (veremos mais a frente)

var Car = () => {
    this.foo = 'bar';
};

console.log(new Car());

// hoisting: caracteristicas das funções e variaveis de serem escaladas ao topo do nosso código
// consigo invocar a função antes de declarar a variavel

log ('teste');

function log(value) {
    console.log(value);
}

// conceito de hoisting não se aplica a arrow function

log('teste');

var log = value => {
    console.log(value);
};

//  *********

var obj = {

    showContext: function showContext() {
        console.log(this);
    },

    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

// this:
// bind e aply fixam o contexto da função
// comum nos anos 2000 armazenar o contexto numa variavel, geralmente var _that = this; (deixava o codigo mais poluido, etc.)
// arrow function veio para simplificar esse processo
// tem uma propriedade de ter um contexto igual ao codigo que envolve ele