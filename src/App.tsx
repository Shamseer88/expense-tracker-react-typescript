import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PinEntry from "./pages/PinEntry";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PinEntry />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
