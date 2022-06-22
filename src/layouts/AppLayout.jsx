import React from "react";

export default function AppLayout({ children }) {
  return (
    <div className="w-full bg-slate-900 text-blue-300">
      <div>{children}</div>
    </div>
  );
}
