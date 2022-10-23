import * as React from 'react';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Router from '../../../Routes';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Footer({navigation}) {

    const DHome = () => {
        return(
            Actions.dDashboard()
            );
    };

    const ConfirmedOrders = () => {
        return(
            Actions.dConfirmedOrders()
            );
    };

    const CompletedOrders = () => {
        return(
            Actions.dCompletedOrders()
            );
    };

    const Profile = () => {
        return(
            Actions.customerProfile()
            );
    };

    return (
        <View style={styles.footerContainer}>

            <Pressable onPress={DHome}>
                <View style={styles.iconContainer}>
                    <Icon style={styles.homeIcon} name="home" size={30} color="#2e2e1f" onPress={DHome}/>
                    <Text>Home</Text>
                </View>
            </Pressable>

            <Pressable onPress={ConfirmedOrders}>
                <View style={styles.iconContainer}>
                    <Icon style={styles.cartIcon} name="shopping-cart" size={30} color="#2e2e1f" onPress={ConfirmedOrders}/>
                    <Text>Orders</Text>
                </View>
            </Pressable>

            <Pressable onPress={CompletedOrders}>
                <View style={styles.iconContainer}>
                    <Icon style={styles.historyIcon} name="history" size={30} color="#2e2e1f" onPress={CompletedOrders}/>
                    <Text>History</Text>
                </View>
            </Pressable>

            <Pressable  onPress={Profile}>
                <View style={styles.iconContainer}>
                    <Icon style={styles.userIcon} name="user" size={30} color="#2e2e1f" onPress={Profile}/>
                    <Text>Profile</Text>
                </View>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({

    footerContainer: {
        opacity: 1,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 30,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flex: 0.1,
        backgroundColor: '#fff',
    },
    iconContainer: {
        marginTop: 10,
        paddingVertical: 5
    },
    userIcon: {
        paddingLeft: 7,
    },
    cartIcon: {
        paddingLeft: 5,
    },
    homeIcon: {
        paddingLeft: 3,
    }
});