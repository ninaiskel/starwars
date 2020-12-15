import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Films from 'components/Films';
import Popup from 'components/popup';
import useGetItems from 'hooks/useGetItems';

const PilotsBio = ({ pilots }) => {
  const { pilotName } = useParams();
  const [pilotSelected] = pilots.filter((pilot) => pilot.name === pilotName);
  const films = pilotSelected?.films?.map(useGetItems);
  const starships = pilotSelected?.starships.map(useGetItems);

  return (
    <Popup itemSelected={pilotSelected} closePath='/pilots'>
      <Fragment>
        <span className='title-background'>{pilotSelected?.name}</span>
        <h2 className='title'>{pilotSelected?.name}</h2>;
        <div className='wrap-description'>
          <div className='description'>
            <ul>
              <li>
                <span>Height:</span>
                {pilotSelected?.height}
              </li>
              <li>
                <span>Mass:</span>
                {pilotSelected?.mass}
              </li>
              <li>
                <span>Hair Color:</span>
                {pilotSelected?.hair_color}
              </li>
              <li>
                <span>Skin color:</span>
                {pilotSelected?.skin_color}
              </li>
              <li>
                <span>Eye Color:</span>
                {pilotSelected?.eye_color}
              </li>
              <li>
                <span>Birth year:</span>
                {pilotSelected?.birth_year}
              </li>
              <li>
                <span>Gender:</span>
                {pilotSelected?.gender}
              </li>
            </ul>
          </div>
          <Films data={films} />
          <div className='description description-feature'>
            <h3>Starships</h3>
            <ul>
              {starships.map((starship, index) => (
                <li key={index}>
                  <h4>{starship.name}</h4>
                  <span>{starship.starship_class}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fragment>
    </Popup>
  );
};

PilotsBio.propTypes = {
  pilots: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.string,
      mass: PropTypes.string,
      hair_color: PropTypes.string,
      skin_color: PropTypes.string,
      eye_color: PropTypes.string,
      birth_year: PropTypes.string,
      gender: PropTypes.string,
    })
  ).isRequired,
};

export default PilotsBio;
