import React from 'react'
import {View, Text, StyleSheet, Button} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: any
}

export default class HomeScreen extends React.Component<Props> {
    logout = async () => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate('Auth');
        } catch (e) {
            console.error(e)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>home screen, welcome to home</Text>
                <Button title='logout' onPress={this.logout}/>
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