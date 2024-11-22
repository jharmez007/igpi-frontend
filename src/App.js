import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ScrollToTop } from './hooks';
import { Navbar, Footer } from './components';
import { AboutUs, Contact, Home, SignUpForm, Support, Team } from './pages';
import './App.scss';

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="h-[124px] md:h-20" />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app__container scroll-smooth snap-none">
          <Routes>
            {/* Routes with Navbar and Footer */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/aboutUs" element={<MainLayout><AboutUs /></MainLayout>} />
            <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
            <Route path="/support" element={<MainLayout><Support /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            
            {/* Route without Navbar and Footer */}
            <Route path="/signupform" element={<SignUpForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
