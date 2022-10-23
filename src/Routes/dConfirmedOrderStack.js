import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import OrdersList from '../Screens/ConfirmedOrders/ConfirmdOrders';
import Order from '../Screens/DeliveryPackageDetails/DeliveryPackageDetails';
import {Image} from 'react-native';
const screens = {

    OrdersList: {
        screen: OrdersList,
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

    Order: {
        screen: Order,
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

const dConfirmedOrder = createStackNavigator(screens);

export default createAppContainer(dConfirmedOrder);