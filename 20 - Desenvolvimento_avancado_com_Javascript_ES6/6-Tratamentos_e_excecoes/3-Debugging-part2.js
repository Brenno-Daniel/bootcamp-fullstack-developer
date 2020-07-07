// Debugging - Parte 2

// Observar no console o erro indicado
// Ele indica onde esta o erro direcionando para a aba Source
// aba Source indica os arquivos que compoem a pagina

// Pretty print = serve para remover a minificação para que consigamos debugar, colocando os break points 
// identificando onde o erro esta mais facilmente

// Source Map = arquivo que mostra as posições do arquivo minificado em relação ao arquivo original

// Duas formas para entender o erro ocorrido:

// A primeira seria colocar um break point diretamente na linha do erro apontado,
// assim conseguimos congelar o código antes do erro e perceber o que houve.

// A segunda é adicionar no código a palavra debugger;
// O navegador automaticamente vai para na posição onde estiver o debugger, como se tivessemos colocado 
// o break point.


// Outra maneira sem trabalhar com o break point seria utilizar o console, geralmente usam mais o console.log

// Objeto console:

// console.log() = retorna um texto, muito utilizado.

// console.warn() = vem com fundo amarelo e com icone de exclamação, para dar alerta ao usuário.

// console.error() = vem em vermelho e com o x.

// console.trace() = informações de onde o código foi executado.

// console.group() = agrupamento de mensagens no console, 
// inicia o agrupamento com o console.group() e finaliza com o console.groupEnd().

// console.time() = acompanhar o tempo de execução de uma função, conseguimos analisar e 
// identificar o tempo de execução em trechos do código.

// console.table() = formata arrays e objetos no formato tabela, para melhorar a visualização.

// console.assert() = espera que a condição seja verdadeira, caso não for é executado o console.

// console.log() - ainda permite que estilizemos ele: adicionando cor, tamanho de fonte, etc
console.log('%c styled log', 'color: blue; font-size: 40px');


// Podemos entender como funciona os elementos, o estilo, debuggar ou o CSS
// Através da aba Elements e vasculhar os elementos
// Mais comum utilizar o inspetor de elementos
// Aba Elements > Styles = debuggar e entender o CSS, consegue remover e adicionar propriedades para visualizar
// Aba Elements > Computed = ver os elementos que foram computados, estilos que foram aplicados de fato, informações do renderizamento também

// Conseguimos editar o arquivo css especifico, salvar e fazer um backup dele


