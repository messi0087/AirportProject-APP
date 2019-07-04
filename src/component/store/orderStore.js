// user
import { observable, action } from "mobx";

class OrderStore {
    @observable type; // 注册变量，使其成为可检测的
    @observable date;
    @observable name;
    @observable phone;
    @observable ID;
    @observable bool;

    constructor() {
        this.type = ''; // 初始化变量，可以定义默认值
        this.date = '';
        this.name = '';
        this.phone = '';
        this.ID = '';
        this.bool=false;
    }

    @action  // 方法推荐用箭头函数的形式
    SetType= (data) => {
        this.type = data;
    };

    @action  // 方法推荐用箭头函数的形式
    SetDate= (data) => {
        this.date = data;
    };

    @action  // 方法推荐用箭头函数的形式
    SetName= (data) => {
        this.name = data;
    };

    @action  // 方法推荐用箭头函数的形式
    SetPhone= (data) => {
        this.phone = data;
    };

    @action  // 方法推荐用箭头函数的形式
    SetID= (data) => {
        this.ID = data;
    };

    @action  // 方法推荐用箭头函数的形式
    SetBool= () => {
        this.bool = true;
    };

    @action  // 方法推荐用箭头函数的形式
    DefineOrder = () =>{
        this.type = ''; // 初始化变量，可以定义默认值
        this.date = '';
        this.name = '';
        this.phone = '';
        this.ID = '';
        this.bool=false;
    }
}

export default new OrderStore();


