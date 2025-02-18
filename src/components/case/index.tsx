import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../../constants";

type CaseComponentProps = {
  currentComponent: string;
  setShowOverview: (value: boolean) => void;
  setCurrentComponent: (value: string) => void;
};

const CaseComponent = ({
  currentComponent,
  setShowOverview,
  setCurrentComponent,
}: CaseComponentProps) => {
  const project = projects.find((p) => p.id === currentComponent);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-28">
      <header>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            <button
              className="flex items-center text-gray-600 hover:text-gray-900 transition"
              onClick={() => {
                setShowOverview(true);
                setCurrentComponent("overview");
              }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Back</span>
            </button>
            <a
              href={project.figmaLink}
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">View project in Figma</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-6">
        {project ? (
          <>
            <h1 className="text-6xl font-bold mb-16">{project.title}</h1>

            <section className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="font-medium text-gray-900">[OVERVIEW]</div>
                <div className="md:col-span-2">
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            </section>

            <div className="bg-black h-[1px] mx-auto mb-6"></div>

            <section className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="font-medium text-gray-900">[CHALLENGES]</div>
                <div className="md:col-span-2">
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-black h-[1px] mx-auto mb-6"></div>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="font-medium text-gray-900">[SOLUTIONS]</div>
                <div className="md:col-span-2 space-y-2">
                  {project.solutions.map((solution, index) => (
                    <p key={index} className="text-gray-700">
                      {solution}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="min-h-screen flex items-center justify-center text-gray-600">
            <p>Project not found</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CaseComponent;
