export type Mood = "sad" | "angry" | "stressed" | "lonely" | "anxious" | "exhausted" | "happy" | "neutral";
export type Persona = "Sahabat Hangat" | "Kakak Bijak" | "Teman Receh" | "Motivator";
export interface Chat { id: string; title: string; persona: Persona; created_at: string; }
export interface Message { id: string; chat_id: string; role: "user"|"assistant"; content: string; mood: Mood; created_at: string; }
