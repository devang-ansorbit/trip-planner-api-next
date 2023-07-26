import {UserModel} from "../../models"
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/db/dbConnect";

export const GET = async() =>{
    await dbConnect()
    const user = await UserModel.find();
    if(user) {
       return NextResponse.json({data : user , status : 200 , message : "user fetched  sucessfully" })
    } else {
        return NextResponse.json({ status : 400, message : 'user not found'})
    }
}

export const POST = async(req : NextRequest) =>{
    await dbConnect()
    const user = await UserModel.create(req.body);
    if(user){
        return NextResponse.json({data : user , status : 200 , message : "user fetched  sucessfully" })
    } else {
        return NextResponse.json({ status : 400 , message : "failed to create user"})
    }
}