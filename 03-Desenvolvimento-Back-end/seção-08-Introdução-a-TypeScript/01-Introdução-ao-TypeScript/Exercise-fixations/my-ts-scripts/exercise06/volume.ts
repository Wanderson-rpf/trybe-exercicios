interface Params {
  value: number;
  fromUnit: string;
  toUnit: string;
}

const unitsVolume = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume({value, fromUnit, toUnit}: Params): number {
  const fromIndex = unitsVolume.indexOf(fromUnit);
  const toIndex = unitsVolume.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}