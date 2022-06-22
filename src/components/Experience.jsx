import React from "react";

const workExperiences = [
  {
    company: "Softweb Developers",
    duration: "09/2022 - 04/2022",
    location: "Hetauda, Nepal",
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
    <div id="experience" className="flex flex-col space-y-8 py-24">
      <div className="">
        <span className="secondary-font text-2xl">2.</span>{" "}
        <span className="text-4xl font-bold text-gray-200">
          Where have i worked?
        </span>
      </div>

      <div className="lg:w-2/3">
        {workExperiences.map((exp, index) => (
          <div key={index}>
            <div className="text-2xl font-bold">
              <span className="text-white">@</span>
              <span> {exp.company} </span>
              <span>{`(${exp.location})`}</span>
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
