import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import OngoingOrders from "../Screens/Orders/OngoingOrders";
import StripeApp from "../Screens/Stripeapp/StripeGateway";
import { View, Image, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

const screens = {


    OngoingOrders: {
        screen: OngoingOrders,
        navigationOptions: {
            headerStyle: {
                height: 0,
                elevation: 0,
            },
            headerTitle:'',
            headerTintColor:'white',
        }
    },
    StripeApp: {
        screen: StripeApp,
        navigationOptions: {
            headerStyle: {
                height: 100,
                elevation: 0,
                backgroundColor: '#0f587d'
            },
            headerTitle:(
                <Image style={{ height: 100, width:140, alignSelf:'center', position:'relative', marginLeft:-50}}
                    resizeMode="contain"
                    source={require('../../src/Assets/Brand/Logo1.png')}
                />
            ),
            headerTintColor:'white',
        }
    },

}

const ongoingOrders = createStackNavigator(screens);

export default createAppContainer(ongoingOrders);