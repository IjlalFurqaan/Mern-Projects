import mongoose from "mongoose"; // Import the Mongoose library

export const dbConnection = () => { // Export a function named dbConnection
  mongoose
    .connect(process.env.MONGO_URI, { // Use Mongoose to connect to the MongoDB database
      dbName: "MERN_JOB_SEEKING_WEBAPP", // Specify the database name
    })
    .then(() => { // If connection is successful
      console.log("Connected to database."); // Log a success message
    })
    .catch((err) => { // If there is an error connecting
      console.log(`Some Error occurred. ${err}`); // Log the error message
    });
};
