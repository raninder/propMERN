import { useState } from "react";
const RangeSlider = ({ min, max,step,cValue }) => {
  // const [minValue, setMinValue] = useState(min);
  // const [maxValue, setMaxValue] = useState(max);
	const [value,setValue] = useState(cValue)
  
  const handleChange = e => {
    e.preventDefault();
    const nvalue = parseFloat(e.target.value);
		setValue(nvalue);
  };
	
  return (
    <div className="slider-container">
				<p> Full Market Value $<span>{value}</span></p>
      <input
				className="slider"
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />

			{/* <p>The value is: <span>{value}</span></p> */}
      {/* <p>The max value is: <span>{value.max}</span></p> */}
    </div>
  );
};

export default RangeSlider