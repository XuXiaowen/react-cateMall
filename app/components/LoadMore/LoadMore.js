import React, {Component} from 'react';
import './loadMore.less';
export default class LoadMore extends Component {

  componentDidMount() {
    //绑定滚动事件
    this.fn = () => {
      clearTimeout(this.timer);//清除旧的定时器
      this.timer = setTimeout(() => {
        console.log('滚动加载更多');
        //先判断是否正在加载
        if (this.props.isLoading) {
          return;
        }
        //判断按钮距离屏幕顶端的距离
        let screen = window.screen.height,
          top = this.refs.more.getBoundingClientRect().top;//获取当前元素距离窗口的位置
        console.log(this.refs.more);
        console.log(top);
        if (top < screen) {//如果按钮进入可视窗口则加载更多
          this.props.loadMore();
        }
      }, 50);
    };
    window.addEventListener('scroll', this.fn);
  }

  componentWillUnmount() {
    //移除滚动事件
    window.removeEventListener('scroll', this.fn);
  }

  render() {
    return (
      <div className="hasMore">
        {
          this.props.hasMore ?
            <div
              onClick={!this.props.isLoading ? this.props.loadMore : null}
              ref='more'
            >加载更多</div>
            :
            <div>我是有底线的</div>
        }
      </div>
    )
  }
}
