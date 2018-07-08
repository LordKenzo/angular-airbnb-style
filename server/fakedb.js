const Rental = require('./models/rental');

class FakeDb {

  constructor() {
    this.rentals = [{
      id: '1',
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Sqaure',
      category: 'apartment',
      image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
      bedrooms: 3,
      shared: true,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: '2',
      title: 'Central Apartment 2',
      city: 'San Francisco',
      street: 'Main street',
      category: 'condo',
      image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
      bedrooms: 2,
      shared: false,
      description: 'Very nice apartment',
      dailyRate: 12,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '3',
      title: 'Central Apartment 3',
      city: 'Bratislava',
      street: 'Hlavna',
      category: 'condo',
      image: 'https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg',
      bedrooms: 2,
      shared: true,
      description: 'Very nice apartment',
      dailyRate: 334,
      shared: true,
      createdAt: '24/12/2017'
    },
    {
      id: '4',
      title: 'Central Apartment 4',
      city: 'Berlin',
      street: 'Haupt strasse',
      category: 'house',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 9,
      shared: false,
      description: 'Very nice apartment',
      dailyRate: 33,
      shared: true,
      createdAt: '24/12/2017'
    }];
  }

  pushRentalsToDb() {
    this.rentals.map( (rental) => {
      const newRental = new Rental(rental);
      newRental.save();
    });
  }

  seedDb() {
    this.cleanDb();
    this.pushRentalsToDb();
  }

  async cleanDb() {
    await Rental.remove({});
  }
}

module.exports = FakeDb;