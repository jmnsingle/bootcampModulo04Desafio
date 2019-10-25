import React from 'react';
import profile from '../../assets/perfil.jpg'

import Comment from '../comments/Comment'

import './Feed.css';

function Feed() {
  return(
    <div className="feed">
      <div className="container">
        <div className="feed-content">
          <div className="info">
            <img src={profile} alt="Perfil"/>
            <div>
              <p className="name">Juliano Nogueira</p>
              <p className="info-name">28 Nov 2019</p>
            </div>
          </div>
          <div className="frase">
            <p>Pessoal, algúem sabe se a rocketSeat está contratando ??</p>
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
}

export default Feed;