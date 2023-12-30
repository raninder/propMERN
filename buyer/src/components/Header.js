import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic2.jpeg';
import pic3 from '../images/pic3.jpeg';
import Hero from './Hero';

const Header = () => {
	return ( 
		<>
      <div className='content grid5 mtop'>
        
          <div className='box' >
            <img className="img1" src={pic1} alt='' />
						<img className="img2" src={pic2} alt='' />
						<img className="img3" src={pic3} alt='' />
          </div>
     {/* <Hero /> */}
     
		 
      </div>
	
    </>
	 );
}
 
export default Header;