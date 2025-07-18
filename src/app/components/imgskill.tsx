import { ParallaxScroll } from "./ui/parallax-scroll";

const images =[
  // Programming Languages (3)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  
  // Frontend Technologies (4)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  
  // Backend Technologies (3)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  
  // Databases (3)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  
  // DevOps & CI/CD (3)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  
  // Cloud Platforms (3)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  
  // Testing & Quality (2)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  
  // Project & Collaboration (3)
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
];

export default function ImgSkill() {
  return<ParallaxScroll images={images}  />;
}