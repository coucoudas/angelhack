import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./page";
import About from "./about";
import _404 from "./404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<_404 />} />
      </Routes>
    </BrowserRouter>
  );
}
