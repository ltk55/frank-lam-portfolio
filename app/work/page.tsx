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
        "Fully responsive product feedback app, developed for seamless interaction across all devices. This app allows users to view, filter, and sort product feedback, post their own insights, upvote other users' feedback and bring feedbacks into the product roadmap.",
      liveURL: "https://product-feedback-app-pink.vercel.app/",
      githubURL: "https://github.com/ltk55/product-feedback-app",
      imagePath: "/images/product-feedback-home.png",
    },
    {
      name: "In-browser Markdown Editor",
      technologyList: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "React-toastify",
      ],
      description:
        "This markdown editor allows you to input Markdown syntax, which is instantly rendered on a split-screen for immediate preview. User can name, save, download and manage multiple documents directly within the app, with all data stored in browser's local storage.",
      liveURL: "https://in-browser-markdown-editor-gray.vercel.app/",
      githubURL: "https://github.com/ltk55/in-browser-markdown-editor",
      imagePath: "/images/markdown-home.png",
    },
  ];

  return (
    <section id="work" className="text-slate-300 px-10 pt-28 md:px-28">
      <div className="pb-10 mb-10 border-b border-slate-100">
        <h1 className="font-black text-5xl">Featured projects</h1>
      </div>

      <ProjectDetails projectList={projectList} />
    </section>
  );
}
