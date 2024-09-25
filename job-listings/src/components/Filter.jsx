import React from "react";

function Filter({ filters, clear, removeFilter }) {
  return (
    <div className="filter-box">
      <div className="filters">
        {filters.map((filter, index) => (
          <>
            <p key={index}>{filter}</p>
            <span onClick={() => removeFilter(filter)}>X</span>
          </>
        ))}
      </div>
      <div className="clear-box">
        <p onClick={clear}>Clear</p>
      </div>
    </div>
  );
}

export default Filter;
