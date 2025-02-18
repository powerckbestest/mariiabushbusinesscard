const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex justify-around w-full">
        <h1 className="text-6xl font-bold mb-4">
          MARIIA
          <br />
          BUSHMAKINA
          <br />
          UI/UX
          <br />
          DESIGNER
        </h1>
        <img
          src="../assets/images/profile.png"
          alt="Profile"
          className="max-w-xs mt-4"
        />
      </div>
      <div className="flex justify-around w-full absolute bottom-4 px-8">
        <p>2025</p>
        <p>
          REACH OUT
          <br />
          MARIIABUSHMAKINA@GMAIL.COM
        </p>
        <p>SPB [TIME +3]</p>
      </div>
    </div>
  );
};

export default Hero;
