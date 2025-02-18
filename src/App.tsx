import { Mail } from "lucide-react";
import { projects } from "./constants";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="h-screen flex flex-col justify-between">
        {/* Navigation */}
        <nav className="flex justify-around py-8">
          <a href="#about" className="hover:opacity-70">
            ABOUT
          </a>
          <a href="#works" className="hover:opacity-70">
            LATEST WORKS
          </a>
          <a href="#contact" className="hover:opacity-70">
            CONTACT
          </a>
        </nav>

        {/* Hero Section */}
        <div className="flex justify-around flex-grow items-center">
          <h1 className="text-6xl font-bold mb-2">
            MARIIA
            <br />
            BUSHMAKINA
            <br />
            UI/UX
            <br />
            DESIGNER
          </h1>
          <img src="../assets/images/profile.png" alt="Profile" />
        </div>

        <div className="flex justify-around py-4 px-8">
          <p>2025</p>
          <p>
            REACH OUT
            <br />
            MARIIABUSHMAKINA@GMAIL.COM
          </p>
          <p>SPB [TIME +3]</p>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="px-8 py-16 h-screen flex flex-col">
        <div className="bg-black h-[1px] w-[95%] mx-auto mb-6"></div>
        <div className="flex px-12 flex-grow">
          <h2 className="text-xl mb-6 w-1/3">
            <strong>[ABOUT]</strong>
          </h2>
          <div className="w-2/3">
            <p className="text-lg mb-4">Hello, I'm Mariia.</p>
            <p className="text-lg mb-4">
              A passionate and visionary UI/UX designer with 3+ years of
              experience turning bold ideas into intuitive digital experiences
              that captivate users. Known for crafting visually stunning and
              user-centric designs, I bring a unique blend of creativity and
              strategic thinking to every project.
            </p>
            <p className="text-lg mb-4">
              Key achievements include developing a unified design system for a
              messaging platform, enhancing user engagement, and streamlining
              workflows for diverse clients. Beyond hard skills, I excel in team
              collaboration, delivering impactful presentations, and resolving
              challenges with ease.
            </p>
            <p className="text-lg mb-4">
              [I’m dedicated to designing experiences that leave a lasting
              impression — where innovation meets elegance, and functionality
              meets delight]
            </p>
          </div>
        </div>
        <div className="flex justify-center items-end h-16">
          NICE TO MEET YOU
        </div>
      </section>

      {/* Works Section */}
      <section
        id="works"
        className="px-12 pb-16 pt-6 bg-[#1B1B1B] text-white h-screen flex flex-col"
      >
        <div className="bg-white h-[1px] w-[95%] mx-auto mb-6"></div>
        <div className="mx-auto flex justify-around items-start flex-grow">
          <h2 className="text-xl ml-10 mr-24 w-1/3 whitespace-nowrap">
            [LATEST WORKS]
          </h2>

          <div className="flex justify-between mr-7">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                altText={project.altText}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-end h-16">
          THESE ARE THE CASES I WORKED ON
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pl-48 py-1">
        <div className="">
          <h2 className="text-6xl font-bold mb-8">
            EMAIL
            <br />
            TELEGRAM
            <br />
            LINKEDIN
          </h2>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <span>MARIABUSHMAKINA@GMAIL.COM</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 flex justify-between text-sm">
        <p className="ml-48">MARIIA.BUSHMAKINA'25</p>
        <p className="mr-48">ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}

export default App;
