import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faSquare , faLocationDot} from "@fortawesome/free-solid-svg-icons";
const Price = () => {
	return (
		<div class="desc-container">
		<div className="price-container">
		<p className="price">$525,000  </p>
		<p className="price-icons">
		<span><FontAwesomeIcon icon={faBed} />3  </span>
		<span><FontAwesomeIcon icon={faBath} />1  </span>
		<span><FontAwesomeIcon icon={faSquare} />1186 sq ft  </span>
		</p>
		<p className="icon">
		<span><FontAwesomeIcon icon={faLocationDot} /> 6323  St. Jamestown, Toronto, CA</span>
		</p>
		</div>
		<div className="map">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5771.918406738923!2d-79.37839350590437!3d43.6698182844049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb51a3891935%3A0xa11c73fe81eacdd0!2sSt.%20James%20Town%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1703854898028!5m2!1sen!2sca" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
		</div>
	  );
}
 
export default Price;