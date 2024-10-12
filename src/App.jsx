
import './App.scss'
import { Routes, Route,useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import particles from './utils/particles';

import Portfolio from '../containers/portfolio'
import Home from '../containers/home'
import About from '../containers/about'
import Resume from '../containers/resume'
import Skills from '../containers/skills'
import Contact from '../containers/contact'
import Navbar from '../components/navBar'

function App() {
  const location = useLocation();
   
  const handleInit = async (main) => {
    await loadFull(main);
  }
  
  const renderParticlesJsxInHomePage = location.pathname==='/';
  return (
    <div className='App'>
      {/*particles js*/ }
      {renderParticlesJsxInHomePage &&(
      <Particles id="particles" options={particles} init={handleInit} />)}
      {/* navbar*/}
      <Navbar />
      {/* main page */}
      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='about' element={<About />} />
        <Route index path='resume' element={<Resume />} />
        <Route index path='skills' element={<Skills />} />
        <Route index path='portfolio' element={<Portfolio />} />
        <Route index path='contact' element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App
