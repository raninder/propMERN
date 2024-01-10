import Chart from "./Chart";
import RangeSlider from "./RangeSlider";
import '../styles/sidebar.css'

const Sidebar = () => {
	return ( 
		<div className= "sidebar">
			<div className="top">
				<h3> Home Price</h3>
				<h1>$525,000</h1>
				<button>GET PRE-QUALIFIED</button>
			</div>
			<div className="payment">
				<div className="head">
					<h3>Monthly Payment</h3>
					<button> Reset</button>
				</div>
				<Chart />
			</div>
			<div className="range">
			
				<RangeSlider min={1000}  max={500000} step={1000} cValue={109000}/>
			
			</div>
		</div>
	);
}
 
export default Sidebar;