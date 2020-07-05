// EventMitter
// forma diferente de lidar com programação assincrona no node
// eventmitter é algo exclusivo do node
// precisamos primeiro importar seu modulo, modulo 'events' nativo do node
const EventMitter = require('events');

// para utilizar a classe basta instanciá-la ou estendê-la
const emitter = new EventMitter();

// a partir da instancia podemos subescrever a um evento específico
emitter.on('User logged', data => {
    console.log(data);
})

// pode emitir eventos também
emitter.emit('User logged', { user: 'Brenno Daniel' });

// podemos estender utilizando uma classe de usuário e adicionando um método emitindo internamente
class Users extends EventMitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data =>{
    console.log(data);
});

users.userLogged({ user: 'Brenno Daniel' });

// caso queira consumir apenas uma vez basta utilizar o método once
users.once('User logged', data =>{
    console.log(data);
});

// com once vai mostrar apenas o primeiro usuário logado
users.userLogged({ user: 'Brenno Daniel' });
users.userLogged({ user: 'Brenno Souza' });

// Algo semelhante ao EventEmitter que pode utilizar no browser é o EventTarget
// porém não tem todos os métodos, como o once, que o EventEmitter possui