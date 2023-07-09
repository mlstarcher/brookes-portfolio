import React from 'react';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Cleverist from './pages/case_studies/Cleverist.js';
import LocalBasket from './pages/case_studies/LocalBasket.js';
// import Guilder from './pages/case_studies/Guilder.js';
import Sephora from './pages/case_studies/Sephora.js';
// import ErrorPage from './pages/ErrorPage.js';
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
            <Route path="cleverist" element={<Cleverist />} />
            <Route path="local-basket" element={<LocalBasket />} />
            {/* <Route path="guilder" element={<Guilder />} /> */}
            <Route path="sephora" element={<Sephora />} />
            {/* <Route path="*" element={<ErrorPage />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
