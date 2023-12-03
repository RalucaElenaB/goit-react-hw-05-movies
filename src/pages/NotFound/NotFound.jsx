import React from 'react';
import './NotFound.module.css';
// import notfoundimg from './images/notfoundimg.webp';

function NotFound() {
  return (
    <div className="not-found-page">
      <h1 className="not-found-heading">Not Found....</h1>
      {/* <img src={notfoundimg} alt=""></img> */}
      <p className="notFoundMessage">Sorry! Please try found another movie!</p>
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <label
          className="SearchForm-button-label"
          htmlFor="text-search"
        ></label>
        <input
          name="text-search"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search another movie"
        />
      </form>
    </div>
  );
}

export default NotFound;
