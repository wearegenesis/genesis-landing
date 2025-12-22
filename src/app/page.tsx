import Header from "@/components/sections/Header";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <ThemeToggle />
    </>
  );
}
