const techList = (array, name) => {
  if (array.length <= 0) return 'Vazio!';

  const sortedArray = array.sort();
  const listTech = [];

  for (let i = 0; i < sortedArray.length; i += 1) {
    listTech.push({
      tech: array[i],
      name });
  }
  return listTech;
}

module.exports = techList;
