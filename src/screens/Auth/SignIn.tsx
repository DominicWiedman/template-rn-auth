import React from 'react'
import {View, Text, StyleSheet, Button} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any
}

export default class SignIn extends React.Component<Props> {
    login = async () => {
        try {
            await AsyncStorage.setItem('userToken', '123456');
            this.props.navigation.navigate('App');
        } catch (e) {
            console.error(e)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>sign in screen</Text>
                <Button title='login' onPress={this.login}/>
            </View>
        )
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