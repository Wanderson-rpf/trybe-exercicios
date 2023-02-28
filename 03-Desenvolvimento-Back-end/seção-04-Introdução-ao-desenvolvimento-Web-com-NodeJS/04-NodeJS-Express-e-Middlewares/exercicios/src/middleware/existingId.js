const teams = require('../data/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;

  try {
    if (teams.some(team => team.id === Number(id))) {
      return next();
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

module.exports = existingId;
