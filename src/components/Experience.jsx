import React from "react";
import PrimaryHeading from "./PrimaryHeading";

const workExperiences = [
  {
    company: "Softweb Developers",
    duration: "09/2022 - 04/2022",
    location: "Hetauda, Nepal",
    website: "https://softwebdevelopers.com",
    responsibilities: [
      "Implemented websites, landing pages from concept to implementation.",
      "Standardized all output with new, responsive and mobile-first approach and strategies.",
      "Collaboratedwith project team members to implement new feature developments.",
      "Focused on elighting clients with new and user-friendly User Interface.",
      "Skilled clean, secure code based on client's need. Develop and implement application components using modern framework like VueJS for rapid and robust developement experience.",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex h-screen">
      <div className="hidden lg:block lg:w-1/3"></div>
      <div className="flex w-full flex-col space-y-8 lg:w-2/3">
        <PrimaryHeading index={2}>Where have i worked?</PrimaryHeading>
        {workExperiences.map((exp, index) => (
          <div key={index}>
            <div className="text-2xl font-bold">
              <span className="text-gray-400">@</span>
              <a href={exp.website} target="_blank" rel="noreferrer">
                <span className="underline">{exp.company}</span>{" "}
                <span>{`(${exp.location})`}</span>
              </a>
            </div>
            <div className="text-sm italic text-gray-500">{exp.duration}</div>
            <br />
            <ul className="list-disc text-lg">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="list-inside text-gray-400 ">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
