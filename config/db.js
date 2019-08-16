const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log('database connected!');
  } catch (error) {
    console.log(error);
    // exit app on database failure
    process.exit(1);
  }
};

module.exports = connectToDatabase;
