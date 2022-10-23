import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import Navbar from '../../Components/Navbar/DeliveryNavbar';
import { globalStyles } from '../../../Styles/Global';
import Footer from '../../Components/Footer/DeliveryFooter';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import client from '../../Api/client';

export default function DeliveryDashboard({ navigation }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataList, setDataList] = useState([]);

    const orders = [];

    useEffect(() => {
        console.log("Loading", loading);
        client.post('/DeliveryAgent/GetCompletedOrders', {
            uid: window.loggedUserId
        }).then((response) => {
            setData(response.data)
            response.data.map((object) => {
                orders.push(
                    {
                        key: object.order_id,
                        address: object.cAddress,
                        pAddress: object.pAddress,
                        customer: object.customer,
                        pharmacy: object.pharmacy,
                        telephone: object.cTelephone,
                        pTelephone: object.pTelephone,
                        fee: object.delivery_fee
                    }
                )
            })
            console.log(orders)
            setDataList(orders)
        });
    }, []);

    const orderList = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => {
                var cAddress = item.address
                var pAddress = item.pAddress
                var customer = item.customer
                var pharmacy = item.pharmacy
                var cTelephone = item.telephone
                var pTelephone = item.pTelephone
                var fee = item.fee
        
                navigation.navigate('Order',{cAddress,customer,pharmacy, cTelephone, pAddress, pTelephone, fee})}}>
                <View style={styles.orders}>
                    <Text style={styles.orderId}>Order ID: {item.key}</Text>
                    <Text style={styles.orderContent}>
                        <Text style={styles.orderContentTitle}>From:</Text> {item.pharmacy}{'\n'}
                        <Text style={styles.orderContentTitle}>To:</Text> {item.customer}{'\n'}
                        <Text style={styles.orderContentTitle}>Address:</Text> {item.address}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );



    return (
        <View style={globalStyles.fullPage}>
            <Navbar />
            <ScrollView style={styles.maincontainer}>
                <Image
                    style={{
                        height: 250,
                        width: null,
                    }}
                    source={require('../../Assets/Images/completed_orders.png')}
                />
                <View style={globalStyles.boxContainer}>
                    <Text style={styles.header}>Completed Orders</Text>
                    <View style={styles.ordersList}>
                        <FlatList
                            data={dataList}
                            renderItem={orderList}
                        />
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        fontFamily: 'Raleway-ExtraBold',
    },

    orders: {
        backgroundColor: '#e7e7e7',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
    },

    orderId: {
        textAlign: 'center',
        fontFamily: 'Raleway-Regular',
    },

    orderContent: {
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: 'Raleway-SemiBold',
        fontSize: 16,
        lineHeight: 30,
    },

    orderContentTitle: {
        fontFamily: 'Raleway-ExtraBold',
    },

    maincontainer: {
        marginBottom: 40,
    },

})