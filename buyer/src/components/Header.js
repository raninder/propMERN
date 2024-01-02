// import pic1 from '../images/pic1.jpeg';
// import pic2 from '../images/pic2.jpeg';
// import pic3 from '../images/pic3.jpeg';
import '../styles/header.css'

const Header = ({data}) => {
	return ( 
		<>
      <div className='content grid5 mtop'>
          <div className='box' >
            <img className="img1" src={data.cover} alt='' />
						<img className="img2" src={data.img2} alt='' />
						<img className="img3" src={data.img3} alt='' />
          </div>
      </div>
    </>
	 );
}
 
export default Header;