import { NavLink, useLocation } from 'react-router-dom';
import './Button.module.css';

const Button = () => {
  const location = useLocation();
  const goBackPath = location.state?.from || '/movies';

  return (
    <div>
      <NavLink
        className="button"
        to={goBackPath}
        state={{ from: location.pathname }}
      >
        Back
      </NavLink>
    </div>
  );
};

export default Button;
