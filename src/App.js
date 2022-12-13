import React from 'react';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import CaseStudy1 from './pages/CaseStudy1.js';
import ComingSoon from './pages/ComingSoon';
import ErrorPage from './pages/ErrorPage.js';
import ScrollToTop from './pages/ScrollToTop.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-offWhite">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Home />} />
            <Route index path="about" element={<About />} />
            <Route path="case-study1" element={<CaseStudy1 />} />
            <Route path="coming-soon" element={<ComingSoon />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
