import './styling/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main, Gallery1, Gallery2} from './components';

ReactDOM.render(
  <Main>
    <Gallery1 />
    <div className="separator" />
    <Gallery2 />
    <div className="separator" />
  </Main>,
  document.getElementById('app')
);
