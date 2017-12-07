import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/homeHeader";
import Slider from "../../components/Slider/slider";
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京"/>
                <Slider/>
            </div>
        )
    }
}
