import { BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense } from 'react';
import Routes from './routes';
import './App.scss';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <Header />
      </Suspense>
      <Routes />
    </Router>
  );
}

export default App;
