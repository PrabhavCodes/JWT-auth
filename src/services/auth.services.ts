import { oneYearFromNow } from "../utils/date";
import UserModel from "../models/user.model";
import VerificationCodeModel from "../models/verificationCode.model";
import VerficationCodeType from "../constants/verificationCodeTypes";

export type createAccountParams = {
    email: string;
    password: string;
    userAgent?: string;
}

export const createAccount = async(data:createAccountParams) =>{
    //verify existing user does not exist
    const existingUser = await UserModel.exists({
        email:data.email,
    })
    if(existingUser) {
        throw new Error("user Exists already");
    }
    //if does not exist, create user
    
        const user = await UserModel.create({
            email:data.email,
            password:data.password,
            userAgent:data.userAgent,
        })
    //create verification token

        const verficationCode = await VerificationCodeModel.create({
            userId:user._id,
            type:VerficationCodeType.EmailVerification,
            expiresAt: oneYearFromNow()
        })
    
    //send verification email


    //create sesssion


    //sign access and refresh token

    
    //return user and token

}