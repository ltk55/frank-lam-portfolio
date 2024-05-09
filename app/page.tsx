export default function Home() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "Tailwind CSS",
    "Framer Motion",
    "Jest",
    "React Testing Library",
  ];
  return (
    <section
      id="hero"
      className="text-slate-300 flex justify-center h-screen mt-28"
    >
      <div className="flex flex-col items-start w-full max-w-[700px] px-6 md:px-0">
        <small className="font-semibold mb-1 text-slate-400">
          Hi, my name is
        </small>
        <h1 className="font-black text-5xl my-1">Frank Lam</h1>
        <h3 className="font-semibold text-xl my-1">
          I&apos;m a Software Engineer / Web Developer based in London
        </h3>
        <p className="my-2 text-slate-400">
          With five years of web development experience, I specialize in
          creating intuitive and responsive user interfaces. I am adept at
          transforming complex project requirements into engaging, efficient
          digital solutions. Dedicated to continuous learning, I strive to stay
          at the forefront of web technology trends to enhance user experiences
          and meet strategic business goals.
        </p>
        <small className="mt-2">Technologies I specialise In:</small>
        <ul className="grid grid-cols-2 gap-y-1 md:grid-cols-2 md:gap-y-0 sm:gap-x-2 py-0 mt-3 list-none">
          {skills &&
            skills.map((skill, i) => (
              <li key={i} className="relative mb-3 pl-6 font-mono text-xs">
                <span className="absolute left-0 text-green text-sm">▹</span>
                {skill}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
