import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/homeHeader";
import Slider from "../../components/Slider/slider";
import Ad from "./subpage/Ad";
import './subpage/index.less';
export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader cityName="北京"/>
        <Slider/>
        <Ad/>
      </div>
    )
  }
}
