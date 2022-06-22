import React from "react";

export default function Header() {
  const links = [
    {
      name: "About",
      path: "",
    },
    {
      name: "Experience",
      path: "",
    },
    {
      name: "Work",
      path: "",
    },
    {
      name: "Contact",
      path: "",
    },
  ];
  return (
    <div className="py-6 shadow-lg">
      <div className="app-container flex items-center justify-between">
        <div className="secondary-font text-2xl font-semibold">S K</div>
        <ul className="flex items-center space-x-10 text-sm">
          {links.map((link, index) => (
            <li
              key={link.name}
              className="group flex cursor-pointer items-baseline space-x-2"
            >
              <span className="secondary-font">{index} .</span>
              <span className="font-semibold tracking-wider text-gray-500 group-hover:text-blue-300">
                {link.name}
              </span>
            </li>
          ))}
          <li>
            <button className="rounded border-2 border-blue-300 px-4 py-2 font-semibold">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
