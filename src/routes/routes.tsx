import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Login from '../pages/Login';
import CurrentProject from '../pages/CurrentProject';
import About from '../pages/About';


const RoutesApp = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Login />} />
      <Route path='/project/:id' element={<CurrentProject />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default RoutesApp;