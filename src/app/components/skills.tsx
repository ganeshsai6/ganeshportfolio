import { TabsDemo } from "./tabsdemo";

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 ">Skills</h2>
        <TabsDemo />
      </div>
    </section>
  );
}