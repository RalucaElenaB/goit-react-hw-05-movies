import React from 'react';
import './NotFound.module.css';

function NotFound() {
  return (
    <div>
      <h1 className="not-found-heading">Not Found....</h1>
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
