import { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </Suspense>
  );
}

export default App;