import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Notification from "../Screens/Notification/Notification";


const screens = {


    Notification: {
        screen: Notification,
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

const Notifications = createStackNavigator(screens);

export default createAppContainer(Notifications);