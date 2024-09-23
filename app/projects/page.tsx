"use client";

import { motion } from "framer-motion";
import ProjectDetails from "@/components/Work/ProjectDetails";
import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    document.title = "Frank Lam | Projects";
  });

  const projectList = [
    {
      name: "Invoice App",
      technologyList: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Zustand",
        "React Hook Form",
      ],
      description:
        "Built with Next.js for managing invoices efficiently. The app allows users to create, edit, filter, and manage invoices, offering a clean, responsive user interface.",
      liveURL: "https://invoice-app-tau-three.vercel.app/",
      githubURL: "https://github.com/ltk55/invoice-app",
      imagePath: "/images/invoice-app-home.png",
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

    {
      name: "Portfolio Site",
      technologyList: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description:
        "This fully responsive portfolio website showcases my work and technical skills in a clean, modern design. The site includes smooth animations powered by Framer Motion to enhance user experience.",
      liveURL: "franklam.vercel.app",
      githubURL: "https://github.com/ltk55/frank-lam-portfolio",
      imagePath: "/images/portfolio-home.png",
    },
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
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id="work"
      className="text-slate-300 px-10 pt-28 md:px-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="pb-10 mb-10 border-b border-slate-100">
        <h1 className="font-black text-5xl">Featured Projects</h1>
      </div>

      <motion.div variants={containerVariants}>
        {projectList.map((project, i) => (
          <div key={i} className="mb-10">
            <ProjectDetails projectList={[project]} />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
