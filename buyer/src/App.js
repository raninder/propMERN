import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import Property from './components/Property';

import './index.css' 
function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<PropertyList/>} />
          <Route path="/propdetails" element={<Header/>} />
          </Routes>
        </div>
      </div>
    </Router>
	
		</>
  );
}

export default App;
