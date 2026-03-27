import "../styles/chat.css";
import Navbar from "../components/layout/Navbar";

import ChatVBAHero from "../components/chatvba/ChatVBAHero";
import ChatVBAOverview from "../components/chatvba/ChatVBAOverview";
import ChatVBABenefits from "../components/chatvba/ChatVBABenefits";
import ChatVBATarget from "../components/chatvba/ChatVBATarget";
import ChatVBACTA from "../components/chatvba/ChatVBACTA";

export default function ChatVBA() {
  return (
    <>
        <Navbar />
        <main className="chat-vba-page">
            <ChatVBAHero />
            <ChatVBAOverview />
            <ChatVBABenefits />
            <ChatVBATarget />
            <ChatVBACTA />
        </main>    
    </>
  );
}