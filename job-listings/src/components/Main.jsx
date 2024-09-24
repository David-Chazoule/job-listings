import React from "react";
import Filter from "./Filter";
import JobCards from "./JobCards";

import data from "../data/data.json";

function Main() {
  return (
    <div className="main_container">
      <div className="main_header">
        <img src={"/images/bg-header-desktop.svg"} alt="" />
      </div>

      <div className="filter_container">
        <Filter />
      </div>

      <div className="cards_container">
        {data && data.map((elem) => <JobCards key={elem.id} job={elem} />)}
      </div>
    </div>
  );
}

export default Main;
