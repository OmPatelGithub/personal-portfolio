import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Components/NavBar";
import { Test } from "./Components/test";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { JudyBanner } from "./Components/JudyBanner";
import AnimatedCursor from "react-animated-cursor";
import AnimatedMouseCursor from './Components/AnimCursor';

function App() {
  return (
    <div className="App">
      
      <AnimatedCursor 
        style={{ zIndex: 2000 }}
        innerSize={8}
        outerSize={30}
        color='68, 238, 255'  // Teal color (adjust as needed)
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <JudyBanner /> */}
    </div>
  );
}

export default App;
