import './styling/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main, Gallery1} from './components';

ReactDOM.render(
  <Main>
    <Gallery1 />
  </Main>,
  document.getElementById('app')
);
