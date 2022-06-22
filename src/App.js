import AppLayout from "./layouts/AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Sanjay Khatri";
  }, []);

  return (
    <AppLayout>
      <Header />
      <div className="app-container px-4 lg:px-0">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </AppLayout>
  );
}

export default App;
