import Navigation from "./components/overview/Navigation";
import Hero from "./components/overview/Hero";
import { useState } from "react";
import Overview from "./components/overview";
import CaseComponent from "./components/case";

function App() {
  const [showOverview, setShowOverview] = useState<boolean>(true);
  const [currentComponent, setCurrentComponent] = useState<string>("overview");

  const renderComponent = () => {
    switch (currentComponent) {
      case "overview":
        return (
          <Overview
            setShowOverview={setShowOverview}
            setCurrentComponent={setCurrentComponent}
          />
        );
      default:
        return (
          <CaseComponent
            currentComponent={currentComponent}
            setShowOverview={setShowOverview}
            setCurrentComponent={setCurrentComponent}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      {showOverview ? <Hero /> : null}
      {renderComponent()}
    </div>
  );
}

export default App;
