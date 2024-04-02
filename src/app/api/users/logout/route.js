
import { NextResponse } from "next/server";
import httpStatus from "@/app/utils/httpStatus";


export async function GET() {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        response.cookies.set("token", "", 
        { httpOnly: true, expires: new Date(0) 
        });
        return response;
    } catch (error) {
        return NextResponse.json(
            { error: error.message }, 
            { status: httpStatus.INTERNAL_SERVER_ERROR }
            );
    }
        
    }
