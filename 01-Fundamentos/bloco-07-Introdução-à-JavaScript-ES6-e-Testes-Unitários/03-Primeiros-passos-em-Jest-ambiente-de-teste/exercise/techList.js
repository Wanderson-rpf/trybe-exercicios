const techList = (array, name) => {
  let listTech = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    listTech.push({
      tech: array[i],
      name });
  }
  return listTech.sort((a, b) => { 
    return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0); });
}

module.exports = techList;