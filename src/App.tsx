import { Mail, MessageSquare, Linkedin } from "lucide-react";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#1C1C1C] min-h-screen text-white font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-sm z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">BUSHM(A)KINA</div>
          {["about", "projects", "shorts", "contacts"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="text-[12vw] leading-none font-bold font-anton">
            PRODUCT DESIGNER
          </h1>
          <div className="flex justify-between mt-8">
            <p>made by bushmakinamariia</p>
            <p>(my story)</p>
            <p>2024 edition</p>
          </div>
          <p className="text-center mt-32 text-xl">
            (turning imagination into intuitive digital realities)
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-8 py-20 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[8vw] font-bold mb-12 font-anton">ABOUT</h2>
          <p className="text-right text-xl mb-16">[nice to meet you]</p>
          <div className="space-y-8 text-xl">
            <p>Hello, I'm Mariia.</p>
            <p>
              A passionate and visionary UI/UX designer with 3+ years of
              experience turning bold ideas into intuitive digital experiences
              that captivate users. Known for crafting visually stunning and
              user-centric designs, I bring a unique blend of creativity and
              strategic thinking to every project.
            </p>
            <p>
              Key achievements include developing a unified design system for a
              messaging platform, enhancing user engagement, and streamlining
              workflows for diverse clients. Beyond hard skills, I excel in team
              collaboration, delivering impactful presentations, and resolving
              challenges with ease.
            </p>
          </div>
          <p className="text-center mt-16 text-xl max-w-3xl mx-auto">
            [I'm dedicated to designing experiences that leave a lasting
            impression—where innovation meets elegance, and functionality meets
            delight]
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[8vw] font-bold font-anton">PROJECTS</h2>
          <p className="text-center mt-8 text-xl">Coming soon!</p>
        </div>
      </section>

      {/* Shorts Section */}
      <section id="shorts" className="min-h-screen px-8 py-20 bg-[#755C3B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[8vw] font-bold mb-8 font-anton">SHORTS</h2>
          <p className="text-right text-xl mb-16">
            [here are my small pet projects or works that are not extensive]
          </p>
          <p className="text-xl">They will be available soon!</p>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="min-h-screen px-8 py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[8vw] font-bold mb-8 font-anton">CONTACTS</h2>
          <p className="text-right text-xl mb-16">
            [i'll be glad to create something amazing together]
          </p>
          <div className="space-y-6">
            <a
              href="mailto:mariya20112004@gmail.com"
              className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
            >
              <Mail size={24} />
              mariya20112004@gmail.com
            </a>
            <a
              href="https://t.me/iwanxss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
            >
              <MessageSquare size={24} />
              iwanxss
            </a>
            <a
              href="https://ru.linkedin.com/in/mariia-bushmakina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors"
            >
              <Linkedin size={24} />
              mariia-bushmakina
            </a>
          </div>
          <p className="text-center mt-16 text-xl">
            [let's collaborate! don't hesitate to get in touch]
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
