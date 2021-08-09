import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// set order of HTML layout
const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  