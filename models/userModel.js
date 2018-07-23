const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  id: Number,
  isAdmin: Boolean
}, { timestamps: { updatedAt: 'lastModifiedDate' } });

UserSchema.pre('save', function (next) {
  // Only increment when the document is new
  if (this.isNew) {
    const User = mongoose.model('User');

    User.count().then(res => {
      this.id = res; // Increment count
      next();
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);
