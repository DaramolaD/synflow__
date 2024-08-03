import Benefit from "@/components/organism/Benefit";
import Features from "@/components/organism/Features";
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";

export default function Home() {
  return (
    <main className="grid gap-16">
      <Header />
      <Hero />
      <Features />
      <Benefit />
    </main>
  );
}
