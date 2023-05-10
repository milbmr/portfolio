import Image from "next/image";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import About from "@/components/about";
import Services from "@/components/sevices";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="container">
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
