import React from 'react';
import PropTypes from 'prop-types';

const Films = ({ data }) => (
  <div className='description description-feature'>
    <h3>Films</h3>
    <ul>
      {data.map((film, index) => (
        <li key={index}>
          <h4>{film.title}</h4>
          <span>
            release date: <strong>{film.release_date}</strong>
          </span>
          <span>
            episode: <strong>{film.episode_id}</strong>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

Films.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      release_date: PropTypes.string,
      episode_id: PropTypes.number,
    })
  ).isRequired,
};

export default Films;
