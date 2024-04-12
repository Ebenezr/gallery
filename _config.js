var config = {};

// Update to have your correct username and password
config.mongoURI = {
  production: process.env.MONGO_DB_URI,
  development: process.env.MONGO_DB_URI,
  test: process.env.MONGO_DB_URI,
};
module.exports = config;
