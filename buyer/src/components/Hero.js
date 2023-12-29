import Price from "./Price";
import Overview from "./Overview";
import Highlights from "./Highlights";
import Details from "./Details";
import Sidebar from "./Sidebar";
import Similar from "./Similar";
import Map from "./Map";

const Hero = () => {
	return ( 
		<div className="main">
			<div className="left">
			<Price />
			<Overview />
			<Highlights />
			<Details />
			<Similar />
			<Map />
			</div>
			<div className= "right">
				<Sidebar/>
			</div>
		</div> 
	 );
}
 
export default Hero;