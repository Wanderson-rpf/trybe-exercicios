const searchEmployee = require('./bonus-cadastro');

describe('Verificações e testes da função searchEmployee.', () => {
  it ('Verifica se é uma função', () => {
    expect(typeof(searchEmployee)).toEqual('function');
  });
  it ('Verificar se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    const professional = searchEmployee('4678-2', 'firstName');
    expect(professional).toEqual('Paul');
  });
  it ('Verificar se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const professional = searchEmployee('4678-2', 'lastName');
    expect(professional).toEqual('Dodds');
  });
  it ('Verificar se searchEmployee(id, "specialities") retorna o a especialidaded do usuário da id consultada', () => {
    const professional = searchEmployee('4678-2', 'specialities');
    expect(professional).toContain('Backend');
  });
  it ('Verificar se um erro com a mensagem "ID não identificado" é retornado quando o ID não existir', () => {
    expect(() => { searchEmployee('1212-2', 'specialities') }).toThrow(); // Verificando erro
  });
  it ('Verificar o retorno quando o ID não existir', () => {
    expect(() => { searchEmployee('1212-2', 'specialities') }).toThrowError('ID não identificado'); // Verificando a mensagem de erro
  });
  it ('Verificar o retorno quando o detail não existir', () => {
    expect(() => { searchEmployee('4678-2', '') }).toThrowError(new Error('Informação indisponível')); // Verificando a mensagem de erro
  });
  it ('Verificar quando o ID e informação são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow(); // Verificando erro
  });
});