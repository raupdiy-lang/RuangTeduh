"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
export default function AuthForm({mode}:{mode:"login"|"register"}){const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const r=useRouter();
const submit=async()=>{setError(""); const fn=mode==="login"?supabase.auth.signInWithPassword:supabase.auth.signUp; const {error}=await fn({email,password} as never); if(error)return setError(error.message); r.push("/chat");};
return <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-3xl shadow space-y-4"><h1 className="text-2xl font-bold">{mode==="login"?"Login":"Daftar"}</h1><input className="w-full p-3 border rounded-xl" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><input className="w-full p-3 border rounded-xl" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>{error&&<p className="text-red-500 text-sm">{error}</p>}<button onClick={submit} className="w-full p-3 rounded-xl bg-softBlue text-white">{mode==="login"?"Masuk":"Buat akun"}</button></div>}
