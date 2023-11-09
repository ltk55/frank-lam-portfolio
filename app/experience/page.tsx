import Job from "@/components/Job/Job";

export default function Experience() {
  const jobExp = [
    {
      company: "Sopra Steria",
      jobTitle: "Software Engineer",
      duration: "Nov 2021 - Present",
      jobDescriptions: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
      ],
    },
    {
      company: "Computer And Technologies",
      jobTitle: "Business Analyst",
      duration: "Sep 2017 - Feb 2021",
      jobDescriptions: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
      ],
    },
    {
      company: "MRC (HRMS) Limited",
      jobTitle: "Project Consultant",
      duration: "Aug 2015 - Apr 2017",
      jobDescriptions: [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio laudantium eum dolorem eos veritatis vero quae odit voluptate. ",
      ],
    },
  ];

  return (
    <section id="resume" className="text-slate-300 px-10 pt-28">
      <div className="pb-10 mb-10 border-b border-slate-100">
        <h1 className="font-black text-5xl">Experience</h1>
        <h2 className="font-bold text-2xl">Download Full Résumé</h2>
      </div>

      {jobExp.map((jobDetails, i) => (
        <Job JobDetails={jobDetails} key={i} />
      ))}
    </section>
  );
}
