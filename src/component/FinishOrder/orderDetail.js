import React, { Component } from 'react';
import {
    View,Image,StyleSheet,Text,TouchableOpacity,TextInput
} from 'react-native';

//引入图标库
import Ionicons from 'react-native-vector-icons/Ionicons'

//引入UI-Button
import Buttons from 'react-native-really-awesome-button';

//引入观察者
import {observer} from "mobx-react";

//引入全局的数据管理
import Order from '../store/orderStore'

//引入屏幕尺寸适配
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

@observer
export default class orderDetail extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"",
            phone:"",
            ID:'',
        }

    }

    nextButton =async ()=> {
        await Order.DefineOrder();
        const {navigation} = this.props;
        navigation.navigate('OrderCancel')
    };

    backButton = ()=> {
        const {navigation} = this.props;
        navigation.navigate('Auth')
    };

    render(){
        return(
            <View>
                <Image style={styles.Image} source={require('../../image/content.png')}/>

                <TouchableOpacity
                    style = {styles.backButton}
                    onPress={this.backButton.bind(this)}
                    activeOpacity={0.5}
                >
                    <Ionicons
                        name = {'ios-arrow-back'}
                        size={40}
                        style={{color:'#ffffff'}}
                    />
                </TouchableOpacity>
                <Text style={styles.Title}>预约详情</Text>

                <View style={styles.itemView}>

                    <View style={{borderBottomWidth: 5,borderColor:'#f8f8f8'}}>
                        <View style={styles.inputView}>
                            <Ionicons
                                name = {'md-person-add'}
                                size={32}
                                style={{color:'#000000',marginLeft: 10}}
                            />
                            <Text style={styles.text}>预约服务</Text>
                        </View>
                        <Text style={styles.text1}>{Order.type}</Text>
                    </View>

                    <View style={{borderBottomWidth: 5,borderColor:'#f8f8f8'}}>
                        <View style={styles.inputView}>
                            <Ionicons
                                name = {'md-time'}
                                size={32}
                                style={{color:'#000000',marginLeft: 10}}
                            />
                            <Text style={[styles.text,{marginLeft:width*0.03}]}>预约时间</Text>
                        </View>
                        <Text style={{fontSize:18,color:'black',marginLeft:width*0.13}}>{Order.date}</Text>
                    </View>

                    <View style={{borderBottomWidth: 5,borderColor:'#f8f8f8'}}>
                        <View style={styles.inputView}>
                            <Ionicons
                                name = {'logo-linkedin'}
                                size={32}
                                style={{color:'#000000',marginLeft: 10}}
                            />
                            <Text style={[styles.text,{marginLeft:width*0.03}]}>预约人信息</Text>
                        </View>
                        <Text style={{fontSize:18,color:'black',marginLeft:width*0.13}}>
                            姓名：{Order.name}{'\n'}
                            电话：{Order.phone}{'\n'}
                            身份证：{Order.ID}</Text>
                    </View>

                    <Image style={{width:80,height:80}} source={require('../../image/twoma.jpg')}/>
                    <Text style={{color:'black',}}>*请向机场工作人员出示该二维码</Text>

                    <Buttons
                        backgroundColor={'#dec482'}
                        width={width*0.45}
                        onPress={this.nextButton.bind(this)}
                        textColor={'#5e4812'}
                        textSize={16}
                        style={styles.login}
                    >
                        取消预约
                    </Buttons>
                </View>

            </View>
        );
    }
}

const styles =StyleSheet.create({

    login:{
        marginTop:height*0.02
    },
    icon:{
        color:'#12365E',
        width:width*0.05,
    },

    text:{
        fontSize: 22,marginLeft: width*0.02,color:'black',
        width:width*0.65,
        borderBottomWidth:1,
    },

    text1:{
        fontSize: 22,marginLeft: width*0.128,color:'black',
        width:width*0.65,
    },

    inputView:{
        flexDirection:'row',
        width:width*0.85,
    },

    itemView:{
        position:'absolute',
        top: height * 0.27,
        width:width*0.85,
        alignSelf:'center',
        backgroundColor:'white',
        height:height*0.65,
        alignItems: 'center'
    },

    backButton:{
        position:'absolute',
        top: height * 0.037,
        left:width*0.04,
        width:width*0.12,
        height:height*0.06,
        justifyContent:'center',
        alignItems:'center'
    },

    Image:{
        width:width,height:height,position:'absolute',zIndex:2
    },

    Title:{
        position:'absolute',
        alignSelf:'center',
        color:'#ffffff',
        fontSize:25,
        top: height * 0.04
    },
});
