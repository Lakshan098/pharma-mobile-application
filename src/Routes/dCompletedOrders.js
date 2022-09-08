import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import OrdersList from '../Screens/CompletedOrders/CompletedOrders';
import Order from '../Screens/DeliveryDetails/DeliveryDetails';

const screens = {

    OrdersList: {
        screen: OrdersList,
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

    Order: {
        screen: Order,
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

const dCompletesOrder = createStackNavigator(screens);

export default createAppContainer(dCompletesOrder);