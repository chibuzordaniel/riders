import Navbar from './components/Navbar'
import Project from './components/Project';
import {Route, Routes} from 'react-router-dom'
import About from './components/About';

function App() {
  return (
   <>
     <Routes>
       <Route path='' element={<Navbar/>}/>
       <Route path='/Navbar' element={<Navbar/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Project' element={<Project/>}/>
    </Routes>

   </>
   
     
     
  );
}

export default App;
