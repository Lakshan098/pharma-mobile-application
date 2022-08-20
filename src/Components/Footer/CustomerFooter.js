import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Router from '../../../Routes';
import { Actions } from 'react-native-router-flux';

export default function Footer({navigation}) {

    const Home = () => {
        return(
            Actions.customerDashboard()
            );
    };

    const Profile = () => {
        return(
            Actions.customerProfile()
            );
    };

    const Orders = () => {
        return(
            Actions.ongoingOrders()
            );
    };


    return (
        <View style={styles.footerContainer}>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.homeIcon} name="home" size={30} color="#2e2e1f" onPress={Home}/>
                    <Text onPress={Home}>Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.cartIcon} name="shopping-cart" size={30} color="#2e2e1f" onPress={Orders} />
                    <Text>Orders</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.historyIcon} name="inbox" size={30} color="#2e2e1f" />
                    <Text >Chat</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon style={styles.userIcon} name="user" size={30} color="#2e2e1f" onPress={Profile} />
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
    cartIcon: {
        paddingLeft: 5,
    },

    homeIcon: {
        paddingLeft: 3,
    }
});