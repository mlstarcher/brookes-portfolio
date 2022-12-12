import React, { useState, useContext } from 'react';
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import CaseStudy1 from './pages/CaseStudy1.js';
import ComingSoon from './pages/ComingSoon';
import ErrorPage from './pages/ErrorPage.js';
import ScrollToTop from './pages/ScrollToTop.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MenuContext from './MenuContext.js';

export const MenuStatus = React.createContext();

export function useMenuStatus() {
  return useContext(MenuStatus);
}

function App() {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MenuStatus.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
      }}
    >
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
    </MenuStatus.Provider>
  );
}

export default App;
