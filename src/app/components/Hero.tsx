import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export default function Hero(){
    return(
        <section id="home">
            <div className="overflow-hidden relative h-[90vh] lg">
                <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:radial-gradient(black_1px,transparent_0)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-black"></div>
      <Spotlight className="absolute top-10 left-10 h-full w-full" fill="white" />
        <Spotlight className="absolute top-60 left-50 h-full w-full" fill="white" />
        <Spotlight className="absolute top-20 right-30 h-full w-full" fill="orange" />
        <Spotlight className="absolute bottom-20 right-80 h-full w-full" fill="gray" />
      <div className="z-50">
        <h2 className="text-neutral-600 dark:text-neutral-300 uppercase text-xl text-center ">Fullstack Devloper</h2>
        <TextGenerateEffect words="Building digital experiences from concept to deployment" className="text-center"></TextGenerateEffect>
        <p className="text-center text-neutral-600 dark:text-neutral-300 md:tracking-wider my-8 text-2xl"> Hello I am Ganesh Sai Alla A Full Stack Devloper.</p>
        <div className="flex justify-center items-center gap-4 mt-8">
          <a
            href="#contact"
            className="px-8 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-gray-700 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
            </div>
        </section>
    )
}