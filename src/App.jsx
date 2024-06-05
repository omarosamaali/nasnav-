import React, { Suspense, lazy,useEffect, useState } from 'react';
import { getProducts } from './services/api';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SecondNavbar from './components/SecondNavbar/SecondNavbar'
import ThirdNavbar from './components/ThirdNavbar/ThirdNavbar'
const FourNavbar = lazy(() => import('./components/FourNavbar/FourNavbar'));
import EcommerceSection12 from './pages/EcommerceSection12/EcommerceSection12';
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer'
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

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
      <Products products={products} />
      <Footer />
    </>
  );
}

export default App;
