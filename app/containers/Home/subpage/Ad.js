import React, {Component} from 'react';
import {getAd} from '../../../fetch/home';

export default class Ad extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getAd().then(res => res.json()).then(data => {
      this.setState({
        data
      });
    })
  }

  render() {
    return (
      <ul className="ad">
        {this.state.data.length ?
          this.state.data.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                <img src={item.img}/>
                <span>{item.title}</span>
              </a>
            </li>
          ))
          :
          <div>正在加载</div>
        }
      </ul>
    )
  }
}
