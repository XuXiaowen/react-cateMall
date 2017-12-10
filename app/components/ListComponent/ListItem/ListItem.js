import React, {Component} from 'react';
import './listItem.less';
export default class ListItem extends Component {
  render() {
    let {img, title, subTitle, price, distance, number, id} = this.props.data;
    return (
      <div className="list-item">
        <div className="img"><img src={img} alt=""/></div>
        <div className="item-info">
          <h3>{title}</h3>
          <p className="subT">{subTitle}</p>
          <div>
            <strong>￥{price}</strong>
            <span className="num">{number}</span>
          </div>
          <span className="dis">{distance}</span>

        </div>
      </div>
    )
  }
}
