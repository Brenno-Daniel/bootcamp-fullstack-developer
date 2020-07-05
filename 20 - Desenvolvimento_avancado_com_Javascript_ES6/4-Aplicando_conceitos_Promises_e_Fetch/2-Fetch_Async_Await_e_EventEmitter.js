// Fetch, Async/Await e EventEmitter

// Fecth, tem o mesmo ituio do XML HTTP Request, que é fazer requisições
// mas trabalha utilizando promises
fetch('/data.json').then(responseStream => {
    console.log(responseStream);
});


// para obter os dados do json precisamos processar o stream para obter o valor de fato
// stream tem varias formas para poder processar
// nesse caso iremos utilizar o .json() que é para transformá-lo em um json
// stream por ter seu processamento de maneira assincrona retorna uma promise e podemos utilizar o then e pegar os dados
fetch('http://localhost:808112/data.json')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    }).catch(err => { // se houver um erro de rede será tratado no catch
        console.log('Error: ', err);
    });

// devemos ficar atentos que o fetch só vai dar um erro na promise se der um erro de rede
// e não caso acontece um erro de status diferente de 200
// para validarmos se irá passar somente se o status for 200, podemos usar o if
// stream por ter seu processamento de maneira assincrona retorna uma promise e podemos utilizar o then e pegar os dados
fetch('http://localhost:8080/dataXPTO.json')
    .then(responseStream => {
      if (responseStream.status === 200) {
          return responseStream.json();
      } else{
          throw new Error('Request error');
      }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Error: ', err);
    });

// caso queiramos fazer algo diferente de um GET, o fetch permite um segundo parametro
// esse segundo parametro vai ser a configuração do request, por padrão ele é um GET
fetch('http://localhost:8080/data.json', {
    method: 'post',
    body: JSON.stringify
})

// A partir do ES& - Async / Await
// é uma forma de criar promises de maneira mais simples, 
// e a lidar com outras promises também de maneira mais simples
const simpleFunc = async () => {
    return 12345;
};

console.log(simpleFunc()); // retorna a promise já resolvida

// fato de colocar a palavra async já tranformou a função numa promise
// então no retorno temos de utilizar o then
simpleFunc().then(data => {
    console.log(data);
});

// para tratar o erro também de forma bem simples
const simpleFunc = async () => {
    throw new Error('Oh no!!');
    return 12345;
};

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


// porém a async por si só não é muito utilizado sozinho, vem junto ao await
// Await aguarda outras promises serem resolvidas
// Await pode ser utilizado somente dentro de async

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    // no exemplo abaixo irá aguardar a promise data resolver e depois resolver a dataJSON
    const data = await asyncTimer();
    const dataJSON = await fetch('/data.json').then(resStream => 
        resStream.json()
    );    
    
    return dataJSON;
};

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// Se quisessemos processar isso de maneira paralela, utilizamos novamente o Promise.all

const simpleFunc = async () => {
    // usando o Promise.all para processar as promises em paralelo
    const data = await Promise.all([asyncTimer(),
    fetch('/data.json').then(resStream => 
        resStream.json())
    ]);    
    
    return dataJSON;
};