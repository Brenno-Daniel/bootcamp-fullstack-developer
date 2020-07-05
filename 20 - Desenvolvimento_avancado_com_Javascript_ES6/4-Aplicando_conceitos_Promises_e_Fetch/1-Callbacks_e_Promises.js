// Callbacks e promises

// Antigamente era comum usar funções de callback para executar algo após uma determinada tarefa assincrona fosse executada
// exemplo de como era feito
// callbacks
function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        // did other thing
        callback('Second data');
    }, 1000);
}

// função executar as funções acima de forma sequencial
function doAll() {

    // tratamento de dados com try... catch
    try {
        doSomething(function(data) {
            var processedData = data.split('');

            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch{
                        // handle error
                    }

                });
            } catch(err) {
                // handle error
            }
        });
    } catch(err) {
        // handle error
    }
}

doAll();

// para tratar o erro de cada etapa, lidar com o código como foi ficando cada vez mais complicado
// e dificil de lidar quando usamos callback, caimos num cenário chamado callback hell

// antes do ES6 implementaram algo parecido com promises
// Promises: maneira de lidar com programação assincrona de maneira mais inteligente
// refazendo o código acima utilizando promises
const doSomethingPromise = new Promise((resolve, reject) => {
    throw new Error('Something went wrong!');
    setTimeout(function() {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        // did other thing
        resolve('Second data');
    }, 1000);
});

// processá-las de maneira sequencial
// não é preciso invocá-la:
// console.log(doSomethingPromise); // a promise vai estar pendente

// Promise pode ter 3 status
// pending = pendente, ou seja, em execução
// fulfiled = quando terminou de executar
// rejected = caso ocorra algum erro

// pra que conseguimos executar o console.log da maneira correta,
// precisamos pegar a promise e colocar um then:
// doSomethingPromise.then(data => console.log(data));

// para tratar um erro basta adicionar um catch ao final:
doSomethingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));


// caso queira pegar esses dados e depois invocar uma nova promise
// promises permitem encadear uma na outra
// exemplo retornando outra promise no then
doSomethingPromise
    .then(data => { 
        console.log(data); 
        return doOtherThingPromise; 
    })
    .then(data2 => console.log(data2))
    .catch();


// caso queira fazer com função que gere essa promise, assim são executadas exatamente no tempo esperado
const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        throw new Error('Something went wrong!');
        setTimeout(function() {
            // did something
            resolve('First data');
        }, 1000);
});

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did other thing
            resolve('Second data');
        }, 1000);
});

doSomethingPromise
    .then(data => { 
        console.log(data.split('')); 
        return doOtherThingPromise(); 
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error)); // se qualquer erro ocorrer nas promises será tratado pelo meu catch


// promises permitem execução em paralelo ao invés de sequencial com o promise.all
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => { console.log(data)});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => { console.log(data[0].split('')); console.log(data[1].split(''))});


// utilizar o race é outra forma de lidar com multiplas promises, 
// mas a que for resolvida primeiro será o que retornará de valor
// no exemplo irá retornar o valor da segunda promise antes da primeira
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => { console.log(data) });
