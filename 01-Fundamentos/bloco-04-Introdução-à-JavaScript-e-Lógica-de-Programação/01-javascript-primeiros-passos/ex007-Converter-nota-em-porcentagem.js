// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaPorcentagem = 50;

if(notaPorcentagem>=90){
  console.log('Nota: A')
}else if(notaPorcentagem>=80){
  console.log('Nota: B')
}else if(notaPorcentagem>=70){
  console.log('Nota: C')
}else if(notaPorcentagem>=60){
  console.log('Nota: D')
}else if(notaPorcentagem>=50){
  console.log('Nota: E')
}else if(notaPorcentagem<50){
  console.log('Nota: F')
}


