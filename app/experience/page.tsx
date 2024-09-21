"use client";

import { motion } from "framer-motion";
import Job from "@/components/Job/Job";

export default function Experience() {
  const jobExp = [
    {
      company: "Sopra Steria",
      jobTitle: "Software Engineer",
      duration: "Nov 2021 - Aug 2024",
      jobDescriptions: [
        "Next.js Web App Development: Developed a responsive web application for an energy company, enhancing the customer quoting journey using Next.js, which significantly improved user experience and interaction rates. Engineered comprehensive test suites using Jest and React Testing Library to ensure product quality.",
        "Agile Collaboration: Collaborated closely with UX/UI designers and backend developers to ensure seamless integration of front-end elements with server-side logic. Worked in a cross-functional team through the agile development process, ensuring efficient workflows and timely delivery of features.",
        "Data Visualization: Led the development of a web application for visualizing geospatial data for EV charging infrastructure, integrating Mapbox and Plotly API to provide advanced analytical capabilities on interactive maps, greatly enhancing data usability for strategic decision-making.",
        "Power Platform Automation: Utilized Microsoft Power Platform to develop web applications and automate cloud flows, enabling employees to efficiently manage their CVs for the internal resourcing team, significantly reducing manual processing time and increasing resource allocation efficiency.",
      ],
    },
    {
      company: "Computer And Technologies Holdings Limited",
      jobTitle: "Business Analyst",
      duration: "Sep 2017 - Feb 2021",
      jobDescriptions: [
        "Module Development Leadership: Spearheaded the development of an Expense Reimbursement module using Vue.js as part of the company's HRMS enhancements, involving workflow and database schema design, which streamlined the expense reimbursement and approval process, increasing user satisfaction by 25%.",
        "Stakeholder Engagement: Conducted in-depth stakeholder engagements to gather and define HRMS requirements, translating business needs into detailed product specifications that guided the development team.",
        "Cross-Regional Collaboration: Facilitated cross-regional collaboration with consultants and developers in multiple regions, adapting the HRMS to meet regional operational requirements and compliance standards.",
      ],
    },
    {
      company: "MRC (HRMS) Limited",
      jobTitle: "Project Consultant",
      duration: "Aug 2015 - Apr 2017",
      jobDescriptions: [
        "System Implementation Expertise: Managed the implementation and enhancements of HRMS for over 20 companies, involving detailed requirement analysis, data mapping, and the creation of SQL scripts, views, and stored procedures, which resulted in a 30% increase in operational efficiency during data migration and reporting.",
        "Integration Oversight: Oversaw system integrations, including both application and data integration, which optimized processes and reduced redundancy in data handling.",
        "User Story Refinement: Iteratively refined user stories with development teams to ensure precise implementation of features, aligning closely with evolving business requirements and stakeholder expectations.",
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
