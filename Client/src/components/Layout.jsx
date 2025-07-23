import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingChatButton from './FloatingChatButton';

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default Layout;
