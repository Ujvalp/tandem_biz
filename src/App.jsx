import React, {useEffect, useState} from 'react';
import Login from './pages/Login'
import OfflineModal from './OfflineModal'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from "react-router-dom";
import AuthRoute from './components/AuthRoute';
import Bill_dash from './pages/Bill_dash';
import Biz_dash from './pages/Biz_dash';
import Contact_dash from './pages/Contact_dash'
import Refer_dash from './pages/Refer_dash'
import SignUp_Form from './pages/SignUp_Form';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import UnRegistredRoute from './components/unregistredRoute';


function App() {


  let [online, isOnline] = useState(navigator.onLine);

  const setOnline = () => {
    // console.log('We are online!');
    isOnline(true);
  };
  const setOffline = () => {
    // console.log('We are offline!');
    isOnline(false);
  };


  useEffect(() => {
    window.addEventListener('offline', setOffline);
    window.addEventListener('online', setOnline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener('offline', setOffline);
      window.removeEventListener('online', setOnline);
    }
    ;
  }, []);












  return (
    <>


      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/billing" element={<Bill_dash />} />
          <Route path="/business-profile" element={<Biz_dash />} />
          <Route path="/contact-us" element={<Contact_dash />} />
          <Route path="/refer" element={<Refer_dash />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Route>
       
    

          
        

        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp_Form/>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        


      </Routes>
      <OfflineModal display={!online} />


    </>
  );
}

export default App;
