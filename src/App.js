import Header from './pages/Header.js';
import Footer from './pages/Footer.js';
import Home from './pages/Home.js';
import ErrorPage from './pages/ErrorPage.js';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
