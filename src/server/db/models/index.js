const Event = require('./event');
const db = require('../db.js');

// Associations go here

// Review.belongsTo(User);
// Review.belongsTo(Product);

// User.hasMany(Review);
// Product.hasMany(Review);

// Order.belongsTo(User);
// User.hasMany(Order);

module.exports = {
  Event,
  db
}