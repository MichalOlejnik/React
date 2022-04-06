//https://www.w3schools.com/react/react_router.asp
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

//PrivateRoute - uniemożliwia otwarcie strony Profil bez zalogowania

import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Offer from './components/pages/Offer';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import UpdateProfile from './components/pages/UpdateProfile';
import ForgotPassword from './components/pages/ForgotPassword';
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from './components/pages/PrivateRoute';

function App() {
  
  return (
    <AuthProvider>  
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/contact' element={<Contact/>} />
          <Route path='/offer' element={<Offer/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />

          <Route path="/profile" element={
            <PrivateRoute><Profile/></PrivateRoute>}/>

          <Route path="/update-profile" element={
            <PrivateRoute><UpdateProfile/></PrivateRoute>}/>

          
          

        </Routes>
      </Router>
    </>
   </AuthProvider> 
  );
}

export default App;
