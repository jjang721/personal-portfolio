
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="NavBar">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
