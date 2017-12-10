//聪明组件=>获取数据 ->server->fetch
import React, {Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from "../../../components/ListComponent/ListComponent";
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      hasMore: true,//是否有更多
      data: [],//所有数据
      page: 0,//页码
      isLoading: true//是否正在加载
    }
  }

  componentDidMount() {
    this.processData(getList(this.props.cityName, 0))
  }

  //抽离 处理成功后的逻辑
  processData(result) {
    result.then(res => res.json()).then(({hasMore, data}) => {//结构赋值
      //console.log(data); //结构前是个对象 //拿到数据给傻组件去渲染
      this.setState({hasMore, data})
    })
  }

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
      </div>
    )
  }
}
