//Import express routes and sequelize
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

//Establish express
const app = express();
const PORT = process.env.PORT || 3001;
//Body guard
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
