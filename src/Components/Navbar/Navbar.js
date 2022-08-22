import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import customerDashboard from '../../Screens/CustomerProfile/CustomerProfile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


export default function Navbar(navigation) {

    const Drawer = createDrawerNavigator();

    function MyDrawer(){
       console.log("hello");
        return (
        <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen name="profile" component={customerDashboard} />
            </Drawer.Navigator>     
        </NavigationContainer>   
        );
       
      }
    return(
        <View>
           
            <LinearGradient
            colors={['#0a5279', '#196284', '#368297' ]}
            style={styles.linearGradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            >
                <Pressable onPress= {MyDrawer} ><Icon style={styles.menu} name="bars" size={25} color="#fff"/></Pressable>
                <Image source={require('../../Assets/Brand/Logo1.png')} style={styles.logo} />
                <Icon style={styles.bell} name="bell" size={25} color="#fff"/>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({

    linearGradient: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    menu: {
        paddingTop: 45,
        paddingLeft: 15,
    },
    logo: {
        height: 55,
        width: 150,
        marginTop: 35,
    },
    bell: {
        paddingTop: 45,
        paddingRight: 15,
    },

});