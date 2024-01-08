import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import Property from './components/Property';
import Home from './components/Home';

import './styles/index.css' 

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          {/* <Route path="/" element={<PropertyList/>} /> */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/propdetails" element={<Header/>} /> */}
          <Route path="/properties/:id" element={<Property/>} />
          </Routes>
        </div>
      </div>
    </Router>
	
		</>
  );
}

export default App;
