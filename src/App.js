import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import CaseStudy1 from './pages/CaseStudy1.js';
import ErrorPage from './pages/ErrorPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="home" element={<Home />} />
            <Route index path="about" element={<About />} />
            <Route path="case-study1" element={<CaseStudy1 />} />
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
