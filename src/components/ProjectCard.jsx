import React from "react";

import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as ProjectIcon } from "../assets/project.svg";
import { ReactComponent as ShareIcon } from "../assets/share.svg";

export default function ProjectCard({ name, description, link, github, tags }) {
  return (
    <div className="group flex h-80 w-full flex-col justify-between rounded bg-slate-800 p-6 shadow transition-transform duration-200 ease-out lg:hover:-translate-y-2">
      <div>
        <div className="flex items-center justify-between">
          <ProjectIcon className="-mt-3 h-10 font-bold" />
          <div className="flex items-center  space-x-4">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <GithubIcon className="h-10" />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <ShareIcon className="-mt-0.5 h-7" />
              </a>
            )}
          </div>
        </div>
        <br />
        <div className="mb-2 text-lg font-bold text-gray-400 group-hover:text-blue-400">
          {name}
        </div>
        <div className="text-gray-500">{description}</div>
        <br />
      </div>
      {tags.length && (
        <div className="flex space-x-2 text-xs">
          {tags.map((tag, index) => (
            <div key={index} className="rounded bg-slate-900 px-2 py-1">
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
