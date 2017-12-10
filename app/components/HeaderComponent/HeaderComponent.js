import React, {Component} from 'react';
import './headerComponent.less';
export default class HeaderComponent extends Component {

  back() {//此处写箭头函数报错...
    this.props.history.go(-1);
    console.log(this);
  }

  render() {

    return (
      <div className="header">
        <i
          className="iconfont icon-fanhui"
          onClick={() => {
            this.back.bind(this)
          }}
        ></i>
        <span>{this.props.title}</span>
      </div>
    )
  }
}
