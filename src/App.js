import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Archive } from "./pages/archive/Archive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archived" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
