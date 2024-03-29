import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import { Image } from "react-native";
import CustomerProfile from "../Screens/CustomerProfile/CustomerProfile";

const screens = {
    CustomerProfile: {
        screen: CustomerProfile,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerLeft: ()=> null,
            headerTitle:'',
            headerTintColor:'white',
        }
    },

}

const customerProfile = createStackNavigator(screens);

export default createAppContainer(customerProfile);