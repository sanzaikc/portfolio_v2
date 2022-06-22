import React from "react";
import AppButton from "./AppButton";

export default function Intro() {
  return (
    <div className="flex h-screen flex-col space-y-8 py-16 text-lg">
      <div>Hi, my name is</div>
      <div className="flex flex-col space-y-4 text-7xl font-bold">
        <div className="text-gray-100">Sanjay Khatri</div>
        <div className="text-gray-400">I am a web developer</div>
      </div>
      <p className="text-gray-400 lg:w-1/2">
        I'm a web developer specializing in front-end development with right
        amount of backend development to get the job done. I'm a bachelor
        graduate fresher, currently looking for a job.
      </p>
      <div>
        <AppButton sm>Hire Me</AppButton>
      </div>
    </div>
  );
}
