const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const rental = require('./models/rental');
const FakeDb = require('./fakedb');
const rentalRoutes = require('./routes/rental');

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
.then( () => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
})
.catch( (err) => console.log('ERRORE', err));

app.use('/api/v1/rentals', rentalRoutes);

app.listen(port, function() {
  console.log(`Server listening on ${port}`);
});