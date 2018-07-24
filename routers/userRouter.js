const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', (req, res) => {
  const prm = models.User.find().exec();

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

router.post('/', (req, res) => {
  const { name } = req.body;

  const prm = models.User.create({ name, isAdmin: false });

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
  const { name } = req.body;

  const prm = models.User.update({ id }, { name });

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

  const prm = models.User.deleteOne({ id });

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

module.exports = router;
