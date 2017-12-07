import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';
import './slider.less';
export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }

  render() {
    let swipeOptions = {
      loop:true,
      continuous: true,
      auto: 2000,
      callback: (index) => {
        this.setState({index});
      }
    };
    return (
      <div>
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
          <div>
            <ul>
              <li><Link to="/">
                <i className="iconfont icon-ziyouanpai"></i>
                <span>计划</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-matou"></i>
                <span>码头</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-shushide"></i>
                <span>party</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-duogouwu"></i>
                <span>购物</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-jichengche"></i>
                <span>计程车</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-jianshen"></i>
                <span>健身</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-canting"></i>
                <span>餐厅</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-zhusu"></i>
                <span>住宿</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-jingdian"></i>
                <span>景点</span>
              </Link></li>

              <li><Link to="/">
                <i className="iconfont icon-canyin"></i>
                <span>餐饮</span>
              </Link></li>

            </ul>
          </div>
          <div>2</div>
          <div>3</div>
        </ReactSwipe>
        <ul className="dots">
          <li className={this.state.index==0?"active":""}></li>
          <li className={this.state.index==1?"active":""}></li>
          <li className={this.state.index==2?"active":""}></li>
        </ul>
      </div>
    );
  }
}