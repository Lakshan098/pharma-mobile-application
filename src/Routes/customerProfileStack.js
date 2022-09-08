import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import { Image } from "react-native";
import CustomerProfile from "../Screens/CustomerProfile/CustomerProfile";

const screens = {


    CustomerProfile: {
        screen: CustomerProfile,
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

}

const customerProfile = createStackNavigator(screens);

export default createAppContainer(customerProfile);