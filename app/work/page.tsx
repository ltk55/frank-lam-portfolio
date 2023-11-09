import ProjectDetails from "@/components/Work/ProjectDetails";

export default function Work() {
  const projectList = [
    {
      name: "Product Feedback App",
      technologyList: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "React Hook Form",
      ],
      description:
        "Create, read, update, and delete product feedback requests, Receive form validations when trying to create/edit feedback requests, Sort suggestions by most/least upvotes and most/least comments",
      liveURL: "",
      githubURL: "",
      imagePath: "",
    },
    {
      name: "In-browser Markdown Editor",
      technologyList: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
      ],
      description:
        "Create, read, update, and delete product feedback requests, Receive form validations when trying to create/edit feedback requests, Sort suggestions by most/least upvotes and most/least comments",
      liveURL: "",
      githubURL: "",
      imagePath: "",
    },
  ];

  return (
    <section id="work" className="text-slate-300 px-10 pt-28">
      <div className="pb-10 mb-10 border-b border-slate-100">
        <h1 className="font-black text-5xl">Featured projects</h1>
      </div>

      <ProjectDetails projectList={projectList} />
    </section>
  );
}
