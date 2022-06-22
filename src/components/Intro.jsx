import React from "react";
import AppButton from "./AppButton";

export default function Intro() {
  return (
    <div
      id="intro"
      className="flex flex-col space-y-8 py-20 lg:h-screen lg:text-lg"
    >
      <div className="">Hi, my name is</div>
      <div className="flex flex-col space-y-4 text-4xl font-bold lg:text-8xl">
        <div className="text-gray-100">Sanjay Khatri</div>
        <div className="text-gray-400">I am a web developer</div>
      </div>
      <p className="text-gray-400 lg:w-1/2">
        I'm a web developer specializing in front-end development with right
        amount of backend development to get the job done. I'm a bachelor
        graduate fresher, currently looking for a job.
      </p>
      <div>
        <a href="/#contact">
          <AppButton>Hire Me</AppButton>
        </a>
      </div>
    </div>
  );
}
