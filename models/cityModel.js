const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
  name: String,
  country: String,
  capital: { type: Boolean, default: false },
  location: {
    lat: { type: Number, default: 0 },
    long: { type: Number, default: 0 },
  },
  id: Number,
}, { timestamps: { updatedAt: 'lastModifiedDate' } });

CitySchema.pre('save', function (next) {
  // Only increment when the document is new
  if (this.isNew) {
    const City = mongoose.model('City');

    City.count().then(res => {
      this.id = res; // Increment count
      next();
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('City', CitySchema);
