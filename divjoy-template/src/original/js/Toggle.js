import React from "react";
import "../css/Toggle.css";

const Toggle = ( {label} ) => {

  return (
    <div className="container">
      <div className="name">
        {label}
      </div>
      <div className="toggle">
        <input type="checkbox" className="checkbox" name={label} id={label}/>
        <label className="label" htmlFor={label}>
          <span className="inner"/>
          <span className="switch"/>
        </label>
      </div>
    </div>
  );
};
  
export default Toggle;