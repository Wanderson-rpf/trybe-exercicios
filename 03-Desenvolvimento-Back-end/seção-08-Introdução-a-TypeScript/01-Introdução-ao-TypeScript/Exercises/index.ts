// ./index.ts

import * as Ex from './exercises';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);

console.log("\nVERIFICA A ÁREA DE UM LOSANGO COM AS SEGUINTES DIAGONAIS:");

console.log(`- D = 32cm e d = 18cm: ${Ex.lozengeArea(32, 18)}`);
console.log(`- D = 200cm e d = 50cm: ${Ex.lozengeArea(200, 50)}`);
console.log(`- D = 75cm e d = 25cm: ${Ex.lozengeArea(75, 25)}`);

console.log("\nVERIFICAA ÁREA DE UM TRAPÉZIO:");

console.log(`- B = 100cm, b = 70cm e altura = 50cm: ${Ex.trapezeArea(100, 70, 50)}`);
console.log(`- 75cm, b = 50cm e altura = 35cm: ${Ex.trapezeArea(75, 50, 35)}`);
console.log(`- 150cm, b = 120cm e altura = 80cm: ${Ex.trapezeArea(150, 120, 80)}`);


console.log("\nVERIFICAA ÁREA DE UM CIRCULO:");

console.log(`- 25cm: ${Ex.circleArea(25)}`);
console.log(`- 100cm: ${Ex.circleArea(100)}`);
console.log(`- 12,5cm: ${Ex.circleArea(12.5)}`);

