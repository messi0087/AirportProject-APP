//路由商店
import {
    createSwitchNavigator
} from 'react-navigation';


import React from 'react';
import App from '../../App'
import index from './index'
import test from '../test/test'
import Order from './Order/order'
import Time from './Order/time'
import Input from './Order/input'
import OrderFinish from './FinishOrder/orderFinish'
import OrderCancel from './FinishOrder/orderCancel'
import OrderDetail from './FinishOrder/orderDetail'

export default createSwitchNavigator(
    {
        //主页
        Auth: index,
        // Auth: OrderDetail,

        // 界面的跳转
        Order: Order,
        Time: Time,
        Input:Input,
        OrderFinish:OrderFinish,
        OrderCancel:OrderCancel,
        OrderDetail:OrderDetail,
        // makeOrder:makeOrder,

    },
    {
        initialRouteName: 'Auth',
    }
);
