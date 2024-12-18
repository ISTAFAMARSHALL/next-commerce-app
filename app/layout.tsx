'use client'
import React, { useState } from 'react';
import Header from '@/app/components/header2';
import SideBar from "@/app/components/side-bar";
import Footer from '@/app/components/footer2'

import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <html lang="en">
      <body className={` ${geistSans.variable} ${geistMono.variable}`}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gridTemplateRows: 'auto 1fr auto',
          gridTemplateAreas: `
            'header header'
            'sidebar main'
            'footer footer'
          `,
          maxWidth: '100vw',
          overflowX: 'hidden',
          background: '#ffffff',
          color: '#171717',
          fontFamily: 'Arial, Helvetica, sans-serif',
          minHeight: '100vh',
        }}>
          {/* Header */}
          <header style={{
            gridArea: 'header',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
          }}>
            <Header onMenuClick={toggleSidebar} />
          </header>

          {/* Sidebar */}
          {isSidebarVisible && (
            <aside style={{
              gridArea: 'sidebar',
              backgroundColor: '#0072ce',
              color: '#ffffff',
              width: '250px',
              padding: '1em',
              position: 'fixed',
              height: '100vh',
              zIndex: 1001,
            }}>
              <SideBar onClose={toggleSidebar} />
            </aside>
          )}

          {/* Main Content */}
          <main style={{
            gridArea: 'main',
            padding: '2em',
            transition: 'margin-left 0.3s ease',
            marginLeft: isSidebarVisible ? '250px' : '0',
          }}>
            {children}
          </main>

          {/* Footer */}
          <footer style={{
            gridArea: 'footer',
            position: 'sticky',
            bottom: 0,
            backgroundColor: '#0072ce',
            color: 'white',
            padding: '2em',
          }}>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
