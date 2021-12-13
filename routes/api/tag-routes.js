const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//GET all tags
router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: {
        model: Product
      }
    })
    if (!tagData) {
      res.status(400).json({ message: 'No tag data found' })
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});
//GET one tag by ID
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id,{
      // be sure to include its associated Product data
      include: {
        model: Product
      }
    })
    if (!tagData) {
      res.status(400).json({ message: 'No tag data found with that ID' })
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});
//POST create a new tag
router.post('/', async (req, res) => {
  try {
    // create a new tag
    const tagData = await Tag.create({
      //new tag name
      tag_name: req.body.tag_name
    })
    if (!tagData) {
      res.status(400).json({ message: 'No tag data found' })
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});
//PUT update existing tag by ID
router.put('/:id', async (req, res) => {
 
  try {
    // update a tag's name by its `id` value
    const tagData = await Tag.update(
    {
      //new tag name
      tag_name: req.body.tag_name
    },
    {
      //where id matches users choice (end point)
      where: {
        id: req.params.id
      }
    })
    if (!tagData) {
      res.status(400).json({ message: 'No tag data found with that ID' })
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});
//DELETE tag by ID
router.delete('/:id', async (req, res) => {
  
  try {
    // delete on tag by its `id` value
    const tagData = await Tag.destroy(
    {
      //where ID matches users choice
      where: {
        id: req.params.id
      }
    })
    if (!tagData) {
      res.status(400).json({ message: 'No tag data found with that ID' })
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
