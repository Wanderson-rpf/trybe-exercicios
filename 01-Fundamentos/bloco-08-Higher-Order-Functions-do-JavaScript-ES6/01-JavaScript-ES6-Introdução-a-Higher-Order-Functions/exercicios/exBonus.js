// * Atividade realizada com gabarito.

// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. 
// Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

// 1 - Crie uma função que retorna o dano do dragão.
//    O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const strengthDragon = (dragon) => {
  const minDmg = 15;
  const maxDmg = dragon.strength;
  const dragonDmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);

  return dragonDmg;
};

// 2 - Crie uma função que retorna o dano causado pelo warrior.
//    O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};
const strengthWarrior = (warrior) => {
  const minDmg = 30;
  const maxDmg = 30 * 2;
  const warriorDmg = Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
  
  return warriorDmg;
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//    O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//    A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o 
//    valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
const strengthMage = (mage) => {
  const mana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = mage.intelligence * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  }

  if (mana > 15) {
    mageDmg = minDmg < maxDmg ? maxDmg : minDmg;
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }
  return turnStats;
}; 

const battleMembers = { mage, warrior, dragon };

const gameAction = {
  warriorTurn: (strengthWarrior) => {
    const warriorDmg = strengthWarrior(warrior);
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  mageTurn: (strengthMage) => {
    const mageTurnStats = strengthMage(mage);
    const mageDmg = mageTurnStats.damageDealt;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
  },
  dragonTurn: (strengthDragon) => {
    const dragonDamage = strengthDragon(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};
gameAction.warriorTurn(strengthWarrior);
gameAction.mageTurn(strengthMage);
gameAction.dragonTurn(strengthDragon);
console.log(gameAction.turnResults());
