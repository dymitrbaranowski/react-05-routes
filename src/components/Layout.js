import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/dogs">Dogs</StyledLink>
          </li>
          <li>
            <StyledLink to="/products">Products</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};
