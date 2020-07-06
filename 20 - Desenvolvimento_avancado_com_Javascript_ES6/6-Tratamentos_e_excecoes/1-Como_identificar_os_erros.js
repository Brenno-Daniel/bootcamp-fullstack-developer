// Tratamento de erros

// Constantes não podem ser utilizadas antes de sua inicialização
console.log(name);
const name = 'Brenno Daniel';

console.log('Keep going...');
// O Js interrompe a execução do codigo assim que ocorre uma falha

// Maneira tradicional de tratar o erro é utilizando blocos de try... catch
// conseguimos tratar o erro e dar continuidade ao código
try {
    // console.log(name);
    const name = 'Brenno Daniel';

    const myError = new Error('Custom message');

    throw myError;
} catch(err) {
    console.log('Erro: ', err);
} finally{ // executa independente do erro
    console.log('Keep going...');
}

// Erros no JS são uma classe

// Podemos passar strings para classe de erro e também podemos estendÊ-la



class CustomError extends Error {
    constructor({ message, data }) {
        super(message),
        this.data = data;
    }
}

try {
    // console.log(name);
    const name = 'Brenno Daniel';

    // Podemos adicionar metainformação, métodos, ou qualquer tipo de coisa num erro para utilizar posteriormente
    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
} catch(err) {
    // Podemos adicionar condições também caso seja algum tipo específico de erro
    if (err.data.type === 'Server error') {
        // ... do something
    } else {
        // ... do another thing
    }
} finally{ 
    console.log('Keep going...');
}
