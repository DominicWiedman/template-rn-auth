import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AuthLoading from './src/screens/Auth/AuthLoading'
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {AppStack, AuthStack} from "./src/navigators";

const Navigator = createAppContainer(createSwitchNavigator({
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack
    }, {
        initialRouteName: 'AuthLoading'
    })
);

AppRegistry.registerComponent(appName, () => Navigator);
