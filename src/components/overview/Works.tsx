import { projects } from "../../constants";
import ProjectCard from "./ProjectCard";

type WorksProps = {
  setShowOverview: (value: boolean) => void;
  setCurrentComponent: (value: string) => void;
};

const Works = ({ setShowOverview, setCurrentComponent }: WorksProps) => {
  return (
    <section
      id="works"
      className="px-12 pb-16 pt-6 bg-[#1B1B1B] text-white flex flex-col"
    >
      <div className="bg-white h-[1px] w-[95%] mx-auto mb-6"></div>
      <div className="mx-auto flex justify-around items-start flex-grow">
        <h2 className="text-xl ml-10 mr-24 w-1/3 whitespace-nowrap">
          <strong>[LATEST WORKS]</strong>
        </h2>
        <div className="flex justify-between mr-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              id={project.id}
              setShowOverview={setShowOverview}
              setCurrentComponent={setCurrentComponent}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-end h-16">
        THESE ARE THE CASES I WORKED ON
      </div>
    </section>
  );
};

export default Works;
