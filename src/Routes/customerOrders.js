import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import OngoingOrders from "../Screens/Orders/OngoingOrders";

const screens = {


    OngoingOrders: {
        screen: OngoingOrders,
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

const ongoingOrders = createStackNavigator(screens);

export default createAppContainer(ongoingOrders);