// A função recebe um nome (string);
const substituaX = (nome) => {
  return `Tryber ${nome} aqui!`
};

// console.log(substituaX('Ricardo'));

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'CSS', 'HTML'];
  let frase = `${func}
Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    frase = `${frase}
    - ${skills[index]}`
  }
  return frase;
};

console.log(minhasSkills(substituaX('Ricardo')));
