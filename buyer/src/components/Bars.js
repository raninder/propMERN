import { useState } from 'react';
// import reusable slider component
import Range from './Range'

function Bars() {
  const [marketValue,setMarketValue] = useState(10900)
	const [percentValue, setPercentValue] = useState(5.45)
 
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
		<div>
    
     <Range
		 		min={1000} 
		 	 	max={500000} 
				step={1000}
       	handleChange={handleMarketChange}
       	value={marketValue} 
				title= {"Full Market Value" }
			/>
			<Range
		 		min={1} 
		 	 	max={10} 
				step={.1}
       	handleChange={handlePercentChange}
       	value={percentValue} 
				title= {"Share percentages" }
			/>
			</div>
  );
}

export default Bars;