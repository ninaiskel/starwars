import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import useSWR from 'swr';

import { API_DOMAIN } from 'config';
import Card from 'components/card';
import StarShipsBio from 'modules/starships/starShipsBio';
import Pagination from 'components/pagination';
import Loading from 'modules/loading';

const StarShips = () => {
  let { path } = useRouteMatch();

  const endpoint = `${API_DOMAIN}starships/`;
  const [currentPage, setCurrentPage] = useState(endpoint);

  const { data, error } = useSWR(currentPage);

  const isLoading = !data;
  const isPreviousResults = !isLoading && !!data.previous;
  const isNextResults = !isLoading && !!data.next;

  const starships = data ? data.results : [];

  const paginationOnClick = (type) => {
    if (type === 'prev') {
      setCurrentPage(data.previous);
      console.log('guardar data.previous en el estado currentPage');
    }
    if (type === 'next') {
      setCurrentPage(data.next);
      console.log('guardar data.next en el estado currentPage');
    }
  };

  return (
    <section>
      {isLoading && <Loading />}

      <div className='wrap-list'>
        {error && <p>{error}</p>}
        {data &&
          data.results.map((starship) => (
            <Card key={starship.url} link={`${path}/${starship.name}`}>
              <h2>{starship.name}</h2>
              <p>{starship.starship_class}</p>
            </Card>
          ))}
        ;
      </div>

      <Pagination
        isPreviousResults={isPreviousResults}
        isNextResults={isNextResults}
        onClick={paginationOnClick}
      />

      <Switch>
        <Route path={`${path}/:starshipName`}>
          {!isLoading && <StarShipsBio starships={starships} />}
        </Route>
      </Switch>
    </section>
  );
};

export default StarShips;
