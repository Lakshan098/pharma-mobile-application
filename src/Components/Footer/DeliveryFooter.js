import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
    return(
        <View style={styles.footerContainer}>
            <View style={styles.iconContainer}>
                <Icon style={styles.homeIcon} name="home" size={30} color="#000"/>
                <Text>Home</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon style={styles.cartIcon} name="shopping-cart" size={30} color="#000"/>
                <Text>Orders</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon style={styles.historyIcon} name="history" size={30} color="#000"/>
                <Text>History</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon style={styles.userIcon} name="user" size={30} color="#000"/>
                <Text>Profile</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    footerContainer: {
        opacity:0.8,
        backgroundColor: 'transparent',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 35,
        paddingRight: 35,
      },

    iconContainer: {
        marginTop: -20,
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