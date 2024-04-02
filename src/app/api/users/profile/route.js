
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import httpStatus from "@/app/utils/httpStatus";

connect();

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json(
            {error: error.message}, 
            {status: httpStatus.BAD_REQUEST}
            );
    }

}