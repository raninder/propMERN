import {datalist} from './Data'
import Navbar from './Navbar';
import Property from './Property'
const PropertyList = () => {
	const mappedItems = datalist.map((item) => {
    
    return (
      <Property
        key={item.id}
        cover={item.cover}
        price={item.price}
        location={item.location}
      />
    )
  });

  return ( 
    <>
    <div className="props-list">
      {mappedItems}
    </div>
    </>
   );
	
}
 
export default PropertyList;