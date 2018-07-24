const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/random', (req, res) => {
  const prm = models.City.find().exec();

  prm
    .then((cities) => {
      const randomIndex = Math.floor(Math.random() * cities.length);

      res.status(200).json({ randomCity: cities[randomIndex] });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

router.get('/', (req, res) => {
  const prm = models.City.find().exec();

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

router.post('/', (req, res) => {
  const { name, country } = req.body;

  const prm = models.City.create({ name, country });

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, country } = req.body;

  const prm = models.City.update({ id }, { name, country });

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const prm = models.City.deleteOne({ id });

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

module.exports = router;
