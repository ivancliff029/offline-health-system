import Image from "next/image";
import Navbar from "./components/Navbar";
import FullScreenSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <FullScreenSection />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
      </div><div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      </div>
    </>
    
  );
}
