/**
 * Created by Administrator on 2018/3/7 0007
 */

import React, { Component } from 'react';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Provider } from 'mobx-react'

import TabBarItem from './common/TabBarItem'
import theme from './common/color'
import store from './mobx/store'
import HomeScreen from './scene/home/HomeScreen'
import CategoryScreen from './scene/category/CategoryScreen'
import CartScreen from './scene/cart/CartScreen'
import MineScreen from './scene/mine/MineScreen'
import ItemDetail from './scene/itemDetail/ItemDetail'
import OrderScreen from './scene/order/OrderScreen'
import WelcomeScreen from './scene/demo2/WelcomeScreen'
import CounterScreen from './scene/demo2/CounterScreen'

// 全局注册并注入mobx的Rootstore实例，首页新品，分类页，商品详情页，购物车页面都要用到store
const Navigation = () => {
    return (
        <Provider rootStore={store}>
            <Navigator/>
        </Provider>
    )
}

const Tab = TabNavigator(
    {
        Home : {
            screen : HomeScreen,
            navigationOptions : ({ navigator }) => (
                {
                    tabBarLabel : '主页',
                    tabBarIcon : ({ focused, tintColor }) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            selectedImage={require('./img/homeSelect.png')}
                            normalImage={require('./img/home.png')}
                        />
                    )
                }
            )
        },
        Category : {
            screen : CategoryScreen,
            navigationOptions : ({ navigation }) => (
                {
                    tabBarLabel : '分类',
                    tabBarIcon : ({ focused, tintColor }) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            selectedImage={require('./img/categorySelect.png')}
                            normalImage={require('./img/category.png')}
                        />
                    )
                }
            )
        },
        Cart : {
            screen : CartScreen,
            navigationOptions : ({ navigation }) => (
                {
                    tabBarLabel : '购物车',
                    tabBarIcon : ({ focused, tintColor }) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            selectedImage={require('./img/cartSelect.png')}
                            normalImage={require('./img/cart.png')}
                        />
                    )
                }
            )
        },
        Mine : {
            screen : MineScreen,
            navigationOptions : ({ navigation }) => (
                {
                    tabBarLabel : '我的',
                    tabBarIcon : ({ focused, tintColor }) => (
                        <TabBarItem
                            tintColor={tintColor}
                            focused={focused}
                            selectedImage={require('./img/mineSelect.png')}
                            normalImage={require('./img/mine.png')}
                        />
                    )
                }
            )
        }

    },
    // tabScreen配置
    {
        tabBarComponent : TabBarBottom, // 自定义
        tabBarPosition : 'bottom',
        swipeEnabled : false,
        animationEnabled : true,
        lazy : true,
        tabBarOptions : {
            activeTintColor : theme.color,
            inactiveTintColor : '#979797',
            labelStyle : {
                fontSize : 12, // 文字大小
            },
        }
    }
)

const Navigator = StackNavigator(
    {
        Tab : { screen : Tab },
        ItemDetail:{screen: ItemDetail},
        Cart:{screen: CartScreen},
        OrderScreen: {screen: OrderScreen},
        WelcomeScreen:{screen:WelcomeScreen},
        CounterScreen:{screen:CounterScreen},

    },
    {
        navigationOptions : {
            // 开启动画
            animationEnabled : true,
            // 开启边缘触摸返回
            gesturesEnabled : true
        },
        mode : 'card',
        transitionConfig : () => ({
            // 统一安卓和苹果页面跳转的动画
            screenInterpolator : CardStackStyleInterpolator.forHorizontal,
        })
    }
)


export default Navigation;



 