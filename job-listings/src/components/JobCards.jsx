import React from "react";

function JobCards({ job, addFilter ,setFiltersOn }) {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const handleAddFilter = (value) => {
    addFilter(value);
    setFiltersOn(true);
  };
        
  return (
    <div className={`card_container ${featured ? "border" : ""}`}>
      <div className="information_container">
        <div className="img_container">
          <img src={`/images/${logo}`} alt={`${company} logo`} />
        </div>
        <div>
          <span className="company-box">
            <p className="company">{company}</p>
            {isNew && <p className="new">New!</p>}
            {featured && <p className="featured">Featured</p>}
          </span>
          <span className="position-box">
            <h2>{position}</h2>
          </span>
          <span className="information">
            <p>{postedAt}</p>
            <span>-</span>
            <p>{contract}</p>
            <span>-</span>
            <p>{location}</p>
          </span>
        </div>
      </div>

      <div className="languages_Tools_container">
        <p className="role" onClick={() => handleAddFilter(role)}>
          {role}
        </p>
        <p className="level" onClick={() => handleAddFilter(level)}>
          {level}
        </p>
        {languages.map((languages, key) => (
          <p
            id={key}
            className="languages"
            onClick={() => handleAddFilter(languages)}
          >
            {languages}
          </p>
        ))}
        {tools.map((tools, key) => (
          <p id={key} className="tools" onClick={() => handleAddFilter(tools)}>
            {tools}
          </p>
        ))}
      </div>
    </div>
  );
}

export default JobCards;
