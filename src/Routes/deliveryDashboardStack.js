import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Dashboard from '../Screens/DeliveryDashboard/DeliveryDashboard';
import OrdersFromPharmacy from '../Screens/OrdersFromPharmacy/OrdersFromPharmacy';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const screens = {


    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
            headerTintColor:'white',
        }
    },

    OrdersFromPharmacy: {
        screen: OrdersFromPharmacy,
        navigationOptions: {
            headerStyle: {
                height:70,
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

const deliveryDashboard = createStackNavigator(screens);

export default createAppContainer(deliveryDashboard);