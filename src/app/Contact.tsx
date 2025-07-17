import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="relative flex-col flex h-[20rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-3xl md:text-5xl font-bold text-transparent text-center sm:text-7xl">
        Lets &apos;s elevate your brand.
      </p>
      <p className="text-center text-neutral-500 dark:text-neutral-400 text-sm md:text-base mt-1 width-300">
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.{<br/>} Whether you have a question,
        want to collaborate, or just want to say hello, feel free to reach out!
      </p>
    <div className="my-6  mt-20 flex justify-center items-center">
            <a href="#" className="px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white ">
                Let&apos;s Connect
            </a>
        </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center py-6">

    </div>
    <div className="flex justify-center items-center space-x-4">
        <a href="https://github.com/ganeshsai6" className="rounded-full bg-gray-25 h-12 w-12 flex justify-center items-center text-gray-600
         dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 mx-2">
        <IconBrandGithub className="h-12 w-12 text-black dark:text-neutral-50 " /></a>
        <a href="https://www.linkedin.com/in/ganeshsaialla/" className="rounded-full bg-gray-25 h-12 w-12 flex justify-center items-center text-gray-600
         dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 mx-2">
        <IconBrandLinkedin className="h-12 w-12 text-black dark:text-neutral-50 " />
        </a>
    </div>
    

    </section>
  );
}   