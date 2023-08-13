import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Login from '../pages/Login';
import CurrentProject from '../pages/CurrentProject';


const RoutesApp = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Login />} />
      <Route path='/:id' element={<CurrentProject />} />
    </Routes>
  )
}

export default RoutesApp;