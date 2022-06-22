import React from "react";

export default function AppButton({ children, handleOnClick, sm = false }) {
  const paddingSize = sm ? "px-4 py-2" : "px-6 py-3";

  return (
    <button
      className={`inline-block rounded border-2 border-blue-300 text-sm  font-semibold transition-all duration-200 ease-in-out hover:bg-blue-500 hover:bg-opacity-20 ${paddingSize}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
