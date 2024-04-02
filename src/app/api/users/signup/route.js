
import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import httpStatus from "@/app/utils/httpStatus";


connect()


export async function POST(request){

    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        // console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json(

                {error: "User already exists"},
                { status: httpStatus.BAD_REQUEST }

                )
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        

    } catch (error) {
        return NextResponse.json(

            {error: error.message}, 
            {status: httpStatus.INTERNAL_SERVER_ERROR}
            
            )

    }
}