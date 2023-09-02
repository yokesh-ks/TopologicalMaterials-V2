import React from "react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 w-full h-[70px] z-10">
      <nav className="flex items-center h-full justify-between">
        <h2 className="font-bold text-2xl">Topological Materials</h2>

        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
