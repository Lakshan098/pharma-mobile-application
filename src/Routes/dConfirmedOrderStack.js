import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import OrdersList from '../Screens/ConfirmedOrders/ConfirmdOrders';
import Order from '../Screens/DeliveryPackageDetails/DeliveryPackageDetails';

const screens = {

    OrdersList: {
        screen: OrdersList,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
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
            headerTitle:'',
            headerTintColor:'white',
        }
    },
}

const dConfirmedOrder = createStackNavigator(screens);

export default createAppContainer(dConfirmedOrder);