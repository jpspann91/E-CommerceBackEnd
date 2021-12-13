//Import express router
const router = require('express').Router();

const apiRoutes = require('./api');
//Api route established
router.use('/api', apiRoutes);

//Wrong Route MEssage
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;