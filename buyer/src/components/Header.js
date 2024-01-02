// import pic1 from '../images/pic1.jpeg';
// import pic2 from '../images/pic2.jpeg';
// import pic3 from '../images/pic3.jpeg';
import {dataprop1} from './Data'

import Hero from './Hero';
const Header = ({data}) => {
	return ( 
		<>
      <div className='content grid5 mtop'>
        
          <div className='box' >
            <img className="img1" src={data.cover} alt='' />
						<img className="img2" src={data.img2} alt='' />
						<img className="img3" src={data.img3} alt='' />
          </div>
     {/* <Hero /> */}
     
		 
      </div>
	
    </>
	 );
}
 
export default Header;