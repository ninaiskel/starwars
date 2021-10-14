import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="wrap-home">
      <div className="home">
        <h2>{t('title')}</h2>
        <p>{t('description.partOne')}</p>
        <p>{t('description.partTwo')}</p>
      </div>
    </div>
  );
};

export default Home;
