import JobDesc from "./JobDesc";

interface JobDetails {
  company: string;
  jobTitle: string;
  duration: string;
  jobDescriptions: string[];
}

export default function Job({ JobDetails }: { JobDetails: JobDetails }) {
  const { company, jobTitle, duration, jobDescriptions } = JobDetails;

  return (
    <div className="flex flex-col lg:flex-row py-5 gap-5 lg:px-5">
      <div className="min-w-[250px]">
        <div className="text-xl font-bold">{jobTitle}</div>
        <h3 className="font-light">{company}</h3>
        <small className="text-xs">{duration}</small>
      </div>

      <ul>
        {jobDescriptions.map((jobDesc, i) => (
          <JobDesc key={i} content={jobDesc} />
        ))}
      </ul>
    </div>
  );
}
