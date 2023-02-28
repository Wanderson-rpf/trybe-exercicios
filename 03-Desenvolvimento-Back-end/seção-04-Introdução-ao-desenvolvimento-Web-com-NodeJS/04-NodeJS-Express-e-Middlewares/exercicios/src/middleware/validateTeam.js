const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    throw new Error('Dados de cadastro invalidos ou incompletos.')
  }
};

module.exports = validateTeam;

