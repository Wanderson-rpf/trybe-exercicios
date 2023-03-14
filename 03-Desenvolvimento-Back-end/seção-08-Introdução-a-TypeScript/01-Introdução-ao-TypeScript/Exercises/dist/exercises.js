"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapezeArea = exports.lozengeArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
/**
 * Primeiro, desenvolveremos uma função para calcular a área de um quadrado.
 * A fórmula para o cálculo é elevar a medida de qualquer um dos lados ao quadrado. A = s²
 */
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
/**
 * A segunda função calculará a área de um retângulo.
 * A fórmula para o cálculo é multiplicar a medida da base pela medida da altura. A = b * h
 */
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
/**
 * A terceira calculará a área de um triângulo.
 * A fórmula consiste em multiplicar a medida da base pela medida da altura
 * e dividir o resultado pela metade. A = (b * h) / 2
 */
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
/**
 * Um polígono é uma forma geométrica fechada que possui lados retos.
 * Por exemplo: triângulos, retângulos, quadrados, trapézios, hexágonos, entre outros.
 * A fórmula para o cálculo consiste em somar a medida de todos os lados. P = a + b + c + d + e + f ...
 */
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
/**
 * Nossa última função será responsável por verificar se um triângulo é válido com
 * base na medida de seus lados e deve retornar um valor booleano (true ou false).
 * Para que um triângulo exista, um de seus lados deve ser maior que a diferença
 * absoluta entre os outros dois e menor que a soma deles.
 */
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
/**
 * Crie uma nova função para calcular a área de um losango.
 * A área do losango é dada pelo resultado da multiplicação da diagonal
 * maior (D) pela diagonal menor (d) dividido por dois. A = (D * d) / 2
 */
function lozengeArea(D, d) {
    return (D * d) / 2;
}
exports.lozengeArea = lozengeArea;
/**
 * Crie uma nova função para calcular a área de um trapézio.
 * A área do trapézio é dada pelo produto da altura (h) com a
 * soma da base maior (B) e a base menor (b) dividido por dois.
 * A = [(B + b) * h] / 2
 */
function trapezeArea(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapezeArea = trapezeArea;
/**
 * Crie uma nova função para calcular a área de um círculo.
 * A área do círculo de raio r é calculada multiplicando o raio
 * ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14).
 * A = ℼ * r². Dica: você pode acessar o valor de ℼ utilizando o módulo nativo Math.PI.
 */
function circleArea(r) {
    return Math.PI * r ** 2;
}
exports.circleArea = circleArea;
