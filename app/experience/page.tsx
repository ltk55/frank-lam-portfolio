"use client";

import Job from "@/components/Job/Job";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    document.title = "Frank Lam | Experience";
  });

  const jobExp = [
    {
      company: "Sopra Steria",
      jobTitle: "Software Engineer",
      duration: "Nov 2021 - Aug 2024",
      jobDescriptions: [
        "Designed and implemented a responsive Next.js web application for a leading UK-based energy provider, streamlining customer quoting journey, resulting in a 20% increase in user interaction rates and improved overall customer satisfaction.",
        "Partnered with UX/UI designers and backend teams to deliver cohesive, user-centric interfaces by integrating front-end elements with server-side logic. Consistently ensured timely delivery within Agile sprints, meeting or exceeding project milestones.",
        "Advocated for performance and accessibility enhancements, resulting in a 20% reduction in page load times, a 15% drop in bounce rates, and a more inclusive user experience.",
      ],
    },
    {
      company: "Computer And Technologies Holdings Limited",
      jobTitle: "Business Analyst (Software Development)",
      duration: "Sep 2017 - Feb 2021",
      jobDescriptions: [
        "Spearheaded the development of an Expense Reimbursement module using Vue.js as part of the company's HRMS enhancements, involving workflow and database schema design.",
        "Facilitated cross-regional collaboration with consultants and developers in multiple regions, adapting the HRMS to meet regional operational requirements and compliance standards.",
        "Engaged with stakeholders to define HRMS requirements, translating business needs into detailed product specifications.",
      ],
    },
    {
      company: "MRC (HRMS) Limited",
      jobTitle: "Project Consultant",
      duration: "Aug 2015 - Apr 2017",
      jobDescriptions: [
        "Managed the implementation and enhancements of HRMS for over 20 companies, involving detailed requirement analysis, data mapping, and SQL scripting which resulted in a 30% increase in operational efficiency during data migration and reporting.",
        "Oversaw system integrations, including both application and data integration, which optimised processes and reduced redundancy in data handling.",
        "Refined user stories with development teams to ensure precise implementation of features, aligning closely with evolving business requirements and stakeholder expectations.",
      ],
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
      id="resume"
      className="text-slate-300 px-10 md:px-28 py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="pb-10 mb-10 border-b border-slate-100">
        <h1 className="font-black text-5xl">Experience</h1>
      </div>

      {jobExp.map((jobDetails, i) => (
        <Job JobDetails={jobDetails} key={i} />
      ))}
    </motion.section>
  );
}
