// Generators
// São funções com pausa
// Elas despausam e retornam valores atravez da interface de iteração (value e done)
function* hello() {
    console.log('Hello');
    yield 1; // podemos atribuir um valor ao yield para que o value não fique undefined

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
// Podemos receber valores de fora da função para dentro
console.log(it.next('Outside!'));

// conseguimos controlar o fluxo de dados
// podemos utilizar para fazer ranges infinitos
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// Podemos usar Generators para gerar a interface de iteração dos objetos iteráveis
// utilizar generator como uma forma de construir iteradores
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}

