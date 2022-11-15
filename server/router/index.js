const { Movie, Category } = require('../models/');

module.exports = function (app) {

  app.get('/' , (req, res) => {
    res.send('Hello World!');
  });

  app.post('/movies', async (req, res) => {
    try {
      const movie = await Movie.create(req.body);
      return res.status(201).send(movie);
    } catch (err) {
      console.log(err);
      res.status(400).send('error');
    }
  });

  app.post('/categories', async (req, res) => {
    try {
      const category = await Category.create(req.body);
      return res.status(201).send(category);
    } catch (err) {
      console.log(err);
      res.status(400).send('error');
    }
  });

};
