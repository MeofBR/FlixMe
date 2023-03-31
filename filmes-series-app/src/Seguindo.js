import React from 'react';
import Header from './Header';
import Feed  from './Feed';

import './assets/styles/Feed.css';
import './assets/styles/Header.css';

function Seguindo(props) {
  return (
    <div className="social-feed">
      <Header />
      <Feed isFavorite={true}/>
    </div>
  );
}



export default Seguindo;
