import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold">Tempat aman untuk bercerita, kapan saja.</h1>
        <p className="text-lg text-slate-600">AI companion yang mendengar, memahami, dan menemani.</p>
        <div className="flex gap-4 justify-center">
          <Link className="px-6 py-3 rounded-full bg-softBlue text-white" href="/register">Mulai Curhat</Link>
          <Link className="px-6 py-3 rounded-full bg-lavender text-white" href="/chat">Coba Demo</Link>
        </div>
      </section>
    </main>
  );
}
