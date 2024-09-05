import React from "react";

const Nav = () => {
  return (
    <div className="">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Alumni Association</div>
          <nav className="space-x-4">
            <a href="#features" className="hover:text-blue-400">
              Features
            </a>
            <a href="#success-stories" className="hover:text-blue-400">
              Success Stories
            </a>
            <a href="#events" className="hover:text-blue-400">
              Events
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
