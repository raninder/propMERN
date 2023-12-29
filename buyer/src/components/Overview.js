import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking} from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
	return (
		<div className="overview-container">
			<p>
			<h3>Overview</h3>
			<div className="mls">
			<input type="text" value="MLS#A1165993" readOnly></input>
			<input type="text" value="Brokerage BHHS EWM Realty" readOnly></input>
			</div>
			</p>
		<br/>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga inventore, deserunt modi mollitia quo vero nulla, distinctio sunt error esse rerum quia incidunt eligendi dolores obcaecati sed optio ducimus.
			</p>
			<br/>
		<hr/>
		<br/>
		<h3>Getting Around</h3>
		<table className="overview-table">
			<tr>
				
		
				<td rowspan="2" ><FontAwesomeIcon icon={faPersonWalking} size="3x"/></td>
				<td className="spaced2">Walk Score</td>
			
				<td rowspan="2" ><FontAwesomeIcon icon={faPersonWalking} size="3x"/></td>
				<td className="spaced2">Bike Score</td>
			
				<td rowspan="2" ><FontAwesomeIcon icon={faPersonWalking} size="3x"/></td>
				<td>Bus Score</td>
			</tr>
			<tr>
			<td className="spaced1 "></td>
				<td>70/100</td>
				
				<td className="spaced1 spaced2"></td>
				<td>83/100</td>
			
				<td className="spaced1 spaced2"></td>
				<td>88/100</td>
			</tr>
		</table>
		
		</div>
	  );
}
 
export default Overview;