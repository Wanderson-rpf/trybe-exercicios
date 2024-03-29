interface Params {
  value: number;
  fromUnit: string;
  toUnit: string;
}

const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity({value, fromUnit, toUnit}: Params): number {
  const fromIndex = unitsCapacity.indexOf(fromUnit);
  const toIndex = unitsCapacity.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}