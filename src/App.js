import AppLayout from "./layouts/AppLayout";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <AppLayout>
      <Header />
      <div className="app-container">
        <Intro />
      </div>
    </AppLayout>
  );
}

export default App;
