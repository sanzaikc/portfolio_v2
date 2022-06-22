import React from "react";
import AppButton from "./AppButton";

export default function Header() {
  const links = [
    {
      name: "Intro",
      path: "",
    },
    {
      name: "About",
      path: "",
    },
    {
      name: "Experience",
      path: "",
    },
    {
      name: "Works",
      path: "",
    },
    {
      name: "Contact",
      path: "",
    },
  ];
  return (
    <div className="sticky top-0 bg-slate-900 py-6 shadow-lg">
      <div className="app-container flex items-center justify-between">
        <div className="secondary-font text-2xl font-semibold">S K</div>
        <ul className="flex items-center space-x-10 text-sm">
          {links.map((link, index) => (
            <a
              href={`/#${link.name.toLowerCase()}`}
              key={link.name}
              className="group flex cursor-pointer items-baseline space-x-2"
            >
              <span className="secondary-font">{index} .</span>
              <span className="font-semibold tracking-wider text-gray-500 group-hover:text-blue-300">
                {link.name}
              </span>
            </a>
          ))}
          <li>
            <AppButton sm>
              <a href="https://drive.google.com/uc?id=1QABoyC70dTtS3k75B-v0I93WfIpV6ibn">
                Resume
              </a>
            </AppButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
