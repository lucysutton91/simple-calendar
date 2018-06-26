const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
  title: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  start_time: {
    type: Sequelize.DATE
  },
  end_time: {
    type: Sequelize.DATE
  }
})

module.exports = Event;