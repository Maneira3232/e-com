const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    if (!tagData) {
      res.status(404).json({ message: "no tag man!!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  });

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tags) => res.json(tags))
})

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((tag) => res.json(tag))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
       id: req.params.id
    },
  }).then(tag => res.json(tag))
});

module.exports = router;