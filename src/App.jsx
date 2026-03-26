import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parceiros" element={<Partners />} />
    </Routes>
  );
}