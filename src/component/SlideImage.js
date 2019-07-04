import React, { PureComponent } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';

export default class SlideImage extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <SwiperFlatList
                    autoplay={true}
                    autoplayDelay={3}
                    autoplayLoop={true}
                    index={0}                            //起始的位置
                    showPagination={true}                //显示分页点
                    paginationActiveColor={'#dec482'}    //显示分页点激活的颜色
                    paginationDefaultColor={'#e1e1e1'}   //显示分页点激活的颜色
                    paginationStyle={styles.point}
                >
                    <View style={styles.child}>
                        <Image style={styles.image} source={require('../image/Banner01.jpg')}/>
                    </View>
                    <View style={styles.child}>
                        <Image style={styles.image} source={require('../image/Banner02.jpg')}/>
                    </View>
                    <View style={styles.child}>
                        <Image style={styles.image} source={require('../image/Banner03.jpg')}/>
                    </View>
                </SwiperFlatList>
            </View>
        );
    }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width,
        height:height*0.4,
        backgroundColor: 'white',
    },
    child: {
        width,
        justifyContent: 'flex-start',
    },
    point:{
        justifyContent: 'flex-start',
        position:'absolute',
        top:200,
        left:30,
    },
    image:{
        height:height*0.39,
        width
    }
});
