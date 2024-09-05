import {  Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LandingPage from './components/fetures/LandingPage';
import Register from './components/fetures/Register';
import AlumniDirectory from './components/fetures/AlumniDirectory';
import DonationPortal from './components/fetures/DonationPortal';
import JobPortal from './components/fetures/JobPortal';
import EventsAndReunions from './components/fetures/EventsAndReunions ';
import Login from './components/fetures/Login';
import NetworkingHub from './components/fetures/NetworkingHub';
import SuccessStoryTracking from './components/fetures/SuccessStoryTracking';
import ComingSoon from './components/fetures/ComingSoon';

function App() {
  return (
   <div className="">

    <Routes >
      <Route path='/' element={<HomePage />} />
      <Route path='/la'  element={<LandingPage  />}/>
      <Route path='/register'  element={<Register  />}/>
      <Route path='/login'  element={<Login  />}/>

      <Route  path='/d' element={<AlumniDirectory />}/>
      <Route  path='/donation' element={<DonationPortal />}/>
      <Route  path='/job-portal' element={<JobPortal />}/>
      <Route  path='/events' element={<EventsAndReunions />}/>
      <Route  path='/networking' element={<NetworkingHub />}/>
      <Route  path='/so' element={<SuccessStoryTracking />}/>
      <Route  path='/coming' element={<ComingSoon />}/>

    </Routes>

   </div>
  );
}

export default App;
