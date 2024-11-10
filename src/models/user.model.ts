import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";

export interface userDocument extends mongoose.Document {
    email:string;
    password:string;
    verified:boolean;
    createdAt:string;
    updatedAt:string;
    comparePassword(val:string):Promise<boolean>;
}

const userSchema = new mongoose.Schema<userDocument>({
        email:{type:String,unique:true,required:true},
        password:{type:String,required:true},
        verified:{type:Boolean,required:true,default:false},
    },
    {
        timestamps:true,
        
    }
);

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        return next();
    } 

    this.password =await hashValue(this.password);
    next();
})

userSchema.methods.comparePassword = async function(val:string){
    return compareValue(val,this.password); 
}

const UserModel = mongoose.model<userDocument>("User",userSchema);
export default UserModel;
