import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Profile from '../Screens/DeliveryProfile/DeliveryProfile';

const screens = {

    Profile: {
        screen: Profile,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
            headerTintColor:'white',
        }
    },
}

const dProfile = createStackNavigator(screens);

export default createAppContainer(dProfile);