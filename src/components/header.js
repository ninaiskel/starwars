import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from 'svgs/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <Logo />
      </Link>
      <nav className='header-nav'>
        <ul>
          <li>
            <NavLink activeClassName='active' to='/pilots'>
              pilots
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/starships'>
              starships
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
