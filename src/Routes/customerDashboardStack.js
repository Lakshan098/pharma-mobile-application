import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import PharmacySearchPage from "../Screens/PharmacySearchPage/PharmacySearchPage";

const screens = {


    PharmacySearchPage: {
        screen: PharmacySearchPage,
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

const customerDashboard = createStackNavigator(screens);

export default createAppContainer(customerDashboard);