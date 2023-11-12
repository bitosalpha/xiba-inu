import Image from "next/image";
import Navbar from "@/components/general/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Staking from "@/components/home/Staking";
import Particles from "@/components/Particles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${montserrat.className} overflow-hidden relative`}>
      <div className="absolute -z-10 overflow-x-hidden w-screen h-screen">
        <Particles />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Staking />
    </main>
  );
}
