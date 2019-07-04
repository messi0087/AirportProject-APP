import React, { Component } from 'react';
import {
    View, Image, StyleSheet, Text, Alert
} from 'react-native';

//引入UI-Button
import Buttons from 'react-native-really-awesome-button';

//引入观察者
import {observer} from "mobx-react";

//引入全局的数据管理
import Orders from './store/orderStore'

//引入屏幕尺寸适配
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

//
import  SlideImage from './SlideImage'

@observer
export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
        };

    }

    loginButton = ()=> {
        const {navigation} = this.props;
        navigation.navigate('Order')
    };

    checkButton=()=>{
        if(Orders.bool) {
            const {navigation} = this.props;
            navigation.navigate('OrderDetail')
        }else {
            Alert.alert('请求错误','请先进行预约',
                [{text:"确认", onPress:()=>{}}]
            );
        }
    };

    render(){
        return(
            <View>
                <View style={styles.Slide}>
                    <SlideImage/>
                </View>
                <Image style={styles.Image} source={require('../image/index.png')}/>
                <Text style={styles.Title}>昆明长水国际机场预约系统</Text>
                <Text style={styles.Title2}>{'\t\t'}*本系统开放时间： {'\n'}06：00 -- 次日02：00</Text>

                <View>

                    <Buttons
                        backgroundColor={'#dec482'}
                        width={width*0.35}
                        onPress={this.loginButton.bind(this)}
                        textColor={'#5e4812'}
                        textSize={16}
                        style={styles.login}
                    >
                        开始预约
                    </Buttons>

                    <Buttons
                        backgroundColor={'#dec482'}
                        width={width*0.35}
                        onPress={this.checkButton.bind(this)}
                        textColor={'#5e4812'}
                        textSize={16}
                        style={styles.check}
                    >
                        我的预约
                    </Buttons>
                </View>


            </View>
        );
    }
}

const styles =StyleSheet.create({
    check:{
        top:height*0.8,
        position:'absolute',
        zIndex:1,
        right:width*0.12
    },

    login:{
        top:height*0.8,
        position:'absolute',
        zIndex:1,
        left:width*0.12
    },

    Slide:{
        backgroundColor:'yellow',
        width:width,
        height:height*0.5,
        position:'absolute',
        zIndex:1
    },

    Image:{
        width:width,height:height,position:'absolute',zIndex:2
    },

    Title:{
        position:'absolute',
        alignSelf:'center',
        color:'#ffffff',
        fontSize:25,
        top: height * 0.55
    },

    Title2:{
        position:'absolute',
        alignSelf:'center',
        color:'#ffffff',
        fontSize:18,
        top: height * 0.70
    },
});
