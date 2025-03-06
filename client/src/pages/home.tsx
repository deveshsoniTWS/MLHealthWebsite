
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import VideoShowcase from "@/components/VideoShowcase";
import TimeSavedClock from "@/components/TimeSavedClock";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <TimeSavedClock/>
        <Products />
        <VideoShowcase/>
        <Achievements />
        <Testimonials />
        <Chatbot />
        <Contact />
      </main>
    </div>
  );
}
