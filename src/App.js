import Header from "./components/Header";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <Header />
      <div className="app-container">Portfolio</div>
    </AppLayout>
  );
}

export default App;
