interface Params {
  value: number;
  fromUnit: string;
  toUnit: string;
}

const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass({value, fromUnit, toUnit}: Params): number {
  const fromIndex = unitsMass.indexOf(fromUnit);
  const toIndex = unitsMass.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}