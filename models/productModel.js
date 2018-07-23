const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  desc: String,
}, { timestamps: { updatedAt: 'lastModifiedDate' } });

ProductSchema.pre('save', function (next) {
  // Only increment when the document is new
  if (this.isNew) {
    const Product = mongoose.model('Product');

    Product.count().then(res => {
      this.id = res; // Increment count
      next();
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('Product', ProductSchema);
