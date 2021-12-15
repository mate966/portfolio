import "./css/main.css";

import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Hire from "./Components/Hire";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

function App() {
    return (
        <div className="app">
            <Header />
            <About />
            <Skills />
            <Portfolio />
            <Hire />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
