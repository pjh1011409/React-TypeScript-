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
        <div className="mx-auto mt-3 h-auto min-h-[509px] w-[95%] rounded-xl border-4 border-[#003470] bg-[#d8e4f6]  p-3 font-sans md:w-1/2 ">
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
