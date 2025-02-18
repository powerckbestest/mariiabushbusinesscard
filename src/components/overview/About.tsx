const About = () => {
  return (
    <section id="about" className="px-8 py-16 h-screen flex flex-col">
      <div className="bg-black h-[1px] w-[95%] mx-auto mb-6"></div>
      <div className="flex flex-grow justify-between">
        <h2 className="text-xl mb-6 px-10">
          <strong>[ABOUT]</strong>
        </h2>
        <div className="w-2/3 pr-12">
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
      <div className="flex justify-center items-end h-16">NICE TO MEET YOU</div>
    </section>
  );
};

export default About;
