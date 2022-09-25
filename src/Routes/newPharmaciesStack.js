import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import RegisterForPharmacies from '../Screens/RegisterForPharmacies/RegisterForPharmacies';
import PharmacyDetails from '../Screens/PharmacyDetails/PharmacyDetails';

const screens = {

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

const dRegisterForPharmacies = createStackNavigator(screens);

export default createAppContainer(dRegisterForPharmacies);