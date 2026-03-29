import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import ChatVBA from "./pages/ChatVBA";
import Contact from "./pages/Contato";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/chat-vba" element={<ChatVBA />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </>
    
  );
}