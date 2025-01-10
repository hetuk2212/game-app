require('dotenv').config();

module.exports = {
  db: process.env.DB_URI || 'mongodb://localhost:27017/gameApp',
  port: process.env.PORT || 3000,
};
