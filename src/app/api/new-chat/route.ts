import { NextResponse } from "next/server";
export async function POST(){return NextResponse.json({id:crypto.randomUUID(),title:"Curhat Baru"});}
