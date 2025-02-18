const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-around pt-8 bg-white bg-opacity-80 z-50">
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
  );
};

export default Navigation;
