type ProjectProps = {
  title: string;
  description: string;
  imageSrc: string;
  id: string;
  setShowOverview: (value: boolean) => void;
  setCurrentComponent: (value: string) => void;
};

const ProjectCard = ({
  title,
  description,
  imageSrc,
  id,
  setShowOverview,
  setCurrentComponent,
}: ProjectProps) => {
  return (
    <div className="flex flex-col w-1/5">
      <div className="flex-grow">
        <img src={imageSrc} />
        <h3 className="font-bold mb-2 mt-4">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
      </div>
      <button
        className="bg-white text-black rounded-sm py-1.5 hover:bg-slate-50 text-xs"
        onClick={() => {
          setShowOverview(false);
          setCurrentComponent(id);
        }}
      >
        [See more]
      </button>
    </div>
  );
};

export default ProjectCard;
