const fs = require('fs')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const Tour = require('./models/tourModel')
const User = require('./models/userModel');

dotenv.config({ path: './config/config.env' })

connectDB()


const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
)

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`, 'utf-8')  
);


// Importing data into the database
const importData = async () => {
  try {
    await Tour.create(tours)
    // await User.create(users);
    console.log('Data successfully loaded')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

//DELETE ALL DATA FROM DATABASE
const deleteData = async () => {
  try {
    await Tour.deleteMany()
    // await User.deleteMany()
    console.log('Data successfully deleted ')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

if (process.argv[2] === `-i`) {
  importData()
} else if (process.argv[2] === `-d`) {
  deleteData()
}
