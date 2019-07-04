import React, { Component } from 'react';
import {
    View,Image,StyleSheet,Text,TouchableOpacity,FlatList,Alert
} from 'react-native';

import deal from '../../Utils/datedeal'
//引入图标库
import Ionicons from 'react-native-vector-icons/Ionicons'

//引入UI-Button
import Buttons from 'react-native-really-awesome-button';
import DateTimePicker from "react-native-modal-datetime-picker";

//引入屏幕尺寸适配
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

//引入观察者
import {observer} from "mobx-react";

//引入全局的数据管理
import Orders from '../store/orderStore'

@observer
export default class time extends Component {
    constructor(props){
        super(props);
        this.state= {
            isDateTimePickerVisible: false,
            time:'请选择时间',
            data:[
                {text:'上午\n6:00-7:30',num:30},  {text:'上午\n7:30-9:00',num:30},  {text:'上午\n9:00-10:30',num:30},
                {text:'上午\n10:30-12:00',num:30},{text:'中午\n12:00-13:30',num:30},{text:'下午\n13:30-15:00',num:30},
                {text:'下午\n15:00-16:30',num:30},{text:'下午\n16:30-18:00',num:30},{text:'晚上\n18:00-19:30',num:30},
                {text:'晚上\n19:30-21:00',num:30},{text:'晚上\n21:00-22:30',num:30},{text:'晚上\n22:30-00:00',num:30}],
        }

    }

    nextButton =async ()=> {
            if(this.state.time==='请选择时间'){
                Alert.alert('提交错误','请先选择时间',
                    [{text:"确认", onPress:()=>{}}]
                );
            }else {
                await Orders.SetDate(this.state.time);
                const {navigation} = this.props;
                navigation.navigate('Input')
            }
        };

    backButton = ()=> {
        const {navigation} = this.props;
        navigation.navigate('Order')
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
       const str = deal.formatDate(date)
        // console.log(str);
        this.setState({
            time:str
        });
        this.hideDateTimePicker();
    };

    // 渲染菜单的函数
    _renderItem = ({item}) => {
        //渲染图片
        return (
            // 每一项的菜单
            <TouchableOpacity style={styles.content}>
                <View style={{width:width*0.15,justifyContent:'flex-start',alignItems:'center'}}>
                    <Ionicons
                        name = {'md-alarm'}
                        size={40}
                        style={{color:'#12365E',}}
                    />
                    <View style={{width: 1, height:height*0.12 ,backgroundColor:'#12365E'}}/>
                </View>

                <View style={styles.textShow}>
                        <Text style={styles.textS}>
                            {item.text}
                        </Text>
                        <Text style={styles.textS2}>
                            {this.state.time}
                        </Text>
                    </View>

                <View style={{width:width*0.15,}}>
                <Text style={styles.textL}>
                  {item.num}
                </Text>
                </View>
            </TouchableOpacity>

        );
    };

    //没有内容时的flatlist的样式
    _createEmptyView = () =>{
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16}}>
                    暂无数据
                </Text>
            </View>
        )
    };

    //头部内容时的flatlist的样式
    _ListHeaderComponent = () =>{
        return (
            <View style={{height: 10,backgroundColor:'white'}}/>
        );
    };

    //分隔线
    _seperator = () => {
        return (
            <View style={{height: 5,backgroundColor:'white'}}/>
        );
    };

    //脚部内容时的flatlist的样式
    _ListFooterComponent= () =>{
        return (
            <View style={{height: 10,backgroundColor:'white'}}/>
        );
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
                <Text style={styles.Title}>请选择服务时间</Text>

                <View style={styles.itemView}>
                    <Buttons
                        backgroundColor={'#dec482'}
                        width={width*0.35}
                        onPress={this.showDateTimePicker.bind(this)}
                        textColor={'#5e4812'}
                        textSize={16}
                        style={styles.dateButton}
                    >
                        选择日期
                    </Buttons>

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        minimumDate={new Date()}
                        mode={'date'}
                    />

                    <FlatList
                        //确定数据是否增加
                        extraData={this.state}
                        //源数据
                        data={this.state.data}
                        // 空布局
                        ListEmptyComponent={this._createEmptyView}
                        //头部布局
                        ListHeaderComponent={this._ListHeaderComponent}
                        //尾部布局
                        ListFooterComponent={this._ListFooterComponent}
                        //生成key
                        keyExtractor={(item ,index) => index.toString()}
                        //渲染组件
                        renderItem={this._renderItem}
                        style={styles.listComponent}
                        //中间分界线
                        ItemSeparatorComponent={this._seperator}
                    />

                    <Buttons
                        backgroundColor={'#dec482'}
                        width={width*0.35}
                        onPress={this.nextButton.bind(this)}
                        textColor={'#5e4812'}
                        textSize={16}
                        style={styles.login}
                    >
                        确认预约
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

    dateButton:{
        alignSelf:'center'
    },

    login:{
        alignSelf:'center'
    },


    itemView:{
        position:'absolute',
        top: height * 0.27,
        width:width*0.85,
        alignSelf:'center',

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


    textL:{
        color:'white' ,fontWeight: 'bold',backgroundColor:'#36A9CE',fontSize:18,width:40,height:40 ,textAlign:'center',textAlignVertical: 'center'
    },

    textShow:{
        width:width*0.55,
    },

    textS:{
        textAlign: 'center',
        color:'black',
        fontWeight: 'bold',
        fontSize:18
    },

    textS2:{
        textAlign: 'center',
        color:'black',
        fontSize:18
    },

    content:{
        flexDirection: 'row',
        height:height*0.12
    },

    listComponent:{
        // backgroundColor:'blue',
    },

    orderLabel:{
        height:100,
        flexDirection:'row',
    },
});
