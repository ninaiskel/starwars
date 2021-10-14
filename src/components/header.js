import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ReactComponent as Logo } from 'svgs/logo.svg';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>

      <nav className="header-nav">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/pilots">
              {t('pilots')}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/starships">
              {t('starships')}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {i18n.language !== 'es' && <button onClick={() => i18n.changeLanguage('es')}>change to spanish</button>}
        {i18n.language !== 'en' && <button onClick={() => i18n.changeLanguage('en')}>change to english</button>}
      </div>
    </header>
  );
};

export default Header;
