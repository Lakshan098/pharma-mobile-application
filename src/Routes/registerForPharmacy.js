import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import RegisteredPharmacies from '../Screens/DeliveryRegisteredPharmacies/DeliveryRegisteredPharmacies';
import PharmacyDetails from '../Screens/DeliveryUnRegisterPharmacies/DeliveryUnRegisterPharmacies';
import {Image} from 'react-native'
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

const dRegisteredPharmacies = createStackNavigator(screens);

export default createAppContainer(dRegisteredPharmacies);