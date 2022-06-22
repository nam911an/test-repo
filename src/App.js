 
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Error from './Error';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Error/>} />
     
  
    </Routes>
  </BrowserRouter>
}

export default App;
