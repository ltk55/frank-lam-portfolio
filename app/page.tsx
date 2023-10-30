import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <section id="hero" className="text-slate-300 p-10">
        <h1 className="font-black text-5xl">Frank Lam</h1>
        <h2 className="font-bold text-2xl">I&apos;m a Web Developer</h2>
        <p className="w-1/2">
          and a dedicated creator and perpetual learner. I have a genuine
          affinity for crafting professional web applications, emphasizing
          user-friendliness, efficiency, and visual appeal.
        </p>
      </section>

      <section id="about" className="text-slate-300 p-10">
        <h1 className="font-black text-5xl">About Me</h1>
        <p className="w-1/2">summary about myself</p>

        <p className="w-1/2">tech stack</p>
      </section>

      <section id="experience" className="text-slate-300 p-10">
        <h1 className="font-black text-5xl">Experience</h1>
        <p className="w-1/2">work experience</p>
      </section>

      <section id="projects" className="text-slate-300 p-10">
        <h1 className="font-black text-5xl">Personal Projects</h1>
        <p className="w-1/2">work</p>
      </section>

      <section id="contact" className="text-slate-300 p-10">
        <h1 className="font-black text-5xl">Contact</h1>
        <p className="w-1/2">Contact</p>
      </section>
    </main>
  );
}
