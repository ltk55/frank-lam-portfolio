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
    <div className="py-5 gap-5 md:px-5 2xl:w-9/12">
      {projectList.map((project, i) => (
        <div className="flex gap-16 py-5" key={i}>
          <Image
            className="hidden md:block"
            src={project.imagePath}
            alt={project.name}
            width={600}
            height={300}
          />
          <div>
            <div className="text-xl mb-3 font-black">{project.name}</div>
            <Image
              className="block md:hidden"
              src={project.imagePath}
              alt={project.name}
              width={200}
              height={200}
            />
            <div className="text-sm">{project.description}</div>

            <TechnologyList technologyList={project.technologyList} />

            <div className="flex gap-5 mt-5">
              <IconGitHub href={project.githubURL} />
              <IconExternal href={project.liveURL} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
