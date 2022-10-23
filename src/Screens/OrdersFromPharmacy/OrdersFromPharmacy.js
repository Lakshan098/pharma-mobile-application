import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import Navbar from '../../Components/Navbar/DeliveryNavbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';
import { Rating, AirbnbRating } from 'react-native-ratings';
import React, { useState, useEffect, useCallback } from 'react';
import client from '../../Api/client';
import { FlatList } from 'react-native-gesture-handler';

export default function DeliveryDashboard({ navigation }) {

    const dataPass = (oid) => {
        console.log(oid)
        client.post('/DeliveryAgent/GetOrder', {
            oid: oid,
            uid: window.loggedUserId
        })
        navigation.goBack()
    }

    const confirmation = (oid) =>
        Alert.alert(
            "Confimation",
            "Are you sure to asign the order for yourself?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => dataPass(oid)
                }
            ]
        );



    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataList, setDataList] = useState([]);

    const orders = [];

    useEffect(() => {
        console.log("Loading", loading);
        client.post('/DeliveryAgent/GetPharmacyOrders', {
            uid: navigation.getParam('key')
        }).then((response) => {
            setData(response.data)
            response.data.map((object) => {
                orders.push(
                    {
                        key: object.order_id,
                        cName: object.username,
                        cAddress: object.address,
                        cTelephone: object.contact_number,
                        fee: object.delivery_fee
                    }
                )
            })
            console.log(orders)
            setDataList(orders)
        });
    }, []);


    const orderList = ({ item }) => (
        <View style={styles.packageDetailsContainer}>
            <Text style={styles.header}>Package Details</Text>
            <Text style={styles.content}>
                Name: {item.cName}{'\n'}
                Address: {item.cAddress}{'\n'}
                Telephone: {item.cTelephone}
            </Text>
            <Text style={styles.header}>Delivery Details</Text>
            <Text style={styles.content}>
                Distance: 10KM{'\n'}
                Your income: {item.fee}
            </Text>
            <TouchableOpacity onPress={() =>confirmation(item.key)}
                style={globalStyles.orderConfirmButton}>
                <Text style={globalStyles.buttonText}>Confirm Order</Text>
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={globalStyles.fullPage}>
            <Navbar />

            <View style={styles.pharmacyDetails}>
                <Image
                    source={require('../../Assets/Images/pharmacy1.png')}
                    style={styles.pharmacyPic}
                />

                <View>
                    <Text style={styles.pharmacyText}><Text style={styles.pharmacyTextHeader}>{navigation.getParam('name')}</Text>{'\n'}{navigation.getParam('address')}{'\n'}{navigation.getParam('openTime')} - {navigation.getParam('closeTime')}{'\n'}Rating:
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={18}
                            startingValue={navigation.getParam('rating')}
                            readonly
                        />
                    </Text>
                </View>
            </View>

            <View style={styles.orderList}>
                <ScrollView>
                    <FlatList
                        data={dataList}
                        renderItem={orderList}
                    />
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    orderList: {
        paddingLeft: 35,
        paddingRight: 35,
        marginBottom: 20,
    },
    pharmacyPic: {
        width: 200,
        height: 100,
        borderRadius: 10,
    },

    pharmacyDetails: {
        padding: 35,
        display: 'flex',
        flexDirection: 'row',
    },

    pharmacyText: {
        fontWeight: '500',
        paddingLeft: 10,
    },
    pharmacyTextHeader: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Raleway-Bold',
    },

    packageDetailsContainer: {
        backgroundColor: '#E7E7E7',
        borderRadius: 10,
        paddingBottom: 20,
        marginBottom: 20,
    },

    header: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        padding: 10,
        fontFamily: 'Raleway-Bold',
    },

    content: {
        paddingLeft: 10,
        fontSize: 16,
        fontFamily: 'Raleway-SemiBold',
    }

})