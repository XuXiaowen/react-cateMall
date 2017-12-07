import React from 'react';
import {render} from 'react-dom';
import './assets/common.less'
import App from "./containers/index";
render(
  <App/>,
  document.querySelector('#root')
);