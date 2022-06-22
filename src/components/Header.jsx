import React, { useEffect, useState } from "react";

import AppButton from "./AppButton";

const navLinks = [
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
    name: "Projects",
    path: "",
  },
  {
    name: "Contact",
    path: "",
  },
];

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`transform bg-slate-900 py-6 shadow-lg transition-all duration-300 ease-in-out ${
        show ? "sticky top-0 translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="app-container flex items-center justify-between">
        <div className="secondary-font text-2xl font-semibold">S K</div>
        <ul className="flex items-center space-x-10 text-sm">
          {navLinks.map((link, index) => (
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
