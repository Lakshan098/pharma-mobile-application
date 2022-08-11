import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Dashboard from '../Screens/DeliveryDashboard/DeliveryDashboard';
import OrderList from '../Screens/OrdersFromPharmacy/OrdersFromPharmacy';
import DeliveryDetails from '../Screens/DeliveryDetails/DeliveryDetails';
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
        }
    },

    OrderList: {
        screen: OrderList,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
        }
    },

    DeliveryDetails: {
        screen: DeliveryDetails,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
        }
    },

    OrdersFromPharmacy: {
        screen: OrdersFromPharmacy,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
        }
    },
}

const deliveryDashboard = createStackNavigator(screens);

export default createAppContainer(deliveryDashboard);