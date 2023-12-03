import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Home from './Home/Home';
import Loader from 'common/Loader/Loader';
import NotFound from './NotFound/NotFound';

// import { SharedLayout } from 'common/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));

const Cast = lazy(() => import('pages/MoviesDetails/components/Cast/Cast'));
const Reviews = lazy(() =>
  import('pages/MoviesDetails/components/Reviews/Reviews')
);

export const App = () => {
  return (
    <>
      <div>
        <nav className="navigation nav-links">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>

        <Routes>
          {/* <Route path="/" element={<SharedLayout />}></Route> */}

          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

          <Route path="*" element={<NotFound />}></Route>

          <Route
            path="/movies"
            element={
              <Suspense fallback={<Loader />}>
                <Movies />
              </Suspense>
            }
          />

          <Route
            path="movies/:movieId/"
            element={
              <Suspense fallback={<Loader />}>
                <MoviesDetails />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<Loader />}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<Loader />}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
        </Routes>

        {/* <NotFound /> */}
        {/* <Route path="/NotFound" element={<div>Test</div>}></Route> */}
      </div>
    </>
  );
};
