//聪明组件=>获取数据 ->server->fetch
import React, {Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from "../../../components/ListComponent/ListComponent";
import LoadMore from "../../../components/LoadMore/LoadMore";
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hasMore: true,//是否有更多
      data: [],//所有数据
      page: 0,//页码
      isLoading: true//是否正在加载//默认正在加载，不能点加载更多，数据加载完成后为false
    }
  }

  componentDidMount() {
    this.processData(getList(this.props.cityName, 0))
  }

  //抽离 处理成功拿到数据后的逻辑
  processData(result) {
    result.then(res => res.json()).then(({hasMore, data}) => {//结构赋值
      //console.log(data); //结构前是个对象 //拿到数据给傻组件去渲染
      this.setState({
        hasMore,
        data: this.state.data.concat(data),
        isLoading: false
      })
    })
  }

  //需要在当前写一个加载更多的函数，传递给loadMore，当点击按钮，触发我们传递函数
  loadMore(){
    console.log('loading more');
    this.setState({
      page: this.state.page + 1,
      isLoading: true
    }, () => {
      //这个回调函数可以获取到最新的页码状态
      this.processData(getList(this.props.cityName, this.state.page));
    })
  };

  render() {
    return (
      <div>
        {
          /*将数据传递给ListComponent组件 让其展示*/
          this.state.data.length ?
            <ListComponent data={this.state.data}/>
            :
            <div>正在加载</div>
        }
        <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
      </div>
    )
  }
}
