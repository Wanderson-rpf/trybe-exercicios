const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');
const { mockFile, mockChocolates } = require('../mocks/mockFile');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testando a API Cacau Trybe', function () {

  describe('Teste do metodo GET em /chocolates', function () {

    it('1) Retorna a lista completa de chocolates na rota "/chocolates"',  async function () {
      const response = await chai.request(app).get('/chocolates');
  
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(mockChocolates);
      console.log('Terminei o it');
    });
  
    it('2) Usando a rota "/chocolates/:id" para buscar o ID 4',  async function () {
      const response = await chai.request(app).get('/chocolates/4');
  
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
      console.log('Terminei o it');
    });
  
    it('3) Retorna status 404 com a mensagem "Chocolate not found" em /chocolates/99', async function () {
      const response = await chai.request(app).get('/chocolates/99');
  
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
      console.log('Terminei o it');
    });
  
    it('4) Usando a rota "/chocolates/brand/:brandId" para buscar brandId 1', async function () {
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
      console.log('Terminei o it');
    });
  
    it('5) Usando a rota em "/chocolates/total" para mostrar o total de chocolates', async function () {
      const response = await chai.request(app).get('/chocolates/total');
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({
        "totalChocolates": 4 // quantidade de chocolates na base de dados
      });
    });
  
    it('6) Usando a rota "/chocolates/search?name=Mo" para filtrar chocolates', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=Mo');
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ]);
    });
  });
  
  describe('Teste do metodo PUT em /chocolates/:id', function () {
    // Stub
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
    sinon.stub(fs.promises, 'writeFile').resolves();

    // AfterEach
    afterEach(function () {
      sinon.restore();
      console.log('AfterEach')
    });

    it('1) Atualiza um chocolate existente', async function () {
      const response = await chai.request(app).put('/chocolates/1').send({
        name: 'Mint Pretty Good',
        brandId: 2,
      })
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      });
    });
  
    it('2) Se o chocolate não existe, gera um erro', async function () {
      const response = await chai.request(app).put('/chocolates/555').send({
        name: 'Mint Pretty Good',
        brandId: 2,
        })
  
      expect(response.status).to.be.equal(404);
        expect(response.body).to.deep.equal({
          message: 'chocolate not found',
        });
    });
  });
});

