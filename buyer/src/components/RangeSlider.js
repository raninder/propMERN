import { useState } from "react";
const RangeSlider = ({ min, max,step,cValue }) => {
  // const [minValue, setMinValue] = useState(min);
  // const [maxValue, setMaxValue] = useState(max);
	const [value,setValue] = useState(cValue)
  
  const handleChange = e => {
    e.preventDefault();
    const value = parseFloat(e.target.value);
    // the new max value is the value from the event.
    // it must not be less than the current min value!
    const newMaxVal = Math.max(value, min + step);
		setValue(newMaxVal);
    // setMaxValue(newMaxVal);
  };
	console.log("vale2",value);
	
  return (
    <div className="slider1">
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