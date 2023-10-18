import React from 'react';
import { TbHelpSquareRounded } from 'react-icons/tb';
import { LuBadgePercent, LuKeyRound, LuWallet } from "react-icons/lu";
import {} from "react-icons/lu";
import { TbUserHexagon } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RxCodesandboxLogo } from "react-icons/rx";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <TbUserHexagon className="icon_header" /> Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <LuKeyRound className="icon" /> Dashboard
        </li>
        <li className="sidebar-list-item">
          <RxCodesandboxLogo className="icon" /> Products
        </li>
        <li className="sidebar-list-item">
          <CgProfile className="icon" /> Customers
        </li>
        <li className="sidebar-list-item">
          <LuWallet className="icon" /> Income
        </li>
        <li className="sidebar-list-item">
          <LuBadgePercent className="icon" /> Promote
        </li>
        <li className="sidebar-list-item">
          <TbHelpSquareRounded className="icon" /> Help
        </li>
      </ul>

      <div className="avatar"></div>
    </aside>
  );
}

export default Sidebar;
