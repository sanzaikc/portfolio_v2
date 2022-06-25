import React from "react";

export default function Footer() {
  return (
    <div className="secondary-font py-4 text-center text-sm font-semibold tracking-wide text-gray-600">
      {`< Developed by Sanjay Khatri © ${new Date().getFullYear()} />`}
    </div>
  );
}
