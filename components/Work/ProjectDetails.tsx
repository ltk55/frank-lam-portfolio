import Image from "next/image";
import TechnologyList from "./TechnologyList";
import IconGitHub from "../Icons/IconGitHub";
import IconExternal from "../Icons/IconExternal";

interface ProjectDetail {
  name: string;
  technologyList: string[];
  description: string;
  liveURL: string;
  githubURL: string;
  imagePath: string;
}

interface Props {
  projectList: ProjectDetail[];
}

const ProjectDetails: React.FC<Props> = ({ projectList }) => {
  return (
    <div className="py-5 gap-5 md:px-5 2xl:w-9/12">
      {projectList.map((project, i) => (
        <div className="flex flex-col lg:flex-row gap-5 py-5" key={i}>
          <div className="mx-auto lg:w-600 lg:h-300 w-200 h-200">
            <Image
              src={project.imagePath}
              alt={project.name}
              width={600}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center gap-3 lg:text-start">
            <div className="text-xl mb-3 font-black">{project.name}</div>
            <div className="text-sm">{project.description}</div>
            <TechnologyList technologyList={project.technologyList} />
            <div className="flex justify-center gap-5 mt-5 lg:mt-0">
              <IconGitHub href={project.githubURL} />
              <IconExternal href={project.liveURL} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
