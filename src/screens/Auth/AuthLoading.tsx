import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any
}

export default class AuthLoading extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        setTimeout(() => {
            this._bootstrapAsync()
        }, 3000)
    }

    _bootstrapAsync = async () => {
        try {
            const userToken = await AsyncStorage.getItem('userToken');
            this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        } catch (e) {
            console.error(e)
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#0054ff'/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});