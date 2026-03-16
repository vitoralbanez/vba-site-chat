import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ChatSolutions from "./pages/ChatSolutions"



export default function App() {
  return (
        <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/chat" element={<ChatSolutions />} />

    </Routes>
  )
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
    
  );
}
