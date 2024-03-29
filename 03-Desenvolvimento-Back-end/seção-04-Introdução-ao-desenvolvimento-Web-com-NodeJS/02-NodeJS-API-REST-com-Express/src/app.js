const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());
const moviesPath = path.resolve(__dirname, './movies.json');

const contentFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await contentFile();
    const movie = movies.find((element) => element.id === Number(id));
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await contentFile();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/search', (req, res) => {
  try {
    const { q } = req.query;
    const movies = contentFile();
    if (q) {
      const filteredMovies = movies.filter((element) => element.movie.includes(q));
      console.log(req.query.q);
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await contentFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await contentFile();
    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = {
      id: Number(id),
      movie,
      price,
    };
    const updateMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updateMovies);
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await contentFile();
    const filtredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updateMovies = JSON.stringify(filtredMovies, null, 2);
    await fs.writeFile(moviesPath, updateMovies);
    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
