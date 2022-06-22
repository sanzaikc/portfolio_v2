import React from "react";

import Profile from "../assets/profile.jpg";
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
    <div id="about" className="min-h-screen pb-20 lg:pb-0">
      <PrimaryHeading index={1}>About Me</PrimaryHeading>
      <br />
      <div className="flex flex-col space-y-8  lg:flex-row-reverse lg:space-y-0">
        <div className="relative h-72 w-full rounded border border-blue-400 lg:h-[400px] lg:w-80">
          <div className="absolute inset-0 bg-blue-600 bg-opacity-40 hover:bg-opacity-0"></div>
          <img
            src={Profile}
            alt="Profile"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="w-full flex-shrink-0 text-lg text-gray-400 lg:mr-10 lg:w-3/5">
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
