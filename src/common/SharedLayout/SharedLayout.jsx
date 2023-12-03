import React from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <main className="App">
        <section className="container">
          <Outlet />
        </section>
      </main>
      {/* SharedLayout */}
    </div>
  );
};
