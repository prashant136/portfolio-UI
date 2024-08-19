import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='w-screen h-screen'>
            <Header />
            <Intro />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
