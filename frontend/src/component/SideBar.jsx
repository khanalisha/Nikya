import React from "react";

export const SideBar = ({ setSelected }) => {
  return (
    <div className="w-56 h-1184vh bg-primary-200 shrink-0 main-sidebar">
      <p className="text-[#013CC6] text-2xl not-italic font-medium sideP">
        Nyka Dashboard
      </p>

      <div className="sidebarBottom">
        <div className="">
          <div
            className="flex gap-4 my-6 items-center justify-between cursor-pointer"
            onClick={() => setSelected("dashboard")}
          >
            <img src="Nyka-1.svg" alt="logo" className="logo" />
            <span className="logoP">Dashboard</span>
          </div>
          <div
            className="flex gap-4 my-6 items-center justify-between cursor-pointer"
            onClick={() => setSelected("analytics")}
          >
            <img src="clipboard-tick.svg" alt="clip" className="logo" />
            <span className="logoP2">Analytics</span>
          </div>
          <div className="flex gap-4 my-6 items-center justify-between">
            <img src="setting-2.svg" alt="settings" className="logo" />
            <span className="logoP2">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};
