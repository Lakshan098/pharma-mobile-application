import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import RegisterForPharmacies from '../Screens/RegisterForPharmacies/RegisterForPharmacies';
import PharmacyDetails from '../Screens/PharmacyDetails/PharmacyDetails';
import {Image} from 'react-native';
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
                height: 70,
                elevation: 0,
            },
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', marginRight:40, position:'relative'}}
                    resizeMode="contain"
                    source={require('../../src/Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'red',
        }
    },
}

const dRegisterForPharmacies = createStackNavigator(screens);

export default createAppContainer(dRegisterForPharmacies);