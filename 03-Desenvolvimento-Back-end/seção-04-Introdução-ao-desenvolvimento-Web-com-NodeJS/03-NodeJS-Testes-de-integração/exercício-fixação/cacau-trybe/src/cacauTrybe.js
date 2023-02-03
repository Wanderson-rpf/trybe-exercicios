// src/cacauTrybe.js

const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  const cacau = cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
  if (!cacau) {
    throw new Error('Chocolate not found');
  }
  return cacau;
};

const findChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  const cacau = cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
  if (!cacau) {
    throw new Error('Chocolate not found');
  }
  return cacau;
}

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    console.log(completePath);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (error) {
    console.error('Erro ao salvar o arquivo', error.message);
    return null;
  }
};

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolatesToUpdate = cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);

  if (chocolatesToUpdate === undefined) {
    throw new Error('chocolate not found');
  }

  if (chocolatesToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
      if (chocolate.id === id) return { ...chocolate, ...update };
      return chocolate;
    })
  await writeCacauTrybeFile(cacauTrybe);
  return { ...chocolatesToUpdate, ...update}
  }
  return false;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    findChocolateByName,
    updateChocolate
};