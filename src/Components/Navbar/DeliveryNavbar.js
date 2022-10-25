import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import customerDashboard from '../../Screens/CustomerProfile/CustomerProfile';
import { createDrawerNavigator, openDrawer } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { Actions } from 'react-native-router-flux';
import { AuthContext } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Navbar({ navigation }) {

    const [visibility, setVisibility] = useState(false);
    const { logout, setLoggedout } = useContext(AuthContext);

    const Home = () => {
        Actions.dDashboard();
        setVisibility(false);
    }

    const Profile = () => {
        Actions.customerProfile()
        setVisibility(false)
    };

    const ConfirmedOrders = () => {
        Actions.dConfirmedOrders()
        setVisibility(false)
    };

    const CompletedOrders = () => {
        Actions.dCompletedOrders()
        setVisibility(false)
    };

    const DeliveryRegisteredPharmacies = () => {
        Actions.dRegisteredPharmacies()
        setVisibility(false)
    };

    const DeliveryRegisterForPharmacies = () => {
        Actions.dRegisterForPharmacies()
        setVisibility(false)
    };

    const Logout = async () => {
        logout();
        setVisibility(false);
        setLoggedout()
        Actions.login();
    };




    return (
        <View>
            <LinearGradient
                colors={['#0a5279', '#196284', '#368297']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Pressable><Icon onPress={() => { setVisibility(!visibility) }} style={styles.menu} name="bars" size={25} color="#fff" /></Pressable>
                <Image source={require('../../Assets/Brand/Logo1.png')} style={styles.logo} />
                <Pressable><Icon onPress={() => Actions.notifications()} style={styles.bell} name="bell" size={25} color="#fff"/></Pressable>
            </LinearGradient>
            <Modal
                transparent={true}
                visible={visibility}
            >
                <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
                    <View style={{ backgroundColor: '#ffffff', height: '100%', borderRadius: 10, width: '80%' }}>
                        <Pressable style={{ justifyContent: 'flex-end', width: '100%', alignItems: 'flex-end', paddingRight: 10, paddingTop: 10 }}>
                            <TouchableOpacity onPress={() => { setVisibility(!visibility) }}>
                                <Icon name="close" size={22} color="red" />
                            </TouchableOpacity>
                        </Pressable>
                        <Pressable onPress={Home} style={{ justifyContent: 'flex-end', width: '100%', alignItems: 'center', borderBottomWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingVertical: 20, textAlign: 'center' }}>Home</Text>
                        </Pressable>
                        <Pressable onPress={Profile} style={{ justifyContent: 'center', width: '100%', paddingVertical: 20, alignItems: 'center', borderWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Profile </Text>
                        </Pressable>
                        <Pressable onPress={ConfirmedOrders} style={{ justifyContent: 'center', width: '100%', paddingVertical: 20, alignItems: 'center', borderWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Confirmed Orders </Text>
                        </Pressable>
                        <Pressable onPress={CompletedOrders} style={{ justifyContent: 'center', width: '100%', paddingVertical: 20, alignItems: 'center', borderWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Completed Orders </Text>
                        </Pressable>
                        <Pressable onPress={DeliveryRegisteredPharmacies} style={{ justifyContent: 'center', width: '100%', paddingVertical: 20, alignItems: 'center', borderWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Registered Pharmacies </Text>
                        </Pressable>
                        <Pressable onPress={DeliveryRegisterForPharmacies} style={{ justifyContent: 'center', width: '100%', paddingVertical: 20, alignItems: 'center', borderWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Register for new Pharmacies </Text>
                        </Pressable>

                        <Pressable onPress={Logout} style={{ justifyContent: 'center', width: '100%', paddingVertical: 20, alignItems: 'center', borderWidth: 0.5, borderColor: 'grey' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Logout</Text>
                        </Pressable>

                    </View>

                </View>
            </Modal>
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