import { Hero, About, Projects, Contact } from "./components"
import Skill from "./components/skills/Skill";

function App() {
  return <div className="App">
    <Hero />
    <About />
    <Skill />
    <Projects />
    <Contact />
  </div>;
}

export default App;
