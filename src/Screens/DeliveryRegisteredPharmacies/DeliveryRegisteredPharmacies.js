import { View, Image, StyleSheet, ImageBackground, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Navbar from '../../Components/Navbar/DeliveryNavbar';
import { globalStyles } from '../../../Styles/Global';
import SearchBar from "react-native-dynamic-search-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../Components/Footer/DeliveryFooter';
import React, { useState, useEffect, useCallback } from 'react';
import client from '../../Api/client';

export default function DeliveryRegisteredPharmacies({ navigation }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataList, setDataList] = useState([]);
    const pharmacy = [];

    useEffect(() => {
        console.log("Loading", loading);
        client.post('/DeliveryAgent/GetRegisteredPharmacies', {
            uid: window.loggedUserId
        }).then((response) => {
            setData([...response.data])
            response.data.map((object) => {
                pharmacy.push(
                    {
                        key: object.pharmacy_id,
                        name: object.username,
                        open_time: object.open_time,
                        close_time: object.close_time,
                        profile_pic: require('../../Assets/Images/pharmacy1.png'),
                        address: object.address,
                        telephone: object.contact_number,
                        rating: object.rating,
                    }
                )
            })
            console.log(pharmacy)
            setDataList(pharmacy)
        });
    }, []);
    

    const pharmacyitems = ({ item }) => (
        <ImageBackground
            style={styles.coverImage}
            imageStyle={{ borderRadius: 10 }}
            source={item.profile_pic}
        >
            <TouchableOpacity style={styles.darkness} onPress={() =>{ 
                var name = item.name
                var address = item.address
                var key = item.key
                var telephone = item.telephone
                var openTime = item.open_time
                var closeTime = item.close_time
                var rating = item.rating

                navigation.navigate('PharmacyDetails', { name, address, key, telephone, openTime, closeTime, rating })}} >
                <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>{item.name}</Text>{'\n'}{item.address}{'\n'}{item.open_time} - {item.close_time}</Text>
            </TouchableOpacity>

        </ImageBackground>
    );

    return (
        <View style={globalStyles.fullPage}>
            <Navbar />

            <View style={styles.textContainer}>
                <Text style={styles.header}>Registered pharmacies</Text>
            </View>

            <View style={styles.pharmacyContainer}>
                <ScrollView>

                <FlatList
                        data={dataList}
                        renderItem={pharmacyitems}
                    />
                </ScrollView>
            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({

    pharmacyContainer: {
        flex: 1,
        padding: 35,
        height: 100,
        marginBottom: 40,
    },

    coverImage: {
        height: 100,
        borderRadius: 10,
        marginBottom: 15,
    },

    darkness: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 100,
        borderRadius: 10,
    },

    pharmacyDetails: {
        position: 'absolute',
        color: '#fff',
        paddingLeft: 10,
        fontSize: 17,
        fontWeight: '500'
    },
    pharmacyName: {
        fontSize: 30,
        fontWeight: '700',
    },

    textContainer: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 15,
    },

    header: {
        fontSize: 25,
        fontFamily: 'Raleway-ExtraBold',
    },

})