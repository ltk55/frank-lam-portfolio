import Image from "next/image";
import TechnologyList from "./TechnologyList";
import IconGitHub from "../Icons/IconGithub";
import IconExternal from "../Icons/IconExternal";

interface ProjectDetails {
  name: string;
  technologyList: string[];
  description: string;
  liveURL: string;
  githubURL: string;
  imagePath: string;
}

export default function ProjectDetails({
  projectList,
}: {
  projectList: ProjectDetails[];
}) {
  return (
    <div className="py-5 gap-5">
      {projectList.map((project, i) => (
        <div className="flex gap-5 py-5" key={i}>
          <Image
            className="hidden md:block"
            src={project.imagePath}
            alt={project.name}
            width={500}
            height={500}
          />
          <div>
            <div>{project.name}</div>
            <Image
              className="block md:hidden"
              src={project.imagePath}
              alt={project.name}
              width={200}
              height={200}
            />
            <div>{project.description}</div>

            <TechnologyList technologyList={project.technologyList} />

            <div className="flex gap-5">
              <IconGitHub herf={project.githubURL} />
              <IconExternal herf={project.githubURL} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
