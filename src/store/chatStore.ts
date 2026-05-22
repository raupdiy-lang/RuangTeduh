import { create } from "zustand";
import { Chat, Message, Persona } from "@/lib/types";
interface State { chats: Chat[]; messages: Message[]; activeChatId?: string; persona: Persona; setChats:(c:Chat[])=>void; setMessages:(m:Message[])=>void; setActiveChat:(id:string)=>void; setPersona:(p:Persona)=>void; }
export const useChatStore=create<State>((set)=>({chats:[],messages:[],persona:"Sahabat Hangat",setChats:(chats)=>set({chats}),setMessages:(messages)=>set({messages}),setActiveChat:(activeChatId)=>set({activeChatId}),setPersona:(persona)=>set({persona})}));
