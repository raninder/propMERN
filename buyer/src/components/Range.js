import { useState } from "react";
const Range = ({ title,min, max,step,value,handleChange }) => {
  
	console.log("value", value);
  return (
    <div className="slider-container">
				<p> {title}<span>{value}</span></p>
      <input
				className="slider"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange = {handleChange}
      />

			{/* <p>The value is: <span>{value}</span></p> */}
      {/* <p>The max value is: <span>{value.max}</span></p> */}
    </div>
  );
};

export default Range