export default function Home() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Contentful CMS",
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
        <small className="font-bold mb-1">Hi, my name is</small>{" "}
        <h1 className="font-black text-5xl my-1">Frank Lam</h1>{" "}
        <h3 className="font-bold text-xl my-1">
          I&apos;m a Software Engineer based in London
        </h3>
        <p className="my-2">
          With five years of front-end development experience, I specialize in
          creating intuitive and responsive user interfaces. I am adept at
          transforming complex project requirements into engaging, efficient
          digital solutions. Dedicated to continuous learning, I strive to stay
          at the forefront of web technology trends to enhance user experiences
          and meet strategic business goals.
        </p>
        <small className="mt-2">Main technologies that I use:</small>
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
