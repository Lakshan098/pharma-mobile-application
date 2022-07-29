import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Dashboard from '../Screens/DeliveryDashboard/DeliveryDashboard';

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
}

const deliveryDashboard = createStackNavigator(screens);

export default createAppContainer(deliveryDashboard);