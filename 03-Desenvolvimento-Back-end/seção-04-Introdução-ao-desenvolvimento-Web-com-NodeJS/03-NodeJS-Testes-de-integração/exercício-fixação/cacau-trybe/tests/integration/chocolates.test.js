const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');
const mockFile = require('../mocks/mockFile');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testando a API Cacau Trybe', function () {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);
});

describe('Teste do metodo GET em /chocolate', function () {
  it('1) Retorna a lista completa de chocolates',  async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];

    const response = await chai.request(app).get('/chocolates');

    expect(response.status).to.be.equal(200);
    expect(response.body.chocolates).to.deep.equal(output);
  });
});
