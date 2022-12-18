import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import * as B from './Background';

const Layout = () => {
  return (
    <B.Background>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="min-h-screen bg-[#292828]">
        <header>
          <Header />
        </header>
        <div className="md: mx-auto mt-5  min-h-[500px] w-11/12 rounded-xl border-4 border-[#003470] bg-[#d8e4f6] p-3 lg:w-6/12">
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </B.Background>
  );
};

export default Layout;
