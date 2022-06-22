import React, { useEffect, useState } from "react";

import AppButton from "./AppButton";
import Logo from "../assets/signature.png";

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
      className={`container z-10 mx-auto hidden transform bg-slate-900 py-6 shadow-lg transition-all duration-300 ease-in-out lg:block ${
        show ? "sticky top-0 translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" flex items-center justify-between lg:px-20">
        {/* <div className="text-2xl font-semibold">K S</div> */}
        <img src={Logo} alt="Logo" className="h-14 object-cover" />
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
            <a
              href="https://drive.google.com/uc?id=1StGsEU2aY3X7pxX1b6fYzN6hCRv_gkj5"
              target="_blank"
              rel="noreferrer"
            >
              <AppButton sm>Resume</AppButton>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
