import { string } from 'prop-types';

import { StyledLink } from './styled-nav';
const Menu = ({ className }) => {
  return (
    <div className={className}>
      <nav>
        <StyledLink to="/">Home</StyledLink>{' '}
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </div>
  );
};
Menu.propTypes = {
  className: string,
};
export { Menu };
