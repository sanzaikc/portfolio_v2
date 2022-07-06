import React from "react";

export default function AppLayout({ children }) {
  return (
    <div className="w-full  text-blue-300 lg:px-0">
      <div>{children}</div>
    </div>
  );
}
