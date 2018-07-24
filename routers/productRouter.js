const express = require('express');
const router = express.Router();
const models = require('../models');


router.get('/', (req, res) => {
  const prm = models.Product.find().exec();

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

router.post('/', (req, res) => {
  const { name, desc } = req.body;

  const prm = models.Product.create({ name, desc });

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
  const { desc } = req.body;

  const prm = models.Product.update({ id }, { desc });

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

  const prm = models.Product.deleteOne({ id });

  prm
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch(({ message }) => {
      res.status(400).json({ error: message })
    });
});

module.exports = router;
