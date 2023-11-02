export default function Home() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Contentful CMS",
    "Tailwind CSS",
  ];
  return (
    <section id="hero" className="text-slate-300 mx-20 mt-28">
      <small className="font-bold">Hi, my name is</small>
      <h1 className="font-black text-5xl">Frank Lam</h1>
      <h3 className="font-bold text-xl">
        I&apos;m a Software Engineer based in London
      </h3>
      <p className="w-1/2">
        with 8 years of experience in the digital industry, I&apos;ve had the
        opportunity to explore various roles. My career kicked off in Hong Kong,
        where I began as a Business Analyst before making my way to London to
        work as a Software Engineer...
      </p>

      <small>main technologies that I use:</small>
      <ul className="grid grid-cols-2 gap-y-1 md:grid-cols-2 md:gap-y-0 sm:gap-x-2 py-0 mt-5 list-none max-w-[400px]">
        {skills &&
          skills.map((skill, i) => (
            <li key={i} className="relative mb-4 pl-6 font-mono text-xs">
              <span className="absolute left-0 text-green text-sm">▹</span>
              {skill}
            </li>
          ))}
      </ul>
    </section>
  );
}
