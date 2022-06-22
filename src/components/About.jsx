import React from "react";
import PrimaryHeading from "./PrimaryHeading";

export default function About() {
  const techStacks = [
    "HTML/CSS",
    "SASS",
    "Javascript",
    "Typescript",
    "React",
    "Vue",
    "Node",
    "Express",
    "MongoDB",
    "Tailwind",
  ];

  return (
    <div id="about" className="min-h-screen">
      <PrimaryHeading index={1}>About Me</PrimaryHeading>
      <br />
      <div className="flex flex-col space-y-8  lg:flex-row-reverse lg:space-y-0">
        <div className="h-96 w-full rounded border border-blue-200"></div>
        <div className="w-3/5 flex-shrink-0 text-lg text-gray-400 lg:mr-10">
          <p>
            Hi There, I'm Sanjay Khatri! I'm a web developer, residing in Nepal.
            I have serious passion for creating intuitive, dynamic user
            experiences. I have about a year and a half experience in the
            related fields of web developement and I always look forward to
            create something meaningfull and useful.
          </p>
          <br />
          <div>
            Here are some few technologies I’ve been working with recently:
          </div>
          <div className="grid w-full grid-cols-2">
            {techStacks.map((tech, index) => (
              <div key={index} className="mt-3 text-sm">
                <span className="mr-2 text-blue-300">•</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
