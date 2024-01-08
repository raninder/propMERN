import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareParking,faCircle} from "@fortawesome/free-solid-svg-icons";
import '../styles/highlights.css'

const Highlights = () => {
	return (
		<div className="highlights-container">
			<h3> Home Highlights</h3>
			<table className="highlights-table">
				<tr>
					<td className="align-left"><FontAwesomeIcon icon={faSquareParking} /><span className="align">Parking</span></td>
					<td className="align-right">4 Parking Spaces</td>

					<td className="align-left"><FontAwesomeIcon icon={faCircle} /><span className="align">HOA</span> </td>
					<td className="align-right">None </td>
				</tr>
				<tr>
					<td className="align-left" ><FontAwesomeIcon icon={faCircle} /><span className="align">Basement</span></td>
					<td className="align-right">Full Finished</td>
					<td className="align-left"><FontAwesomeIcon icon={faCircle} /><span className="align">Price/Sqft</span> </td>
					<td className="align-right">235$ </td>
				</tr>
			
				<tr>
					<td className="align-left"><FontAwesomeIcon icon={faCircle} /><span className="align">Cooling</span></td>
					<td className="align-right">Yes</td>
					<td className="align-left"><FontAwesomeIcon icon={faCircle} /><span className="align">Listed</span> </td>
					<td className="align-right">70 days ago </td>
				</tr>
			
			</table>
		</div>
	);
}
 
export default Highlights;