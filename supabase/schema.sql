create table if not exists users (
  id uuid primary key,
  email text unique not null,
  created_at timestamptz default now()
);
create table if not exists personas (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  prompt text not null,
  created_at timestamptz default now()
);
create table if not exists chats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  title text not null,
  persona text not null,
  created_at timestamptz default now()
);
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  chat_id uuid not null references chats(id) on delete cascade,
  role text not null,
  content text not null,
  mood text,
  created_at timestamptz default now()
);
