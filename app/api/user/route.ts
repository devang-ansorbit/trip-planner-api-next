import { NextApiRequest, NextApiResponse } from "next";
import {UserModel} from "../../models"
import { NextResponse } from "next/server";
import dbConnect from "@/app/db/dbConnect";

export const GET = async(req : NextApiRequest, res : NextApiResponse) =>{
    await dbConnect()
    const user = await UserModel.find();
    if(user) {
       return NextResponse.json({data : user , status : 200 , message : "user fetched  sucessfully" })
    } else {
        return NextResponse.json({ status : 400, message : 'user not found'})
    }
}

export const POST = async(req : NextApiRequest, res : NextApiResponse) =>{
    await dbConnect()
    const user = await UserModel.create(req.body);
    if(user){
        return NextResponse.json({data : user , status : 200 , message : "user fetched  sucessfully" })
    } else {
        return NextResponse.json({ status : 400 , message : "failed to create user"})
    }
}