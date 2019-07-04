import React, { Component } from 'react';
import {
    View,Image,StyleSheet,Text,TouchableOpacity,TextInput
} from 'react-native';

//引入图标库
import Ionicons from 'react-native-vector-icons/Ionicons'

//引入UI-Button
import Buttons from 'react-native-really-awesome-button';

//引入屏幕尺寸适配
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

//引入观察者
import {observer} from "mobx-react";

//引入全局的数据管理
import Order from '../store/orderStore'


@observer
export default class input extends Component {
    constructor(props){
        super(props);
        this.state= {
            name:"",
            phone:"",
            ID:'',
        }

    }

    nextButton =async ()=> {
        await Order.SetName(this.state.name);
        await Order.SetPhone(this.state.phone);
        await Order.SetID(this.state.ID);
        const {navigation} = this.props;
        navigation.navigate('OrderFinish')
    };

    backButton = ()=> {
        const {navigation} = this.props;
        navigation.navigate('Time')
    };

    //输入用户名
    handNameChanged=(value)=>{
        this.setState({
            name:value
        });
    };

    //输入电话号码
    handPhoneChanged=(value)=>{
        this.setState({
            phone:value
        });
    };


    //输入ID
    handIDChanged=(value)=>{
        this.setState({
            ID:value
        });
    };

    valid(){
        return this.state.name &&this.state.phone &&this.state.ID
    }

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
                <Text style={styles.Title}>请填写个人信息</Text>

                <View style={styles.itemView}>

                    <View style={styles.inputView}>
                        <Text style={{fontSize: 24,marginLeft: width*0.05,marginTop:width*0.01,color:'black'}}>姓名</Text>
                        <TextInput
                            placeholderTextColor={'#cecece'} //设置首先默认的输入的字体颜色
                            placeholder = {'请输入您的名字'}  //设置首先默认的输入
                            autoCapitalize='none'  //设置首字母不自动大写
                            value={this.state.name}
                            onChangeText={this.handNameChanged.bind(this)} //设置改变文本函数
                            style = {styles.textInputStyle}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={{fontSize: 24,marginLeft: width*0.05,marginTop:width*0.01,color:'black'}}>电话</Text>
                        <TextInput
                            placeholderTextColor={'#cecece'} //设置首先默认的输入的字体颜色
                            placeholder = {'请输入您的电话号码'}  //设置首先默认的输入
                            autoCapitalize='none'  //设置首字母不自动大写
                            value={this.state.phone}
                            onChangeText={this.handPhoneChanged.bind(this)} //设置改变文本函数
                            style = {styles.textInputStyle}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={{fontSize: 22,marginLeft:width*0.005,marginTop:width*0.01,color:'black'}}>身份证</Text>
                        <TextInput
                            placeholderTextColor={'#cecece'} //设置首先默认的输入的字体颜色
                            placeholder = {'请输入您的身份证号码'}  //设置首先默认的输入
                            autoCapitalize='none'  //设置首字母不自动大写
                            value={this.state.ID}
                            onChangeText={this.handIDChanged.bind(this)} //设置改变文本函数
                            style = {styles.textInputStyle}
                        />
                    </View>

                    <Buttons
                        backgroundColor={'#dec482'}
                        width={width*0.45}
                        onPress={this.nextButton.bind(this)}
                        textColor={'#5e4812'}
                        textSize={16}
                        style={styles.login}
                        disabled={!this.valid()}
                    >
                        确认预约
                    </Buttons>
                </View>

            </View>
        );
    }
}

const styles =StyleSheet.create({

    login:{
        marginTop:height*0.03
    },
    icon:{
        color:'#12365E',
        width:width*0.11,
    },

    textInputStyle:{
        width: width*0.55,
        height:height*0.064,
        fontSize:18,
        marginLeft:width*0.05,
        borderWidth:1,
        justifyContent:'center',
        color:'#838383',
        borderColor: '#838383',
    },

    inputView:{
        flexDirection:'row',
        paddingVertical:height*0.03,
    },

    itemView:{
        position:'absolute',
        top: height * 0.27,
        width:width*0.85,
        alignSelf:'center',
        backgroundColor:'white',
        height:height*0.6,
        justifyContent:'center',
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
