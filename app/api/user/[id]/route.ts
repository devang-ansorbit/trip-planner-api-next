import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../db/dbConnect";
import { UserModel } from "../../../models";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect();
  console.log(params.id , "params.id");
  const user = await UserModel.findById(params.id);
  if (user) {
    return NextResponse.json({
      data: user,
      message: "user fetched successfully",
      status: 200,
    });
  }else{
  return NextResponse.json({ staus: 404, message: "User not found" });
}};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  if (params.id) {
  }
  await dbConnect();
  const payload = await req.json();
  const user = await UserModel.findByIdAndUpdate(params.id, payload, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return NextResponse.json({
      data: user,
      message: "user updated successfully",
      status: 200,
    });
  }
  return NextResponse.json({ staus: 404, message: "User not found" });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  
  const user = await UserModel.findByIdAndDelete(params.id);
  if (!user) {
    return NextResponse.json({
        status : 404,
        message : "user not found"
    }
    )}
    return NextResponse.json({data : user , status : 200 , message :"user deleted"})
    
};
