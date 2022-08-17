import logo from './logo.svg';
import './App.css';
import { ArrowRight, FileX } from 'react-bootstrap-icons';
import Typed from 'react-typed';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  return (
   
      
    <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Dashboard />} />
 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
