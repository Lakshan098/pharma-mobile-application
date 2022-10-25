import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import OrdersHistory from "../Screens/OrdersHistory/OrdersHistory";

const screens = {


    OrdersHistory: {
        screen: OrdersHistory,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
            headerTintColor:'white',
        }
    }
    
}

const ordersHistory = createStackNavigator(screens);

export default createAppContainer(ordersHistory);