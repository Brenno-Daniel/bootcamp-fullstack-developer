// Symbols
// Antes do ES6 existiam 6
// Symbols são uma forma de gerar um identificador unico
// não pode ser invocado usando operador new
// se invoca como se fosse uma função

const uniqueId = Symbol();

console.log(uniqueId);

// podemos passar um valor para o symbol
// isso serve exclusivamente para debug
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);

// symbol pode ser utilizado para gerar propriedades "privadas"

const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

// esse symbol somente será acessível por quem tiver esse symbol
// ou através do: Object.getOwnPropertySymbols()
Object.getOwnPropertySymbols(obj);


// symbols possui uma série de propriedades:
// well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag
Symbol.toPrimitive
Symbol.asyncIterator

// adicionar propriedades ao objeto
Symbol.iterator
Symbol.split
Symbol.toStringTag

// iterador = interface para consumir passo a passo um lista ou uma estrutura de dados
const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// retorna value e o done

// utilizando o while para apresentar os valores
while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }

    console.log(value);
}

// ES6 trouxe o for of
// neste caso podemos fazer de forma mais simples
// sem usar o whlie e sem precisar gerar o iterador

const arr2 = [1, 2, 3, 4];
const str = 'Digital Innovation One'

for (let value of arr2) {
    console.log(value);
}

for (let value of str) {
    console.log(value);
}

// nos tipos de dados que possuem iterador
// podemos usar o for of (exemplo acima) e também o Spread Operator

const arr3 = [...arr2, ...str]; // fazer spread em arrays
// não era possível fazer isso para objetos
// mas utilizando os well known symbols conseguimos adicionar essa capacidade


// construir um função iteradora num objeto
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0; // index

        return {
            next: () => {
                i ++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

// com isso o objeto se tornou iterável
// e podemos usar o for of 
// e também usar o spread para construir obj literais e arrays

for (let value of obj) {
    console.log(value);
}

const arr4 = [...obj];

console.log(arr4);
