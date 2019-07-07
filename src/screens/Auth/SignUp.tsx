import React from 'react'
import {View, Text, StyleSheet, Button} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any
}

export default class SignUp extends React.Component<Props> {
    register = async () => {
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
                <Text>sign up screen</Text>
                <Button title='Sign Up' onPress={this.register}/>
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