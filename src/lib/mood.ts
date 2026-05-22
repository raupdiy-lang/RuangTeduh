import { Mood } from "./types";
const map: Record<Mood, string[]> = {
  sad:["sedih","kecewa","nangis"], angry:["marah","kesal"], stressed:["stres","capek pikiran"], lonely:["sendiri","kesepian"], anxious:["cemas","takut"], exhausted:["lelah","capek"], happy:["senang","bahagia"], neutral:[]
};
export function detectMood(input: string): Mood { const t=input.toLowerCase(); for (const [m,keys] of Object.entries(map)) if(keys.some(k=>t.includes(k))) return m as Mood; return "neutral"; }
export function isCrisis(input:string){const t=input.toLowerCase(); return ["bunuh diri","self-harm","menyakiti diri","akhiri hidup"].some(k=>t.includes(k));}
