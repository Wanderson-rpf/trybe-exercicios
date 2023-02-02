const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');
const { mockFile, mockChocolates } = require('../mocks/mockFile');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testando a API Cacau Trybe', function () {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);
});

afterEach(function () {
  sinon.restore();
});

describe('Teste do metodo GET em /chocolates', function () {
  it('1) Retorna a lista completa de chocolates na rota /chocolates',  async function () {
    const response = await chai.request(app).get('/chocolates');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(mockChocolates);
  });

  it('2) Usando o método GET na rota /chocolates/:id para buscar o ID 4',  async function () {
    const response = await chai.request(app).get('/chocolates/4');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolate).to.deep.equal({
      id: 4,
      name: 'Mounds',
      brandId: 3,
    });
  });

  it('3) Retorna status 404 com a mensagem "Chocolate not found" em /chocolates/99', async function () {
    const response = await chai.request(app).get('/chocolates/99');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
  });

  it('4) Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', async function () {
    const response = await chai.request(app).get('/chocolates/brand/1');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal([
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
    ]);
  });
});
