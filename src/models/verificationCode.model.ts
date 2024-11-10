import mongoose from "mongoose";
import VerficationCodeType from "../constants/verificationCodeTypes";

export interface VerficationCodeDocument extends mongoose.Document {
    userId:mongoose.Types.ObjectId;
    type:VerficationCodeType;
    expiresAt:Date;
    createdAt:Date;
}

const verficationCodeSchema = new mongoose.Schema<VerficationCodeDocument>(
    {
        userId :{type:mongoose.Schema.Types.ObjectId, ref:"User",required:true,index:true},
        type:{type:String, required:true},
        createdAt:{type:Date,required:true,default:Date.now},
        expiresAt:{type:Date, required:true},
    }
);

const VerificationCodeModel = mongoose.model<VerficationCodeDocument>(
    "VerificationCode",
    verficationCodeSchema,
    "verification_codes"
);
export default VerificationCodeModel;
