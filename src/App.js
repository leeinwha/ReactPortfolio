import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import link from './utils/link';
import lenis from './utils/lenis';

const App = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;