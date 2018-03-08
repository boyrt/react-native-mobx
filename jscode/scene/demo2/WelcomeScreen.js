/**
 * Created by Administrator on 2018/3/8 0008
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { observer } from 'mobx-react'
import counterStore from '../../mobx/counter_store'

@observer
export default class WelcomeScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : 'Welcome',
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to Mobx React Native Demo</Text>
                <Text>Now counter is {counterStore.counter}</Text>
                <Text>Now remote counter is {counterStore.remoteCounter}</Text>

                <Text onPress={() => {
                    this.props.navigation.navigate('CounterScreen')
                }}>click to counter screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
});
 