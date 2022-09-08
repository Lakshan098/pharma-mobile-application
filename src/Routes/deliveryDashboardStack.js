import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Dashboard from '../Screens/DeliveryDashboard/DeliveryDashboard';
import OrdersFromPharmacy from '../Screens/OrdersFromPharmacy/OrdersFromPharmacy';

const screens = {


    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
            headerTintColor:'white',
        }
    },

    OrdersFromPharmacy: {
        screen: OrdersFromPharmacy,
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

const deliveryDashboard = createStackNavigator(screens);

export default createAppContainer(deliveryDashboard);