const express = require('express');
const BooksRoter = require('./router/books.router');

const app = express();

app.use(express.json());
app.use('/books', BooksRoter);

module.exports = app;