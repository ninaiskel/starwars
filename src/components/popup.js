import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import { ReactComponent as Close } from 'svgs/close.svg';
import useVisible from 'hooks/useVisible';

const PopupWrapper = ({ children, closePath }) => {
  const { ref, isVisible } = useVisible(true);
  if (!isVisible) return <Redirect to={closePath} />;
  return (
    <div className='pop-up'>
      <div className='pop-up-content' ref={ref}>
        <Link to={closePath} className='close'>
          <Close />
        </Link>
        {children}
      </div>
    </div>
  );
};

const Popup = ({ children, itemSelected, closePath }) => {
  return (
    <PopupWrapper closePath={closePath}>
      {!itemSelected ? <p>Not Found</p> : children}
    </PopupWrapper>
  );
};

Popup.propTypes = {
  closePath: PropTypes.oneOf(['/pilots', '/starships']).isRequired,
  itemSelected: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Popup;
