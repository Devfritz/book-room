import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_LOCAL_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });

    console.log(`database connection successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error Database : ${error.messsage}`);
    process.exit(1);
  }
};

export default connectDB;
