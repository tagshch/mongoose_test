const models = require('./models');

const { User, Product, City } = models;

User.collection.drop();
Product.collection.drop();
City.collection.drop();

User.insertMany([
  { name: 'John', isAdmin: false, id: 0 },
  { name: 'Bob', isAdmin: true, id: 1 },
]);

Product.insertMany([
  { name: 'HairyBrush', desc: 'This is shampoo', id: 0 },
  { name: 'BoldyBright', desc: 'This is not shampoo', id: 1 },
]);

City.insertMany([
  { name: 'Minsk', country: 'Belarus', capital: true, location: { lat: 52.09, long: 23.73 }, id: 0 },
  { name: 'Breast', country: 'Belarus', capital: false, location: { lat: 52.09, long: 23.73 }, id: 1 },
  { name: 'Moscow', country: 'Russia', capital: true, location: { lat: 52.09, long: 23.73 }, id: 2 },
  { name: 'Tver', country: 'Russia', capital: false, location: { lat: 52.09, long: 23.73 }, id: 3 },
]);
