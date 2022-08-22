import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import PharmacySearchPage from "../Screens/PharmacySearchPage/PharmacySearchPage";
import Portal from "../Screens/Portal/Portal";
import { Image } from 'react-native';

const screens = {


    PharmacySearchPage: {
        screen: PharmacySearchPage,
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
    Portal: {
        screen: Portal,
        navigationOptions: {
            headerStyle: {
                height: 100,
                elevation: 0,
                backgroundColor: '#0f587d'
            },
            headerLeft: ()=> null,
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', position:'relative', marginLeft:-50}}
                    resizeMode="contain"
                    source={require('../Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'white',
        }
    }

}

const customerDashboard = createStackNavigator(screens);

export default createAppContainer(customerDashboard);