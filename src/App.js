
import './App.css';

import { themeContext } from './Context';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Rent from './routes/Rent';
import Login from './routes/Login';
import Contact from './routes/contact';
import Navbar from './componets/Navbar/Navbar';
//import Describe from './componets/describe/Describe';
import Form from './componets/form/Form';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App'
    Style={{
      background : darkMode? 'black' : '',
      color : darkMode? 'white' : ''
    }}
    >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Rent" element={<Rent/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes> 
    
    </div>
  );
}

export default App;
