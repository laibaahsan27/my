import React, { useRef } from "react";
import "./App.css";
import HERO from './components/hero/Hero1.jsx';
import ABOUT from './components/about/about.jsx';
import FOOTER from './components/footer/footer.jsx';
import PROJECTS from './components/Projects/index.jsx';

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HERO scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} />
      <div ref={projectsRef}>
        <PROJECTS />
      </div>
      <div ref={aboutRef}>
        <ABOUT />
      </div>
      <FOOTER />
    </div>
  );
}

export default App;
