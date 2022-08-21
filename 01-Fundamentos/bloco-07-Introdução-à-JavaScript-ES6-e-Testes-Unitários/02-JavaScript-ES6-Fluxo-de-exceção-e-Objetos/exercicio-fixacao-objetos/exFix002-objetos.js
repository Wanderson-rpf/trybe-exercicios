// ente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato 
// "Nome da habilidade, Nível: valor da chave referente à habilidade".
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const skills = (obj) => {
  const ObjKeys = Object.keys(obj);
  for (let index = 0; index < ObjKeys.length; index += 1) {
    console.log(`${ObjKeys[index]}, Nível: ${obj[ObjKeys[index]]}`)
  }
};

console.log(listSkills(student));
