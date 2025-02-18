import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Works from "./Works";

type OverviewProps = {
  setShowOverview: (value: boolean) => void;
  setCurrentComponent: (value: string) => void;
};

const Overview = ({ setShowOverview, setCurrentComponent }: OverviewProps) => {
  return (
    <div>
      <About />
      <Works
        setShowOverview={setShowOverview}
        setCurrentComponent={setCurrentComponent}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Overview;
