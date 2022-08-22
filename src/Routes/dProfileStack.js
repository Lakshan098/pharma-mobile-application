import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Profile from '../Screens/DeliveryProfile/DeliveryProfile';
import RegisterPharmacy from '../Screens/DeliveryRegisteredPharmacies/DeliveryRegisteredPharmacies';
import UnregisterPharmacy from '../Screens/DeliveryUnRegisterPharmacies/DeliveryUnRegisterPharmacies';
import RegisterForPharmacies from '../Screens/RegisterForPharmacies/RegisterForPharmacies';
import PharmacyDetails from '../Screens/PharmacyDetails/PharmacyDetails';
const screens = {

    Profile: {
        screen: Profile,
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

    RegisterPharmacy: {
        screen: RegisterPharmacy,
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

    UnregisterPharmacy: {
        screen: UnregisterPharmacy,
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

    RegisterForPharmacies: {
        screen: RegisterForPharmacies,
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

const dProfile = createStackNavigator(screens);

export default createAppContainer(dProfile);