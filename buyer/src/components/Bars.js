import { useState } from 'react';
import Range from './Range'
import '../styles/range.css' 

function Bars() {
  const [marketValue,setMarketValue] = useState(10900)
	const [percentValue, setPercentValue] = useState(45)
 
  const handleMarketChange = e => {
    e.preventDefault();
    const mvalue = parseFloat(e.target.value);
		console.log("nvalue", mvalue);
		setMarketValue(mvalue);
  };
	const handlePercentChange = e => {
    e.preventDefault();
    const pvalue = parseFloat(e.target.value);
		console.log("nvalue", pvalue);
		setPercentValue(pvalue);
  };


  return (
		<div className="range">
    
     <Range
		 		min={1000} 
		 	 	max={500000} 
				step={1000}
       	handleChange={handleMarketChange}
       	value1={marketValue} 
				// value2={""}
				title= {"Full Market Value" }
			/>
			<Range
		 		min={1} 
		 	 	max={100} 
				step={10}
       	handleChange={handlePercentChange}
       	value1={percentValue} 
				value2={marketValue}
				title= {"Share percentages" }
			/>
			</div>
  );
}

export default Bars;