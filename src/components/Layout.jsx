import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-white text-dark">
      {/* Global Background Gradients & Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#DFF6FF] blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#E8E6FF] blur-[150px] opacity-70"></div>
        <div className="absolute top-[20%] left-[50%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[#F5F7FF] blur-[100px] opacity-50 transform -translate-x-1/2"></div>
        
        {/* Organic SVG Blob */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px]">
            <path fill="#F2FBFF" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.3,-2.2C97.8,13.6,92.8,29.6,83.3,42.8C73.8,56,59.8,66.4,44.5,73.5C29.2,80.6,12.6,84.4,-3.3,89.1C-19.2,93.8,-34.5,99.4,-47.9,94.3C-61.3,89.2,-72.8,73.4,-80.6,56.7C-88.4,40,-92.5,22.4,-92.1,5.1C-91.7,-12.2,-86.8,-29,-77.3,-42.6C-67.8,-56.2,-53.7,-66.6,-39.2,-73.4C-24.7,-80.2,-9.8,-83.4,3.1,-87.9C16,-92.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20 z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
