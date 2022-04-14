import "./App.css";
import Aboutme from "./components/Aboutme";
import ResponsiveAppBar from "./components/Navbar";
import PageStart from "./components/PageStart";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <PageStart />
      <Aboutme />
    </div>
  );
}

export default App;
