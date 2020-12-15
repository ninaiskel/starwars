import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Films from 'components/Films';
import Popup from 'components/popup';
import useGetItems from 'hooks/useGetItems';

const StarShipsBio = ({ starships }) => {
  const { starshipName } = useParams();
  const [starshipSelected] = starships.filter(
    (starship) => starship.name === starshipName
  );

  const films = starshipSelected?.films.map(useGetItems);
  const pilots = starshipSelected?.pilots.map(useGetItems);

  return (
    <Popup itemSelected={starshipSelected} closePath='/starships'>
      <Fragment>
        <span className='title-background'>{starshipSelected?.name}</span>
        <h2 className='title'>{starshipSelected?.name}</h2>;
        <div className='description'>
          <ul>
            <li>
              <span>Model:</span>
              {starshipSelected?.model}
            </li>
            <li>
              <span>Cost in credits:</span>
              {starshipSelected?.cost_in_credits}
            </li>
            <li>
              <span>starship class:</span>
              {starshipSelected?.starship_class}
            </li>
            <li>
              <span>Crew:</span>
              {starshipSelected?.crew}
            </li>
            <li>
              <span>passengers:</span>
              {starshipSelected?.passengers}
            </li>
            <li>
              <span>Cargo capacity:</span>
              {starshipSelected?.cargo_capacity}
            </li>
            <li>
              <span>Consumables:</span>
              {starshipSelected?.consumables}
            </li>
            <li>
              <span>hyperdrive rating:</span>
              {starshipSelected?.hyperdrive_rating}
            </li>
            <li>
              <span>MGLT:</span>
              {starshipSelected?.MGLT}
            </li>
            <li>
              <span>max atmosphering speed:</span>
              {starshipSelected?.max_atmosphering_speed}
            </li>
            <li>
              <span>manufacturer:</span>
              {starshipSelected?.manufacturer}
            </li>
          </ul>
        </div>
        <Films data={films} />
        <div className='description description-feature'>
          <h3>Pilots</h3>
          <ul>
            {pilots.map((pilot, index) => (
              <li key={index}>
                <h4>{pilot.name}</h4>
                <span>{pilot.gender}</span>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    </Popup>
  );
};

StarShipsBio.propTypes = {
  starships: PropTypes.arrayOf(
    PropTypes.shape({
      model: PropTypes.string,
      cost_in_credits: PropTypes.string,
      starship_class: PropTypes.string,
      crew: PropTypes.string,
      passengers: PropTypes.string,
      cargo_capacity: PropTypes.string,
      consumables: PropTypes.string,
      hyperdrive_rating: PropTypes.string,
      MGLT: PropTypes.string,
      max_atmosphering_speed: PropTypes.string,
      manufacturer: PropTypes.string,
    })
  ).isRequired,
};

export default StarShipsBio;
