import React from 'react';

import { AboutUs, Chef, FindUs, Gallery, Header,SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Gallery />
    <FindUs />
    
  </div>
);

export default App;
