import React, { Component } from 'react';
import {
    View,Image,StyleSheet,Text,TouchableOpacity
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
import Orderss from '../store/orderStore'

@observer
export default class orderFinish extends Component {
    constructor(props){
        super(props);
        this.state= {

        }

    }

    nextButton = async ()=> {
        await  Orderss.SetBool();
        const {navigation} = this.props;
        navigation.navigate('Auth')
    };

    backButton = ()=> {
        const {navigation} = this.props;
        navigation.navigate('Input')
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
                <Text style={styles.Title}>您已经预约成功</Text>

                <View style={styles.itemView}>
                    <Ionicons
                        name = {'md-checkbox-outline'}
                        size={150}
                        style={{color:'#144673'}}
                    />

                    <Buttons
                        backgroundColor={'#dec482'}
                        width={width*0.45}
                        onPress={this.nextButton.bind(this)}
                        textColor={'#5e4812'}
                        textSize={16}
                        style={styles.login}
                    >
                        确认
                    </Buttons>
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


    login:{
        alignSelf:'center'
    },


    itemView:{
        position:'absolute',
        top: height * 0.27,
        width:width*0.85,
        alignSelf:'center',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
        height:height*0.6
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
