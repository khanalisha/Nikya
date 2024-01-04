import React from "react";
import { DashBoardTable } from "./DashBoardTable";

//w-full bg-primary-100 h-lvh
export const Dashboard = () => {
  return (
    <div className="dash-container bg-primary-100 ">
      <div className="upperDiv">
        <div className="inputDiv">
          <div className="flex gap-1">
            <img src="search-normal.svg" alt="search" className="s" />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="user">
          <div className="bell-box">
            <img src="notification-bing.svg" alt="logo" className="bell" />
          </div>
          <img src="" alt="userlogo" className="singleUser" />
        </div>
      </div>

      {/* Filter div */}
      <div className="All-filter">
        <div className="filter-by-gender"></div>
        <div className="filter-by-category"></div>
        <div className="sort-by-price"></div>
      </div>

      <DashBoardTable />
    </div>
  );
};
