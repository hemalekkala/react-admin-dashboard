import React from "react";
import { BsSearch, BsJustify } from "react-icons/bs";

import { PiHandWavingFill } from "react-icons/pi";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <h3 style={{ color: "rgb(70 70 70)" }}>
        Hello Shahrukh{" "}
        <PiHandWavingFill style={{ color: "rgb(241 207 164)" }} /> {`,`}
      </h3>
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
        <input className="search-input" placeholder="search" />
      </div>
    </header>
  );
}

export default Header;
