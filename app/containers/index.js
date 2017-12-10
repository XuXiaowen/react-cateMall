import React, {Component} from 'react';
import {
  HashRouter as Router, //提供一个路由容器
  Route, //单条路由
  Switch //只匹配一次
} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';//绑定actionCreators组成的对象
import * as Actions from '../store/actions/userInfos';//获取所有actionCreator组成的对象
import {getStorage} from '../local/local';
import Home from '../containers/Home/home';
import Detail from '../containers/Detail/Detail';
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false//定义初始加载状态，未加载
    }
  }

  componentDidMount() {
    //先去本地查找是否存储过localStorage名字叫cityName的
    //1、第一次前没有cityName，赋予一个默认值 杭州
    //2、将当前的城市存放到redux里//因为所有的页面都要用到

    let cityName = getStorage('cityName');
    if (cityName == null) {
      cityName = '杭州'
    }
    //当页面加载后设置一个城市//需要在home页面把城市取出来
    this.props.userActions.update({
      cityName
    });

    this.setState({
      isLoading: true
    })
    //console.log(this.props.userActions);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
        </Switch>
      </Router>
    )
  }
}
export default connect(
  state => { //mapStateToProps
    return {}
  },
  dispatch => { //mapDispatchToProps
    return {
      userActions: bindActionCreators(Actions, dispatch)
    }
  }
)(App)