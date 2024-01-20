import PropertyList from './PropertyList';
// import {useState, useEffect} from 'react';
import useFetch from '../useFetch';
// import axios from "axios";

const Home = () => {
	const {data,isPending,error} = useFetch('http://localhost:8000/')
  console.log("data1", data)


	// const [data, setData] = useState([]);
	// const [isPending, setIsPending] = useState(true)
	// const [error,setError] = useState(null)

	// useEffect(()=>{
	// 		axios.get('http://localhost:8000/')
	// 		.then((result)=> {
	// 			setData(result.data)
	// 			setError(null)
	// 			setIsPending(false)
	// 		})
	// 		.catch(err=> {
	// 			setIsPending(false)
	// 			setError(err.message)
	// 		})
	// },[])

	return ( 
			<div className="home">
				{error && <div>{error}</div>}
			{isPending && <div> Loading... </div> }	
			
			{data && <PropertyList properties={data}/> }
	
    </div>	
	 );
}

 
export default Home