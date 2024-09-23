import Image from "next/image";
import TechnologyList from "./TechnologyList";
import IconGitHub from "@/components/Icons/IconGitHub";
import IconExternal from "@/components/Icons/IconExternal";
import { memo } from "react";

interface ProjectDetail {
  name: string;
  technologyList: string[];
  description: string;
  liveURL?: string;
  githubURL?: string;
  imagePath: string;
}

function ProjectDetails({ projectList }: { projectList: ProjectDetail[] }) {
  return (
    <div className="py-5 gap-5 md:px-5 2xl:w-9/12">
      {projectList.map(
        (
          { name, technologyList, description, liveURL, githubURL, imagePath },
          i
        ) => (
          <div
            className="flex flex-col lg:flex-row gap-5 lg:gap-12 py-5"
            key={i}
          >
            <div className="mx-auto lg:w-600 lg:h-300 w-200 h-200">
              <Image
                src={imagePath}
                alt={`Screenshot of ${name} project`}
                width={600}
                height={300}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center gap-3 lg:text-start lg:w-1/2">
              <div className="text-2xl mb-3 font-black">{name}</div>
              <div className="text-sm">{description}</div>
              <TechnologyList technologyList={technologyList} />
              <div className="flex justify-center gap-5 mt-5 lg:mt-0">
                {githubURL && (
                  <IconGitHub
                    href={githubURL}
                    className="hover:brightness-125 transition duration-300"
                  >
                    <div className="font-mono">GitHub</div>
                  </IconGitHub>
                )}
                {liveURL && (
                  <IconExternal
                    href={liveURL}
                    className="hover:brightness-125 transition duration-300"
                  >
                    <div className="font-mono">Live</div>
                  </IconExternal>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default memo(ProjectDetails);
