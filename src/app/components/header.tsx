import React from "react";

function Header() {
  return (
    <div className="flex p-4 border-b-2 border-neutral-100 items-center justify-between">
      <div className=" p-4  border-neutral-100 items-center justify-between">
        <div className="text-xl font-mono font-semibold tracking-wide">
          Logo
        </div>
      </div>
      <nav className="hidden sm:flex px-2 gap-2 text-lg">
        <ul>Home</ul>
      </nav>
    </div>
  );
}

export default Header;
