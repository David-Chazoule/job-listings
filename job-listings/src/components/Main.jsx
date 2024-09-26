import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import JobCards from "./JobCards";

import data from "../data/data.json";

function Main() {
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(data);
  const [filtersOn, setFiltersOn] = useState(false);

  // Function to add a new filter if it's not already in the filters array
  const addFilter = (value) => {
    if (!filters.includes(value)) {
      setFilters((prevFilters) => [...prevFilters, value]);
    }
  };

  // Function to clear all filters and hide the filter display
  const handleclear = () => {
    setFilters([]);
    setFiltersOn(false);
  };

  // Function to remove a specific filter from the filters array
  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
    if (filters.length <= 1) {
      setFiltersOn(false);
    }
  };
  // useEffect to filter job listings based on the selected filters
  useEffect(() => {
    // If there are no filters, reset filteredJobs to the original data
    if (filters.length === 0) {
      setFilteredJobs(data);
    } else {
      const filteredData = data.filter((job) => {
        const jobFilters = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ];
        // Check if every selected filter is included in the job's filters
        return filters.every((filter) => jobFilters.includes(filter));
      });
      setFilteredJobs(filteredData);
    }
  }, [filters]);

  return (
    <div className="main_container">
      <div className="main_header">
        <img src={"/images/bg-header-desktop.svg"} alt="" />
      </div>

      {filtersOn && (
        <div className="filter_container">
          <Filter
            filters={filters}
            clear={handleclear}
            removeFilter={removeFilter}
          />
        </div>
      )}
      <div className="cards_container">
        {filteredJobs.map((elem) => (
          <JobCards
            key={elem.id}
            job={elem}
            addFilter={addFilter}
            setFiltersOn={setFiltersOn}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
