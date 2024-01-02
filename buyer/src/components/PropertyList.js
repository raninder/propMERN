import {datalist} from './Data'
import Navbar from './Navbar';
import Property from './Property'
import { Link } from "react-router-dom";

const PropertyList = ({properties,title}) => {
	console.log("properties",properties)
  
    return (
        <div>
          <h1> All Properties </h1>
          <div className="props-list">
          { properties.map((item) => (
            <div className="blog-preview" key={item.id} >
              <Link to={`/properties/${item.id}`}>
              <img src={item.cover} alt='property' height="300" width="300"></img>
              </Link>
            </div>  
          ))}
        </div>
       </div> 
    );  
  }
      

  
	

 
export default PropertyList;