import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import useSWR from 'swr';

import { API_DOMAIN } from 'config';
import Card from 'components/card';
import PilotsBio from 'modules/pilots/pilotsBio';
import Pagination from 'components/pagination';
import Loading from 'modules/loading';

const PilotList = () => {
  let { path } = useRouteMatch();

  const endpoint = `${API_DOMAIN}people/`;
  const [currentPage, setCurrentPage] = useState(endpoint);

  const { data, error } = useSWR(currentPage);

  const isLoading = !data;
  const isPreviousResults = !isLoading && !!data.previous;
  const isNextResults = !isLoading && !!data.next;

  const pilots = data ? data.results : [];

  const paginationOnClick = (type) => {
    if (type === 'prev') {
      setCurrentPage(data.previous);
    }
    if (type === 'next') {
      setCurrentPage(data.next);
    }
  };

  return (
    <section>
      {isLoading && <Loading />}
      <div className='wrap-list'>
        {error && <p>{error}</p>}
        {pilots.map((pilot) => (
          <Card key={pilot.url} link={`${path}/${pilot.name}`}>
            <h2>{pilot.name}</h2>
            <p>{pilot.gender}</p>
          </Card>
        ))}
      </div>
      <Pagination
        isPreviousResults={isPreviousResults}
        isNextResults={isNextResults}
        onClick={paginationOnClick}
      />

      <Switch>
        <Route path={`${path}/:pilotName`}>
          {!isLoading && <PilotsBio pilots={pilots} />}
        </Route>
      </Switch>
    </section>
  );
};

export default PilotList;
