import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';

import './index.css' 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Header/>} />
          </Routes>
          <Hero />
        </div>
      </div>
    </Router>
  );
}

export default App;
