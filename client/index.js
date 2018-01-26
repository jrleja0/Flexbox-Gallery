import './styling/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main, Gallery} from './components';

ReactDOM.render(
  <Main>
    <Gallery />
  </Main>,
  document.getElementById('app')
);
