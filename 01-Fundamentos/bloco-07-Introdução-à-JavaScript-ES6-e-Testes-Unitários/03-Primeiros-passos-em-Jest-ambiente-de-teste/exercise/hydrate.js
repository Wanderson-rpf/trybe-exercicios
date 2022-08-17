const hydrate = (solicitation) => {
  const request = solicitation.replace(/\D+/g, '');
  let total = 0;
  for (let i = 0; i < request.length; i += 1) {
    total += Number(request[i]);
  }
  if (total > 1) {
    return `${total} copos de água`;
  }
  return `${total} copo de água`;
}

module.exports = hydrate;
