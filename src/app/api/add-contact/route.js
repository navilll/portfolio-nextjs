import { contactString } from "@/lib/database/db_connect"
import { Contact } from "@/lib/database/model/contact";
import mongoose from "mongoose"
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    await mongoose.connect(contactString);
    const payload = await req.json();
    const data = await Contact(payload);
    const response = await data.save();

    return NextResponse.json({result:response,success:true});
}