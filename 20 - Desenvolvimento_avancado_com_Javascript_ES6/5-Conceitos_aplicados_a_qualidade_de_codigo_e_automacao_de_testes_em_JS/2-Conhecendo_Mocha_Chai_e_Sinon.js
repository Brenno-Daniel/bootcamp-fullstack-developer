// Parte 2: Mocha, chai e Sinon

// Mocha:
// Ferramenta para executar os testes.
// Conhecido também como task runner.
// Possui abordagem mais descritiva seguindo os padrões do BDD
// Pode ser usado tanto no environment do node e no browser.
 
// iniciar o projeto: npm init -y
// instalar como dependencia de desenvolvimento o mocha: npm i --save-dev mocha

// para utilizar o mocha devemos alterar em: "scripts" > "test": "mocha"

// mocha por padrão busca arquivos na raiz do projeto no diretório chamado test.

// os códigos de exemplo estão em: /test/math.spec.js

// Mocha por padrão tem algumas formas de escrever os testes:
// describe: uma função, primeiro argumento é a descrição do que esta testando, e a função onde os testes serão descritos.
// dentro do describe podemos uitlizar o it.
// it: informamos o comportamento que será esperado.

// Assert: modulo nativo do node, é um objeto
// Assert serve para que a gente descreva que garanta o comportamento e que não precise disparar o erro de forma manual.

// Método equal do assert valida se dois valores passados são iguais, caso não forem iguasi ele dispara um erro
// esse erro podemos pegar com try... catch

// Após validar o teste, precisamos refatorar o código.

// Como fazer validação de código assincrono com o Mocha
// Utilizamos mocha disponibiliza um parametro chamado done
// Uma vez que injetou o done, ele aguarda o done ser invoca e depois vai considerar a execução do teste completa
// Com o done garante que o teste vai aguardar, seja uma promise, await, callback.


// Limite máximo que um teste tem utilizando o mocha é de 2000 milissegundos***
// Por isso no teste utilizamos o function.
// Mocha não recomenda utilizar arrow function.
// Mocha recomenda que utilize apenas function, para ter controle de escopo (utilizando this).


// Outra coisa interessante no Mocha é poder escrever testes que ainda não existem.
// Quando executamos o teste ele mostra que tem um teste pendente de ser feito.

// Outra funcionalidade é a capacidade de executarmos apenas um teste com o only

// Outra forma para ignorar um teste ao invés de comentá-lo é com o método skip

// Hooks:
// Formas de executar código e evitar repetição.
// beforeEach = antes de cada each irá executar algo.
// before = execuado no inicio de tudo
// existem o after, aftearEach
