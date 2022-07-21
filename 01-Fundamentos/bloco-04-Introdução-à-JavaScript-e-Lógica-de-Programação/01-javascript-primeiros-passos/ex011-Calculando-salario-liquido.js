// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salario = 3000.00;
let salarioINSS = 0;
let taxaINSS = 0;
let taxaIR = 0;
let salarioIR = 0;
let salarioLiquido = 0;

// INSS
if(salario<=1556.94){
  taxaINSS = (8/100)*salario;
  salarioINSS = salario-taxaINSS;
  console.log(`Salário R$${salario.toFixed(2)} alíquota de 8% INSS de R$${taxaINSS.toFixed(2)} fica R$${salarioINSS.toFixed(2)}`)
}else if(salario>=1556.95 && salario<=2594.92){
  taxaINSS = (9/100)*salario;
  salarioINSS = salario-taxaINSS;
  console.log(`Salário R$${salario.toFixed(2)} alíquota de 9% INSS de R$${taxaINSS.toFixed(2)} fica R$${salarioINSS.toFixed(2)}`)
}else if(salario>=2594.93 && salario<=5189.82){
  taxaINSS = (11/100)*salario;
  salarioINSS = salario-taxaINSS;
  console.log(`Salário R$${salario.toFixed(2)} alíquota de 11% INSS de R$${taxaINSS.toFixed(2)} fica R$${salarioINSS.toFixed(2)}`)
}else if(salario>5189.82){
  taxaINSS = 570.88;
  salarioINSS = salario-taxaINSS;
  console.log(`Salário R$${salario.toFixed(2)} alíquota de máxima de R$570,88 fica R$${salarioINSS.toFixed(2)}`)
}

//IR
if(salarioINSS<=1903.98){
  console.log(`Salário R$${salarioINSS.toFixed(2)} insento de IR.`)
}else if(salarioINSS>=1903.99 && salarioINSS<=2826.65){
  taxaIR = ((7.5/100)*salarioINSS)-142.80;
  salarioIR = salarioINSS-taxaIR;
  console.log(`Salário R$${salarioINSS.toFixed(2)} alíquota de 7.5% IR R$${taxaIR.toFixed(2)} deduzindo R$142.80 valor final: R$${salarioIR.toFixed(2)}`)
}else if(salarioINSS>=2826.66 && salarioINSS<=3751.05){
  taxaIR = ((15/100)*salarioINSS)-354.80;
  salarioIR = salarioINSS-taxaIR;
  console.log(`Salário R$${salarioINSS.toFixed(2)} alíquota de 15% IR R$${taxaIR.toFixed(2)} deduzindo R$354.80 valor final: R$${salarioIR.toFixed(2)}`)
}else if(salarioINSS>=3751.06 && salarioINSS<=4664.68){
  taxaIR = ((22.5/100)*salarioINSS)-636.13;
  salarioIR = salarioINSS-taxaIR;
  console.log(`Salário R$${salarioINSS.toFixed(2)} alíquota de 22.5% IR R$${taxaIR.toFixed(2)} deduzindo R$636.13 valor final: R$${salarioIR.toFixed(2)}`)
}else if(salarioINSS>4664.68){
  taxaIR = ((27.5/100)*salarioINSS)-869.36;
  salarioIR = salarioINSS-taxaIR;
  console.log(`Salário R$${salarioINSS.toFixed(2)} alíquota de 27.5% IR R$${taxaIR.toFixed(2)} deduzindo R$869.36 valor final: R$${salarioIR.toFixed(2)}`)
}
console.log(`Salário liquido: R$${salarioIR.toFixed(2)}`);
