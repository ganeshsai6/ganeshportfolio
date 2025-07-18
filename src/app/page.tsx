import { navItems } from "@/data/navitems";
import About from "./components/about";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import { FloatingNav } from "./components/ui/floating-navbar";
import Contact from "./Contact";
import RecentProjects from "./RecentProjects";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex justify-center mx-auto
    px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <About />
        <RecentProjects />
        <Skills />
        <Contact />
      </div>
    </main>
      
  );
}
