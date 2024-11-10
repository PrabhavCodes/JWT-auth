import mongoose from "mongoose";
import { MONGO_URI } from '../constants/env'

const connectToDatabase = async() => {
    try { 
        await mongoose.connect(MONGO_URI);
        console.log('Connected to the database');  
    }catch(err){
        console.error('Failed to connect to the database:', err);
    }
}

export default connectToDatabase;