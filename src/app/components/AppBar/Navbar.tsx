import React from "react";
import AuthButton from "../Button/AuthButton";

function Navbar() {
  return (
    <nav className="py-4 absolute top-0 w-screen z-50 px-16 md:px-4 flex justify-between items-center shadow-sm shadow-primary-300">
      <p className="text-2xl font-bold text-primary-950 tracking-wide">
        TRACKER
      </p>
      <AuthButton />
    </nav>
  );
}

export default Navbar;
