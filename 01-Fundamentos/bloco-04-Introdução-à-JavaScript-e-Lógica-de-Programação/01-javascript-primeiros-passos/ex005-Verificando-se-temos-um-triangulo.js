console.log('-->Execicio 5:');
// 5. 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// - Um ângulo será considerado inválido se não tiver um valor positivo.

const la = 10;
const lb = 9;
const lc = 10;
if(la < lb + lc && lb < la + lc && lc < la + lb){
  console.log(`É um triangulo. Valores dos lados: A:${la} B:${lb} C:${lc}`)
}else{
  console.log(`Não é um triangulo. Valores dos lados: A:${la} B:${lb} C:${lc}`)
}