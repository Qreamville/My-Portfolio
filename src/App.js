import { Hero, About, Projects, Contact, Footer } from "./components"
import Skill from "./components/skills/Skill";

function App() {
  return <div className="App">
    <Hero />
    <About />
    <Skill />
    <Projects />
    <Contact />
    <Footer />
  </div>;
}

export default App;
