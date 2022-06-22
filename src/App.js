import AppLayout from "./layouts/AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Works from "./components/Works";

function App() {
  return (
    <AppLayout>
      <Header />
      <div className="app-container">
        <Intro />
        <About />
        <Experience />
        <Works />
        <Contact />
        <Footer />
      </div>
    </AppLayout>
  );
}

export default App;
