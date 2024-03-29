import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {Image} from 'react-native';
import ForgotPassword from "../Screens/ForgotPassword/ForgotPassword";
import ResetPassword from "../Screens/ForgotPassword/ResetPassword";

const screens = {

    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            headerStyle: {
                height: 100,
                elevation: 0,
                backgroundColor: '#0f587d'
            },
            headerLeft: ()=> null,
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', position:'relative'}}
                    resizeMode="contain"
                    source={require('../../src/Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'white',
        }
    },

    ResetPassword: {
        screen: ResetPassword,
        navigationOptions: {
            headerStyle: {
                height: 100,
                elevation: 0,
                backgroundColor: '#0f587d'
            },
            headerLeft: ()=> null,
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', position:'relative',marginLeft:-50}}
                    resizeMode="contain"
                    source={require('../../src/Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'white',
        }
    },
}

const forgotPassword = createStackNavigator(screens);

export default createAppContainer(forgotPassword);