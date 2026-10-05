import mongoose from "mongoose";

const connectDB = async () => {

    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);//check if the after / part is correct or not
    } catch (error) {
        console.error(error.message);
    }

};

export default connectDB;
// Note: Do not use the '@' symbol in your database user's password.