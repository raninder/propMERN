import { list } from "./Data"
import { images } from "./Data"
import { Link } from "react-router-dom";
const Property = ({ id, cover,price,location }) => {
  return ( 

    <div className="prop-container">
      <Link to={`/propdetails`}>
      <img
        src= {cover}
        alt="Logo"
        width="300px"
        height="300px"
      />
      </Link>
      <h3>{price}</h3>
      <p>{location}</p>
    </div>
   );
}
 

export default Property