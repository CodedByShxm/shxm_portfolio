import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Art from "@/components/Art";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Art />
        <About />
        <Contact />
      </main>
    </>
  );
}
