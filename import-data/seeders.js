import fs from 'fs/promises';
import path from 'path';
import mongoose from 'mongoose';
import connectDB from '../connect-database/db.js';
import Room from '../models/rooms-model.js';

mongoose.connect('mongodb://localhost:27017/bookitDB', {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
});

// connectDB();

const pathRoom = path.join(process.cwd(), 'data', 'rooms.json');
const jsonData = await fs.readFile(pathRoom);
const rooms = JSON.parse(jsonData);

// import DATA into DB
const importData = async () => {
  try {
    await Room.insertMany(rooms);

    console.log('data successfully added');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// delete All DATA FROM database
const deleteData = async () => {
  try {
    await Room.deleteMany();

    console.log('delete all data successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

// const seedRooms = async () => {
//   try {
//     await Room.deleteMany();
//     console.log('Rooms are deleted');

//     await Room.insertMany(rooms);
//     console.log('All Rooms are added');
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// };

// seedRooms();
