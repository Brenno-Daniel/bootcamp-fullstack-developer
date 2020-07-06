const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', function() {

    // hooks
    beforeEach(function() {
        value = 0;
    });


    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        
        value = 5;

        // Podemos pegar o erro com  try... catch..
        try {
            math.sum(value,5, value => {
                // assert.equal(value, 10);
                expect(value).to.equal(10);
                done();
            });
        } catch(err) {
            console.log(err);
        }

        // Podemos também disparar um erro antes também
        // throw new Error('Oh no!');
        // assert.equal(math.sum(5,5), 10);

    });

    // Escrever testes que ainda não existem, ao executar o teste aparecerá um teste pendente.
    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Brenno'
        };

        const obj2 = {
            name: 'Brenno'
        };

        //assert.equal(math.multiply(value, 5), 0);
        expect(math.multiply(value, 5)).to.equal(0);
        // Fazer expect de obj
        expect(obj). to.have.property('name').equal('Brenno');
        // Fazer comparação de valores de objeto profunda
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function() {
        
        // Criando uma função espiã para saber se a função foi chamada ou não
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        // sinon.spy(res, 'load');

        // Substituir o método com o stub e adicionar um retorno customizado
        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        // Retornar o método ao normal
        // res.restore();


        // Verificar se a função foi chamada apenas uma vez
        expect(res.load.calledOnce).to.be.true;

        // Podemos verificar se a função foi chamada da maneira correta
        
        // Verificar se o primeiro argumento enviado para função é o index
        expect(res.load.args[0][0]).to.equal('index');

        // verificar se o segundo argumento é o resultado da soma dos dois valores, no caso o resultado da soma de 5 + 5 = 10
        expect(res.load.args[0][1]).to.be.equal(10);
    });
});