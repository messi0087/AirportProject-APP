//配置路由管理库
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from "../component/AppNavigator";


const AppStackNavigatorContainer = createAppContainer(AppNavigator);

export default class main extends Component{
    render() {
        return (
            <AppStackNavigatorContainer/>
        );
    }
}
