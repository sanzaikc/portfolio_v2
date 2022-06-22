import React from "react";
import PrimaryHeading from "./PrimaryHeading";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    name: "Srijansil Nepal Samaj (SNS)",
    description:
      "A website & CMS for a non-profit organization for Nepalese residing on Canada.",
    tags: ["Vue", "Element-UI"],
    link: "https://snscanada.ca",
  },
  {
    name: "Allied Power Engineering",
    description: "A website & CMS for transformer manufacturing industry.",
    tags: ["Vue", "Element-UI"],
    link: "https://alliedpowereng.com/",
  },
  {
    name: "Sigma Auto Nepal",
    description:
      "A ecommerce portal for supply and transactions of auto parts.",
    tags: ["Vue", "Vuetify"],
    link: "https://sigmaautonepal.com",
  },
  {
    name: "Inventory Management System",
    description: "An inventory management system.",
    tags: ["Vue"],
  },
  {
    name: "Chaos",
    description:
      "A Simple blog that leverage the power of GraphCMS for the contents",
    tags: ["GraphQL", "React", "TypeScript"],
    link: "https://sanzai-graph-cms-blog.vercel.app/",
    github: "https://github.com/sanzaikc/graphCMS-blog",
  },
  {
    name: "Natour",
    description:
      "A Node application made following the tutorial, while learning Node JS",
    tags: ["Node", "Express"],
    github: "https://github.com/sanzaikc/Natour",
  },
  {
    name: "Personal Portfolio V1",
    description:
      "Portfolio application version 1, consist user management as well as blog system.",
    tags: ["Node", "Express", "React"],
    github: "https://github.com/sanzaikc/porfolio_server",
  },
  {
    name: "Personal Portfolio V2",
    description: "Portfolio application version 2",
    tags: ["React", "Tailwind"],
    github: "https://github.com/sanzaikc/portfolio_v2",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <PrimaryHeading index={3}>Some projects I've worked in</PrimaryHeading>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
