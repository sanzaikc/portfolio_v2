import React from "react";

export default function PrimaryHeading({ children, index = 0 }) {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-baseline space-x-2 font-bold">
        <span className="secondary-font lg:text-2xl">{`${index} .`}</span>
        <span className="text-2xl text-gray-400 lg:text-4xl">{children}</span>
      </div>
      <div className="hidden max-w-md flex-grow border-t border-gray-600 lg:block"></div>
    </div>
  );
}
