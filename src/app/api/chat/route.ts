import OpenAI from "openai";
import { NextResponse } from "next/server";
import { detectMood, isCrisis } from "@/lib/mood";
import { personaPrompts, globalSafety } from "@/lib/personas";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export async function POST(req: Request){
  try{
    const { message, persona } = await req.json();
    const mood=detectMood(message);
    if (isCrisis(message)) return NextResponse.json({reply:"Aku ikut prihatin kamu lagi di titik berat ini. Kalau kamu dalam bahaya sekarang, segera hubungi layanan darurat setempat (Indonesia: 119 ext 8 SEJIWA) atau orang terpercaya di dekatmu. Kamu berharga, dan bantuan nyata tersedia sekarang.", mood});
    const completion = await client.chat.completions.create({ model:"gpt-4o-mini", messages:[
      {role:"system",content:`${globalSafety}\n${personaPrompts[persona] ?? personaPrompts["Sahabat Hangat"]}`},
      {role:"user",content:message}
    ]});
    return NextResponse.json({ reply: completion.choices[0]?.message?.content ?? "Aku di sini buat dengerin kamu.", mood });
  }catch{return NextResponse.json({error:"Gagal memproses chat"},{status:500});}
}
