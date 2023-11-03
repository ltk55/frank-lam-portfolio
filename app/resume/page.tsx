export default function Resume() {
  const jobDesc = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
  ];

  return (
    <main className="">
      <section id="hero" className="text-slate-300 px-10 pt-28">
        <div className="pb-10 mb-10 border-b border-slate-100">
          <h1 className="font-black text-5xl">Resume</h1>
          <h2 className="font-bold text-2xl">Download here</h2>
        </div>

        <div className="flex justify-between">
          <div className="">
            <h3>Sopra Steria</h3>
            <div>Software Energiner</div>
            <small>2021 - Present</small>
          </div>

          <ul>
            {jobDesc &&
              jobDesc.map((skill, i) => (
                <li key={i} className="relative mb-4 pl-6 font-mono text-xs">
                  <span className="absolute left-0 text-green text-sm">▹</span>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
