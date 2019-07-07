import {createBottomTabNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SignIn from './screens/Auth/SignIn'
import SignUp from './screens/Auth/SignUp'


export const AppStack: any = createBottomTabNavigator({
    Home: HomeScreen,
});

export const AuthStack: any = createBottomTabNavigator({
    SignIn: SignIn,
    SignUp: SignUp
});