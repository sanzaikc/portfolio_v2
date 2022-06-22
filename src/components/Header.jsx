import React, { useEffect, useState } from "react";

import AppButton from "./AppButton";
import { ReactComponent as Close } from "../assets/close.svg";
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
  const [showMenu, setShowMenu] = useState(false);
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
    <>
      <div
        className={`container z-10 mx-auto  transform bg-slate-900 py-2 pr-3 shadow-lg transition-all duration-300 ease-in-out lg:py-6 lg:px-0 ${
          show ? "sticky top-0 translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between lg:px-20">
          {/* <div className="text-2xl font-semibold">K S</div> */}
          <img
            src={Logo}
            alt="Logo"
            className="h-12 object-cover object-center"
          />
          <ul className="hidden items-center space-x-10 text-sm lg:flex">
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

          <div className="lg:hidden" onClick={() => setShowMenu(true)}>
            <div className="flex flex-col justify-end space-y-2">
              <div className="w-6 border-t"></div>
              <div className="w-4 border-t"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-10 h-screen translate-x-full bg-slate-900 bg-opacity-60 transition-transform duration-200 ease-in lg:hidden ${
          showMenu && "translate-x-0"
        }`}
        onClick={() => setShowMenu(false)}
      >
        <div className="absolute right-0 h-screen w-2/3 bg-slate-800 ">
          <div className="flex justify-end">
            <div onClick={() => setShowMenu(false)}>
              <Close className="h-10 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col space-y-10 p-6 text-lg">
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
            <a
              href="https://drive.google.com/uc?id=1StGsEU2aY3X7pxX1b6fYzN6hCRv_gkj5"
              target="_blank"
              rel="noreferrer"
            >
              <AppButton>Resume</AppButton>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
