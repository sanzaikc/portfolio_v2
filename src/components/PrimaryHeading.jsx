import React from "react";

export default function PrimaryHeading({ children, index = 0 }) {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex flex-shrink-0 items-baseline space-x-2 font-bold">
        <span className="secondary-font text-2xl">{`${index} .`}</span>
        <span className="text-4xl text-gray-400">{children}</span>
      </div>
      <div className="hidden max-w-md flex-grow border-t border-gray-600 lg:block"></div>
    </div>
  );
}
