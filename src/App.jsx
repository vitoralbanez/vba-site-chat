import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import ChatVBA from "./pages/ChatVBA";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parceiros" element={<Partners />} />
      <Route path="/chat-vba" element={<ChatVBA />} />
    </Routes>
  );
}