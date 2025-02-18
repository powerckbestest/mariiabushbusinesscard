type Project = {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
};

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageSrc,
  altText,
}) => {
  return (
    <div className="flex flex-col w-1/5">
      <div className="flex-grow">
        <img src={imageSrc} alt={altText} />
        <h3 className="font-bold mb-2 mt-4">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
      </div>
      <button className="bg-white text-black rounded-sm py-1 hover:bg-slate-50">
        [See more]
      </button>
    </div>
  );
};

export default ProjectCard;
