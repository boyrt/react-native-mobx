/**
 * Created by Administrator on 2018/3/8 0008
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import {observer} from 'mobx-react'
import openStore from '../../mobx/open_store'
import ChildView from './ChildView'

@observer
export default class Parent2ChildScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : '状态传递给子组件',
    });

    render() {
        return (
            <View style={styles.container}>
                {/*<Text>{openStore.open ? '开启状态':'关闭状态'}</Text>*/}
                <Text>{`开启状态:${openStore.open}`}</Text>
                <ChildView store={openStore}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
});
 