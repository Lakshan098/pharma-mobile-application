import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import ActorSelect from '../Screens/ActorSelect/ActorSelect';
import { Image } from 'react-native';

const screens = {
    Login: {
        screen: Login,
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
    ActorSelect: {
        screen: ActorSelect,
        navigationOptions: {
            headerStyle: {
                height: 100,
                elevation: 0,
                backgroundColor: '#0f587d'
            },
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', position:'relative', marginLeft:-50}}
                    resizeMode="contain"
                    source={require('../../src/Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'white',
        }
    },


    CustomerSignup: {
        screen: Signup,    
        navigationOptions: {
            headerStyle: {
                height: 100,
                elevation: 0,
                backgroundColor: '#0f587d'
            },
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', position:'relative', marginLeft:-50}}
                    resizeMode="contain"
                    source={require('../../src/Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'white',
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);