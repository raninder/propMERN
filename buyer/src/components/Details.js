import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from "@fortawesome/free-solid-svg-icons";

const Details = () => {
	return ( 
		<div className="details-container">
			<h3>Home Details</h3>
			<h4> Interior</h4>
			<div className="rooms">
			<div className="rooms1">
			<h5> Bedrooms & Bathrooms</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBedrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBathrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PPartial Beathrooms:  1</span></p>
			</div>
			<div className="rooms2">
			<h5> Living Room</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PLevel:  Main</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PArea:  156.22 Sqft</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PDimesnsions:  15.5"x10.8"</span></p>
			</div>
			</div>

			<div className="rooms">
			<div className="rooms1">
			<h5> Recreation room</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBedrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBathrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PPartial Beathrooms:  1</span></p>
			</div>
			<div className="rooms2">
			<h5> Dining Room</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PLevel:  Main</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PArea:  156.22 Sqft</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PDimesnsions:  15.5"x10.8"</span></p>
			</div>
			</div>

			
			<div className="rooms">
			<div className="rooms1">
			<h5> Kitchen</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBedrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBathrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PPartial Beathrooms:  1</span></p>
			</div>
			<div className="rooms2">
			<h5> Primary Bedroom</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PLevel:  Main</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PArea:  156.22 Sqft</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PDimesnsions:  15.5"x10.8"</span></p>
			</div>
			</div>

			<div className="rooms">
			<div className="rooms1">
			<h5> Bedroom</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBedrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBathrooms:  3</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PPartial Beathrooms:  1</span></p>
			</div>
			<div className="rooms2">
			<h5> Bedroom</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PLevel:  Main</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PArea:  156.22 Sqft</span></p>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PDimesnsions:  15.5"x10.8"</span></p>
			</div>
			</div>

			<div className="rooms">
			<div className="rooms1">
			<h5> Basement</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBedrooms:  3</span></p>
			</div>
			<div className="rooms2">
			<h5> Flooring</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PLevel:  Main</span></p>
			</div>
			</div>
			<div className="rooms">
			<div className="rooms1">
			<h5> Appliances</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PBedrooms:  3</span></p>
			</div>
			<div className="rooms2">
			<h5> Interior Features</h5>
			<p><FontAwesomeIcon icon={faCircle} /><span className="align">PLevel:  Main</span></p>
			</div>
			</div>
		</div>
	 );
}
 
export default Details;