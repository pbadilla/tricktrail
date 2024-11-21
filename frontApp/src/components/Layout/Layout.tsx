import BottomBar from '@components/BottomBar';
import HamburgerMenu from '@components/HamburgerMenu';
import Search from '@components/Search';
import SliderList from '@components/Sliders/Slider';
import Tabs from '@components/Tabs';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white text-black p-4 text-left">
        <HamburgerMenu />
      </header>

      <Search />

      {/* Body */}
      <main className="bg-white flex-1 px-4 space-y-4">
        {children}
      </main>

      {/* BottomBar */}
      <BottomBar />

      {/* Footer */}
      <footer className="bg-white text-white text-center p-4">
        <p className="text-sm">© 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
