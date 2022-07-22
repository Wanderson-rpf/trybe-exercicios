// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
console.log(`\nExercício 1: Criando objeto.`)
let pessoa = {
  name: 'Marta',
  lastname: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações 
// para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log(`\nExercício 2: Consultando informção do objeto.`)
console.log(`A jogadora ${pessoa.name} ${pessoa.lastname} tem ${pessoa.age} anos de idade.`);

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as 
// datas em que a jogadora Marta foi considerada a melhor do mundo.
// [2006, 2007, 2008, 2009, 2010, 2018]
console.log(`\nExercício 3: Adicionando valores ao objeto.`)
pessoa['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(pessoa);

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: 
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log(`\nExercício 4: Consultando elementos do objeto adicionado.`)
console.log(`A jogadora ${pessoa.name} ${pessoa.lastname} foi eleita a melhor do mundo por ${pessoa.bestInTheWorld.length} vezes.`)

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: 
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log(`\nExercício 5: Consultando elementos do objeto adicionado.`)
console.log(`A jogadora possui ${pessoa.medals.golden} medalhas de ouro e ${pessoa.medals.silver} medalhas de prata.`)

