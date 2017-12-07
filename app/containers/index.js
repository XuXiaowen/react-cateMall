import React, {Component} from 'react';
import {
  HashRouter as Router, //提供一个路由容器
  Route //单条路由
} from 'react-router-dom';
import Home from '../containers/Home/home';
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false//定义初始加载状态，未加载
    }
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home}/>
        </div>
      </Router>
    )
  }
}
