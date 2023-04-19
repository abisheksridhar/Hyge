import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Molecules/Navbar';
import { navItems } from './Constants/Utility';
import Home from './Pages/Home'

function App() {
  
  return (
    <BrowserRouter>   
     <Navbar navItems={navItems}/>
     <Routes>
        <Route exact path = "/" element={<Home></Home>}></Route>
     </Routes>
    </BrowserRouter>

  );
}

export default App;
