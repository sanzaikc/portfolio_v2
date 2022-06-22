import React from "react";
import PrimaryHeading from "./PrimaryHeading";

export default function About() {
  return (
    <div id="about" className="h-screen">
      <PrimaryHeading index={1}>About Me</PrimaryHeading>
      <br />
      <div className="text-lg text-gray-400">Hi There, I'm Sanjay Khatri.</div>
    </div>
  );
}
