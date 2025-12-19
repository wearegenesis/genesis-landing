import Header from "@/ui/Header";
import ThemeToggle from "@/components/ThemeToggle";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <ThemeToggle />
    </>
  );
}
