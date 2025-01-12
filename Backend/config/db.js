// import mongoose from 'mongoose';

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONG_URI);
//     console.log('MongoDB connected successfully!');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit the process with a failure code
//   }
// };


import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_URI, {
      serverSelectionTimeoutMS: 5000, // Add timeout
      retryWrites: true,
    });
    console.log('MongoDB connected successfully!');
    return conn;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Don't exit the process, just log the error
    throw error;
  }
};