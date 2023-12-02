import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Home from './Home/Home';
import Loader from 'common/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
};
