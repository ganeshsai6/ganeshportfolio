"use client"

import React from 'react';

// Tech Skills Data
const techSkillsData = {
  programmingLanguages: [
    { name: "Java", url: "https://images.seeklogo.com/logo-png/15/1/java-logo-png_seeklogo-158094.png" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ],
  methodologies: [
    { name: "Agile", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Scrum", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
    { name: "TDD", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" }
  ],
  frontendTechnologies: [
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js 3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Webpack", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" }
  ],
  backendTechnologies: [
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Django", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Spring Boot", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "FastAPI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: ".NET Core", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Ruby on Rails", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" }
  ],
  databases: [
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Prisma ORM", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" }
  ],
  devopsCicd: [
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "GitHub Actions", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "GitLab CI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Terraform", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" }
  ],
  cloudPlatforms: [
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Azure", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" }
  ],
  testingQuality: [
    { name: "Jest", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "React Testing Library", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Cypress", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
    { name: "JUnit", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Mockito", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Postman", url: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "SonarQube", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" }
  ],
  projectCollaboration: [
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Bitbucket", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "Jira", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Trello", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
    { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe XD", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
    { name: "Slack", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" }
  ]
};

// Simple Tabs Component
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].value);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
              activeTab === tab.value
                ? 'bg-blue-500 text-white border-b-2 border-blue-500'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.find(tab => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

// Skills Content Component
type Skill = {
  name: string;
  url: string;
};

interface SkillsContentProps {
  skills: Skill[];
  title: string;
  bgGradient: string;
}

const SkillsContent = ({ skills, title, bgGradient }: SkillsContentProps) => {
  return (
    <div className={`w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ${bgGradient}`}>
      <p className="mb-6">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <img 
                src={skill.url} 
                alt={skill.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <span className="text-sm md:text-base font-medium mt-2 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export function TabsDemo() {
  const tabs = [
    {
      title: "Programming Languages",
      value: "programming",
      content: (
        <SkillsContent 
          skills={techSkillsData.programmingLanguages}
          title="Programming Languages"
          bgGradient="bg-gradient-to-br from-blue-500 to-purple-700"
        />
      ),
    },
    {
      title: "Methodologies",
      value: "methodologies",
      content: (
        <SkillsContent 
          skills={techSkillsData.methodologies}
          title="Methodologies"
          bgGradient="bg-gradient-to-br from-emerald-500 to-green-700"
        />
      ),
    },
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <SkillsContent 
          skills={techSkillsData.frontendTechnologies}
          title="Frontend Technologies"
          bgGradient="bg-gradient-to-br from-green-500 to-teal-700"
        />
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <SkillsContent 
          skills={techSkillsData.backendTechnologies}
          title="Backend Technologies"
          bgGradient="bg-gradient-to-br from-orange-500 to-red-700"
        />
      ),
    },
    {
      title: "Databases",
      value: "databases",
      content: (
        <SkillsContent 
          skills={techSkillsData.databases}
          title="Databases"
          bgGradient="bg-gradient-to-br from-purple-500 to-pink-700"
        />
      ),
    },
    {
      title: "DevOps & CI/CD",
      value: "devops",
      content: (
        <SkillsContent 
          skills={techSkillsData.devopsCicd}
          title="DevOps & CI/CD"
          bgGradient="bg-gradient-to-br from-indigo-500 to-blue-700"
        />
      ),
    },
    {
      title: "Cloud Platforms",
      value: "cloud",
      content: (
        <SkillsContent 
          skills={techSkillsData.cloudPlatforms}
          title="Cloud Platforms"
          bgGradient="bg-gradient-to-br from-cyan-500 to-blue-700"
        />
      ),
    },
    {
      title: "Testing & Quality",
      value: "testing",
      content: (
        <SkillsContent 
          skills={techSkillsData.testingQuality}
          title="Testing & Quality"
          bgGradient="bg-gradient-to-br from-yellow-500 to-orange-700"
        />
      ),
    },
    {
      title: "Collaboration",
      value: "collaboration",
      content: (
        <SkillsContent 
          skills={techSkillsData.projectCollaboration}
          title="Collaboration"
          bgGradient="bg-gradient-to-br from-pink-500 to-rose-700"
        />
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default TabsDemo;