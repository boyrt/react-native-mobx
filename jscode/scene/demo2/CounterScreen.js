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
import counterStore from '../../mobx/counter_store'


@observer
export default class CounterScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : 'CounterScreen',
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>Counter Container Test</Text>
                <Text>Clicked:<Text>{`${counterStore.counter}times`}</Text></Text>
                <Text onPress={()=>counterStore.increment()}>| +1 |</Text>
                <Text onPress={()=>counterStore.incrementAsync()}>| +1 Async |</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:'center',
        justifyContent:'center'
    },
});
 