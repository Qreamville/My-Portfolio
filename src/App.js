import { Hero, About, Projects } from "./components"
import Skill from "./components/skills/Skill";

function App() {
  return <div className="App">
    <Hero />
    <About />
    <Skill />
    <Projects />
  </div>;
}

export default App;
