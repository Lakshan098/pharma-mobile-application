import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navbar() {
    return(
        <View>
            <LinearGradient
            colors={['#0a5279', '#196284', '#368297' ]}
            style={styles.linearGradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            >
                <Icon style={styles.menu} name="bars" size={25} color="#fff"/>
                <Image source={require('../../Assets/Brand/Logo1.png')} style={styles.logo} />
                <Icon style={styles.bell} name="bell" size={25} color="#fff"/>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({

    linearGradient: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    menu: {
        paddingTop: 35,
        paddingLeft: 15,
    },
    logo: {
        height: 55,
        width: 150,
        marginTop:20,
    },
    bell: {
        paddingTop: 35,
        paddingRight: 15,
    },

});