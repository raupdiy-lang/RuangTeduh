import { NextResponse } from "next/server";
export async function DELETE(){return NextResponse.json({ok:true});}
export async function PATCH(req:Request){const body=await req.json(); return NextResponse.json({ok:true,title:body.title});}
