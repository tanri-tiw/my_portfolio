import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Port from "./components/Port";
import About from "./Pages/About";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my_portfolio" element={<Port />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
