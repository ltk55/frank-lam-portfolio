import JobDesc from "./JobDesc";

interface JobExp {
  company: string;
  jobTitle: string;
  duration: string;
  jobDescriptions: string[];
}

export default function JobDetails({ jobExp }: { jobExp: JobExp }) {
  const { company, jobTitle, duration, jobDescriptions } = jobExp;

  return (
    <div className="flex flex-col md:flex-row py-5 gap-5">
      <div className="min-w-[250px]">
        <div>{jobTitle}</div>
        <h3>{company}</h3>
        <small>{duration}</small>
      </div>

      <ul>
        {jobDescriptions.map((jobDesc, i) => (
          <JobDesc key={i} content={jobDesc} />
        ))}
      </ul>
    </div>
  );
}
