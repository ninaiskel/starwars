import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Arrow } from 'svgs/arrow.svg';

const Pagination = ({ isPreviousResults, isNextResults, onClick }) => {
  return (
    <div className='pagination'>
      {isPreviousResults && (
        <button className='button button-back' onClick={() => onClick('prev')}>
          <Arrow />
          Previous
        </button>
      )}
      {isNextResults && (
        <button
          name='Next'
          className='button button-next'
          onClick={() => onClick('next')}
        >
          Next
          <Arrow />
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  isPreviousResults: PropTypes.bool,
  isNextResults: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Pagination;
