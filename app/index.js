import React from 'react';
import {render} from 'react-dom';
import './assets/common.less'
import App from "./containers/index";

import {Provider} from 'react-redux';
//导入store
import {configureStore} from './store';
//可以在configureStore传入初始状态
let store = configureStore(/*{
  userInfo:{cityName:'shanghai'}
}*/);//生成store//把store注入app根组件
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);