import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import ChatVBA from "./pages/ChatVBA";
import Contact from "./pages/Contato";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/chat-vba" element={<ChatVBA />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
