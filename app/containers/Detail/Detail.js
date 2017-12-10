import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

//通过路由渲染的组件都会在this.props上增加很多属性

export default class Detail extends Component{
    render(){
      console.log(this.props);
      return (
            <div>
              <HeaderComponent
                title="商户详情"
                history={this.props.history}
              />

            </div>
        )
    }
}
