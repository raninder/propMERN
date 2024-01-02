import PropertyList from './PropertyList';
import useFetch from '../useFetch';
const Home = () => {
	
	// const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs') //data can be used with name blogs

	// const {data,error} = useFetch()
	const {data,isPending,error} = useFetch('http://localhost:8000/properties')
	console.log("data1", data)
	return ( 
			<div className="home">
				{error && <div>{error}</div>}
			{isPending && <div> Loading... </div> }	
			
			{data && <PropertyList properties={data} title={"ALl properties"}/> }
	
    </div>	
	 );
}

 
export default Home