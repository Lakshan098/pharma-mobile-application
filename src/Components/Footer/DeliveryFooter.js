import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../Routes/deliveryDashboardStack';
import Orders from '../../Screens/ConfirmedOrders/ConfirmdOrders';
import History from '../../Screens/CompletedOrders/CompletedOrders';

export default function Footer({navigation}) {

    const OrderFunction = () => {
        return(
            console.log('hellooo')
            );
    };


    return (
        <View style={styles.footerContainer}>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.homeIcon} name="home" size={30} color="#2e2e1f" onPress={OrderFunction}/>
                    <Text onPress={OrderFunction}>Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.cartIcon} name="shopping-cart" size={30} color="#2e2e1f" />
                    <Text>Orders</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.historyIcon} name="history" size={30} color="#2e2e1f" />
                    <Text>History</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.userIcon} name="user" size={30} color="#2e2e1f" />
                    <Text>Profile</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({

    footerContainer: {
        opacity: 1,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 35,
        paddingRight: 35,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flex: 0.1,
        backgroundColor: '#fff',
    },

    iconContainer: {
        marginTop: 10,
    },

    userIcon: {
        paddingLeft: 7,
    },

    historyIcon: {
        paddingLeft: 7,
    },

    cartIcon: {
        paddingLeft: 5,
    },

    homeIcon: {
        paddingLeft: 3,
    }
});