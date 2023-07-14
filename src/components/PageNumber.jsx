import React from "react";

const PageNumber = (props) => {
  return (
    <div className="section" id="PageNumber">
      <h1 className="page-number px-8">{props.page_number}</h1>
    </div>
  );
};

export default PageNumber;
