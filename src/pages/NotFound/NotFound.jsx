import React from 'react';
import './NotFound.module.css';
import notfoundimg from './images/notFoundImage.png';
import Button from 'common/Button/Button';

function NotFound() {
  return (
    <div className="not-found-page">
      <h1 className="not-found-h1">Not Found....</h1>
      <img src={notfoundimg} alt=""></img>
      <p className="not-found-message">
        Sorry! Please try found another movie!
      </p>
      <Button />
    </div>
  );
}

export default NotFound;
