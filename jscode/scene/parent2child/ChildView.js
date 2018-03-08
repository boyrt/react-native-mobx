import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {observer} from 'mobx-react'
import TabBarItem from "../../common/TabBarItem";

@observer
export default class ChildView extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>{`开启状态:${this.props.store.open}`}</Text>
                <Text onPress={()=>this.contorl()}>{`开启/关闭`}</Text>
            </View>
        )
    }

    contorl(){
        if (this.props.store.open){
            this.props.store.close()
        }else{
            this.props.store.openT()
        }

    }

}