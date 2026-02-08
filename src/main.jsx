import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';

// 1. Import MainLayout


// Pages / Sections

import FeaturesSection from './components/sections/FeaturesSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import PricingSection from './components/sections/PricingSection';
import FundingSection from './components/sections/FundingSection';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Affiliate from './pages/Affiliate';


// Define the Routes
const router = createBrowserRouter([
  {
    path: "/",
    // 2. Use MainLayout as the root wrapper
    element: <MainLayout />, 
    errorElement: <div className="p-20 text-center"><h1>404 Not Found</h1></div>,
    children: [
      {
        index: true, // Default page (Home)
        element: <Home/>,
      },
      {
        path: "product",
        element: (
          <>
            <FeaturesSection />
            <WhyChooseUs />
          </>
        ),
      },
      {
        path: "pricing",
        element: <PricingSection />,
      },
      {
        path: "funding",
        element: <FundingSection />,
      },
      {
        path: "affiliate",
        element: (
          <Affiliate />
        ),
      },
      // Login and Signup routes removed
    ],
  },
]);

// Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);