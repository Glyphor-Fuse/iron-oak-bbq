import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PitProcess from "@/components/PitProcess";
import MenuPreview from "@/components/MenuPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div id="process">
        <PitProcess />
      </div>
      <div id="menu">
        <MenuPreview />
      </div>
      <div id="location">
        <Footer />
      </div>
    </main>
  );
};

export default Index;