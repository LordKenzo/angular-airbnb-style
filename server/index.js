const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {environment, config} = require('./config');
const {userRoutes, rentalRoutes} = require('./routes');

const FakeDb = require('./fakedb');

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect(environment.DB_URI, { useNewUrlParser: true })
  .then( () => {
    console.log('Connessione al database avvenuta!')
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  },
    err => console.log('Errore connessione al Database!')
  );

app.use(bodyParser.json());

app.use(`/${config.API.path}/${config.API.version}/rentals`, rentalRoutes);
app.use(`/${config.API.path}/${config.API.version}/users`, userRoutes);

app.all('*', function(req, res){
  res.status(404).send({'error':'404: Something goes wrong...'});
})

app.listen(port, function() {
  console.log(`Server listening on ${port}`);
});