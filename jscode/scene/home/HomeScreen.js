/**
 * Created by Administrator on 2018/3/7 0007
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import {inject,observer} from 'mobx-react';

import theme from '../../common/color';
import { width } from '../../common/screen';
import ThemeLine from './ThemeLine';
import NewGoodsView from './NewGoodsView';
import Disturb from '../../common/disturbArray'

@inject('rootStore')
@observer
export default class HomeScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : '迷你水果商城',
        headerTitleStyle: {alignSelf: 'center', fontSize: 15, color: theme.fontColor},
        headerStyle: {height: 38, backgroundColor: theme.color}
    });


    render() {
        console.log('====',this.props.rootStore.NewGoodsStore)
        // 打乱数组
        let data = Disturb(this.props.rootStore.NewGoodsStore.allDatas.data)
        return (
            <ScrollView style={styles.container}>
                    <ThemeLine name={'最近新品'}/>
                    <NewGoodsView itemDatas={data} navigation={this.props.navigation}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    swiper: {
        width: width,
        height: 200
    },
});
 