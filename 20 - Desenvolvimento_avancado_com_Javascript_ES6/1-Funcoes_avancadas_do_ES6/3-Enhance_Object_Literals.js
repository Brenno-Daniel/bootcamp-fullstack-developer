// Parte 3: Enhance Object Literals

// maneira classica de escrever objetos literais

var obj = {
    prop1: 'Digital Innovation One'
}

// outra maneira pode ser referenciando uma variavel

var prop2 = 'Digital Innovation One';

var obj = {
    prop2: prop2 // acabamos repetindo duas vezes a variavel
}

console.log(obj)

// no ES6 foi interoduzido um short range para isso
// funciona tanto para variáveis como para métodos
var prop3 = 'Digital Innovation One';

function method1() {
    console.log('method called');
}

var obj = {
    prop3,
    method1
}

console.log(obj)
obj.method1();

// outra forma de fazer métodos seria escrevendo uma função
// escrevendo uma função no método

var obj = {
    sum: function sum(a, b) { // pode ser uma função anonima também
        return a + b;
    }
};

console.log(obj.sum(1, 5));

// no ES6 também trouxe outra short range para o caso acima

var obj = {
    sum(a, b){
        return a + b;
    }
};

console.log(obj.sum(2, 5));

// no ES6 pode fazer a propriedade computada diretamente no objeto

var propName = 'teste';

var obj = {
    [propName + 'concat']: 'prop value'
};

console.log(obj);
