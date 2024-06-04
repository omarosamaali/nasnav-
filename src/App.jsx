import React, { Suspense, lazy } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SecondNavbar from './components/SecondNavbar/SecondNavbar'
import ThirdNavbar from './components/ThirdNavbar/ThirdNavbar'
const FourNavbar = lazy(() => import('./components/FourNavbar/FourNavbar'));
import EcommerceSection12 from './pages/EcommerceSection12/EcommerceSection12'
function App() {
  return (
    <>
      <Navbar />
      <SecondNavbar />
      <ThirdNavbar />
      {/* Component with Lazy Loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <FourNavbar />
      </Suspense>
      {/* Component with Lazy Loading */}
      <EcommerceSection12 />
    </>
  );
}

export default App;
