import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {Image} from 'react-native';
import VerifyEmail from '../Screens/VerifyEmail/VerifyEmail'


const screens = {

    VerifyEmail: {
        screen: VerifyEmail,
        navigationOptions: {
            headerStyle: {
                height: 100,
                elevation: 0,
            },
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', position:'relative'}}
                    resizeMode="contain"
                    source={require('../../src/Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'white',
        }
    },
}

const verifyEmail = createStackNavigator(screens);

export default createAppContainer(verifyEmail);