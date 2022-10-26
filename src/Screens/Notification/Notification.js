import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput, TouchableOpacity, ScrollView, Modal, ImageBackground, FlatList } from 'react-native';
import { globalStyles } from '../../../Styles/Global';
import ActorSelectRadioButton from '../../Components/ActorSelectRadioButton/ActorSelectRadioButton';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../Components/Footer/CustomerFooter';
import DelFooter from '../../Components/Footer/DeliveryFooter';
import Navbar from '../../Components/Navbar/Navbar';
import client from '../../Api/client';
import DelNavbar from '../../Components/Navbar/DeliveryNavbar';

export default function Notification({ navigation }) {
    const uid = window.loggedUserId;
    const user_type = window.loggedUserType;
    // const notifications = [{
    //     key: 1,
    //     image: "",
    //     notification: "Your order is processing",
    //     timestamp: "",

    // }]
    const [notification, setNotification] = useState([]);

    useEffect(() => {

        console.log(uid)
        client.post('/User/getNotifications', { uid : uid }).then((response) => {
            setNotification([]);
            console.log(response.data);
            if (response.data) {
                response.data.map((object) => {

                    setNotification(prevState => [...prevState,
                    {
                        key: object.notification_id,
                        image: object.profile_pic,
                        notification: object.notification,
                        timestamp: object.time_stamp,
                    }
                    ])
                })
            }
            console.log(notification);
        })

    }, []);

    const notificationRendering = ({ item }) => (
        <View style={styles.notificationcontainer}>
            <View style={styles.notificationitems}>
                <View style={styles.profilepiccontainer}>
                    <Image source={{ uri: item.image }} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 100 }} />
                </View>
                <View style={{ width: 230 }}>
                    <Text>
                        {item.notification}
                    </Text>
                </View>

            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <Text style={{ fontSize: 11, color: 'gray' }}>
                    {item.timestamp}
                </Text>
            </View>

        </View>
    )
    return (
        <View style={globalStyles.fullPage} >
            {
                (user_type == "customer") ?
                    <Navbar></Navbar>
                    :
                    null
            }
            {
                (user_type == "delivery_agent") ?
                    <DelNavbar />
                    :
                    null
            }
            <ScrollView>
                <Text style={styles.header}>Notifications</Text>
                <View style={styles.maincontainer}>
                    {(notification != []) ?
                        <FlatList
                            data={notification}
                            renderItem={notificationRendering}
                            showsVerticalScrollIndicator={false}
                        /> : null}
                    {/* <View style={styles.notificationcontainer}>
                        <View style={styles.notificationitems}>
                            <View style={styles.profilepiccontainer}>
                                <Image source={require('../../Assets/Images/pharmacy1.png')} style={{ width: '100%', height: undefined, aspectRatio: 1, borderRadius: 100 }} />
                            </View>
                            <View style={{ width: 230 }}>
                                <Text>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                </Text>
                            </View>

                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>

                        </View>

                    </View> */}
                </View>
            </ScrollView>
            {
                (user_type == "customer") ?
                    <Footer></Footer>
                    :
                    null
            }
            {
                (user_type == "delivery_agent") ?
                    <DelFooter />
                    :
                    null
            }
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Raleway-ExtraBold',
    },
    maincontainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60
    },
    notificationcontainer: {
        paddingVertical: 5,
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    profilepiccontainer: {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: 'ash',
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10

    },
    notificationitems: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})