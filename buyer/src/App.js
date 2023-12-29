import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Images from './components/Images';

import './index.css' 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Images />} />

          </Routes>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
