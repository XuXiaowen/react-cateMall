import React, {Component} from 'react';
import './homeHeader.less';

//主页头部组件
export default class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header">
        <div className="city">
          <span>{this.props.cityName}</span>
          <i className="iconfont icon-icon"></i>
        </div>
        <div className="search">
          <i className="iconfont icon-fangdajing"></i>
          <input type="text" placeholder="请输入关键字"/>
        </div>
        <div className="profile">
          <i className="iconfont icon-touxiang"></i>
        </div>
      </div>
    )
  }
}
