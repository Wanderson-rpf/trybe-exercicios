/**
 * Primeiro, desenvolveremos uma função para calcular a área de um quadrado. 
 * A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado. A = s²
 */
export function getSquareArea(side: number): number {
  return side ** 2;
}

/**
 * A segunda função calculará a área de um retângulo. 
 * A fórmula para o cálculo é multiplicar a medida da base pela medida da altura. A = b * h
 */
export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

/**
 * A terceira calculará a área de um triângulo. 
 * A fórmula consiste em multiplicar a medida da base pela medida da altura 
 * e dividir o resultado pela metade. A = (b * h) / 2
 */
export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

/**
 * Um polígono é uma forma geométrica fechada que possui lados retos. 
 * Por exemplo: triângulos, retângulos, quadrados, trapézios, hexágonos, entre outros. 
 * A fórmula para o cálculo consiste em somar a medida de todos os lados. P = a + b + c + d + e + f ...
 */
export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}
/**
 * Nossa última função será responsável por verificar se um triângulo é válido com 
 * base na medida de seus lados e deve retornar um valor booleano (true ou false). 
 * Para que um triângulo exista, um de seus lados deve ser maior que a diferença 
 * absoluta entre os outros dois e menor que a soma deles.
 */
export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

/**
 * Crie uma nova função para calcular a área de um losango. 
 * A área do losango é dada pelo resultado da multiplicação da diagonal 
 * maior (D) pela diagonal menor (d) dividido por dois. A = (D * d) / 2
 */
export function lozengeArea(D:number, d:number): number {
  return (D * d) / 2;
}

/**
 * Crie uma nova função para calcular a área de um trapézio. 
 * A área do trapézio é dada pelo produto da altura (h) com a 
 * soma da base maior (B) e a base menor (b) dividido por dois. 
 * A = [(B + b) * h] / 2
 */
export function trapezeArea(B:number, b:number, h:number): number {
  return ((B + b) * h) / 2;
}

/**
 * Crie uma nova função para calcular a área de um círculo. 
 * A área do círculo de raio r é calculada multiplicando o raio 
 * ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). 
 * A = ℼ * r². Dica: você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI.
 */
export function circleArea(r:number): number {
  return Math.PI * r**2;
}