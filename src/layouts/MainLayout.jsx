import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { Outlet, ScrollRestoration } from 'react-router';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-50 font-sans text-gray-900 selection:bg-pink-200 selection:text-pink-900">
      
      <Navbar />

      <main className="flex-grow flex flex-col w-full">
       <Outlet />
      </main>

      <Footer></Footer>

    </div>
  );
};

export default MainLayout;