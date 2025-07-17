import { projects } from "@/data/projects";
import Header from "./components/reuseable-components/Header";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";


export default function RecentProjects() {
  return (
    <section id='recent-projects' className="py-10">
        <Header title="Recent Projects" />
        <div className="grid lg:grid-cols-2">
           
        {projects.map((project) => { return(
        <CardContainer className="inter-var" key={project.id}>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.projectTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.projectDescription}
          {project.projectTechStack}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={project.projectImage}
            loading="lazy"
            height="1000"
            width="900"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {project.projectStatus}
            
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
            View Project</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    )})};
    </div>
    </section>
  );
}