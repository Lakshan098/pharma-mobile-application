import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import RegisteredPharmacies from '../Screens/DeliveryRegisteredPharmacies/DeliveryRegisteredPharmacies';
import PharmacyDetails from '../Screens/DeliveryUnRegisterPharmacies/DeliveryUnRegisterPharmacies';

const screens = {

    RegisteredPharmacies: {
        screen: RegisteredPharmacies,
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

    PharmacyDetails: {
        screen: PharmacyDetails,
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

const dRegisteredPharmacies = createStackNavigator(screens);

export default createAppContainer(dRegisteredPharmacies);