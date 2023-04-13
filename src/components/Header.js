import React from "react";
// images
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#" className="text-[36px]">
            <span className="font-secondary font-semibold">
              <span>Portfo</span>
              <span className="text-accent ml-0">lio</span>
            </span>
          </a>
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
