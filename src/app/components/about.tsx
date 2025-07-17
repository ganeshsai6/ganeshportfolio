import Image from "next/image";
import Header from "./reuseable-components/Header";

export default function About() {
  return (
    <section id='about' className="py-10">
      <Header title="About Me" />
      <div className="grid gap-4 items-center md:[grid-template-columns:1fr_2fr]">
        <div>
            <Image src="/images/aboutimg.JPG" alt="about image"width={500} height={500} 
        className="w-full h-80 md:h-120 object-cover rounded-lg"/>
        </div>
        <div className="md:text-xl text-neutral-600 dark:text-neutral-300">
            <p className="mt-3 mb-5">Full Stack Developer with 3.5+ years of experience building enterprise web applications 
                across healthcare and SaaS industries. Currently pursuing a Master &apos;s in Computer Science at the University of Dayton 
                while developing HIPAA-compliant microservices and scalable platforms at Highmark that serve over 1 million users. 
                Proven track record of delivering measurable results, including 30% faster processing times and 40% improved user engagement.</p>
                 <p className="mt-3 mb-5">Skilled in React.js, Node.js, Java Spring Boot, and AWS cloud services with expertise in microservices architecture,
                     CI/CD pipelines, and machine learning integration. Passionate about solving complex technical 
                    challenges and building user-focused solutions that drive business impact in fast-paced, collaborative environments.</p>
        </div>
      </div>
    </section>
  );
}