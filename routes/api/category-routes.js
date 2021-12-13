const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// GET all categories
router.get('/', async(req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: {
        model: Product,
        attributes: ['product_name']
      }
    });
    //If cetegoryData does not exist
    if(!categoryData){
      //Then prompt user and return
      res.status(400).json({message: 'No category data found'})
      return;
    }
    //Otherwise return the categoryData as a json object
    res.status(200).json(categoryData);
  }catch (err){
    //If catch then throw an error
    res.status(500).json(err)
  }
});

//GET category by ID
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await Category.findOne({
      //where to find category of choice
      where: {
        id: req.params.id
      },
      // be sure to include its associated Products
      include: {
        model: Product,
        attributes: ['category_id']
      }
    })
    if(!categoryData){
      res.status(400).json({message: 'No category data found with that ID'})
      return;
    }
    res.status(200).json(categoryData)

  }catch(err){
    res.status(500).json(err);
  }
  
});
//POST create a new Category
router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create({
      category_name: req.body.category_name
    })
    if(!categoryData){
      res.status(400).json({message: 'No category data found'})
      return;
    }
    res.status(200).json(categoryData)

  }catch(err){
    res.status(500).json(err);
  }

});
//PUT update a category by ID
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update(
    {
      //update category_name
      category_name: req.body.category_name
    },
    {
      //where the ids match
      where: {
        id: req.params.id
      }
    })
    if(!categoryData){
      res.status(400).json({message: 'No category data found with that ID'})
      return;
    }
    res.status(200).json(categoryData)

  }catch(err){
    res.status(500).json(err);
  }
});
//DELETE by ID
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const categoryData = await Category.destroy({
      //where id matches usser choice
      where: {
        id: req.params.id
      }
    })
    if(!categoryData){
      res.status(400).json({message: 'No category data found with that ID'})
      return;
    }
    res.status(200).json(categoryData)

  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
