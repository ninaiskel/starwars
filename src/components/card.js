import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ link, children }) => {
  return (
    <div className='list-card'>
      <Link to={link}>{children}</Link>
    </div>
  );
};

Card.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
