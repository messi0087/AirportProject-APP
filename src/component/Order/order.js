import React, { Component } from 'react';
import {
    View,Image,StyleSheet,Text,TouchableOpacity
} from 'react-native';


//引入观察者
import {observer} from "mobx-react";

//引入全局的数据管理
import Order from '../store/orderStore'

//引入图标库
import Ionicons from 'react-native-vector-icons/Ionicons'

//引入屏幕尺寸适配
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

@observer
export default class order extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                { icon:'md-airplane', text:'便捷登机' },
                { icon:'md-bus', text:'电瓶车服务' },
                { icon:'md-filing', text:'快递服务' },
                { icon:'logo-vimeo', text:'头等舱服务' },
                { icon:'md-cube', text:'行李打包' },
                { icon:'md-lock', text:'行李寄存' },
                { icon:'logo-bitcoin', text:'货币兑换' },
                { icon:'ios-cafe', text:'商务中心' }]
        };
    }

    nextButton =async (data)=> {
        await Order.SetType(data);
        // console.log(data);
        const {navigation} = this.props;
        navigation.navigate('Time')
    };

    backButton = ()=> {
        const {navigation} = this.props;
        navigation.navigate('Auth')
    };

    renderItem =()=>{
        return(
        this.state.data.map(item=>
                <TouchableOpacity
                    onPress={()=>this.nextButton(item.text)}
                    activeOpacity={0.5}
                    style={styles.itemButton}
                >
                        <Ionicons
                            name = {item.icon}
                            size={40}
                            style={[styles.icon,{marginLeft:10}]}
                        />
                        <Text style={styles.text}>{item.text}</Text>
                        <Ionicons
                            name = {'ios-arrow-forward'}
                            size={40}
                            style={[styles.icon,{paddingLeft:10}]}
                        />
                </TouchableOpacity>)
        )
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
                <Text style={styles.Title}>请选择机场服务</Text>

                <View style={styles.itemView}>
                {this.renderItem()}
                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create({
    icon:{
        color:'#12365E',
        width:width*0.11,
    },
    text:{
        width:width*0.5,
        color:'black',
        textAlign: 'center',
        textAlignVertical:'center',
        fontSize: 20,
        borderBottomWidth:3,
        borderColor: '#12365E',
        marginHorizontal:width*0.03
    },

    itemButton:{
        backgroundColor:'white',
        flexDirection:'row',
        paddingBottom:height*0.01
    },

    itemView:{
        position:'absolute',
        top: height * 0.27,
        alignSelf:'center',
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
