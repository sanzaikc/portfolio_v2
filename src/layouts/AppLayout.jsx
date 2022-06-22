import React from "react";

export default function AppLayout({ children }) {
  return (
    <div className="h-screen w-full bg-slate-900 text-blue-300">
      <div>{children}</div>
    </div>
  );
}
