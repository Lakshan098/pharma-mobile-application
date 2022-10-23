import { View, Image, Animated, StyleSheet, ImageBackground, ActivityIndicator, Text, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableHighlight } from 'react-native';
import Navbar from '../../Components/Navbar/DeliveryNavbar';
import { globalStyles } from '../../../Styles/Global';
import SearchBar from "react-native-dynamic-search-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../Components/Footer/DeliveryFooter';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import React, { useState, useEffect, useCallback } from 'react';
import SideNavbar from '../../Components/sideNavbar/sideNavbar';
import client from '../../Api/client';
import { Actions } from 'react-native-router-flux';





export default function PharmacySearchPage({ navigation }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const pharmacy = [];

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState(pharmacy);

    const [visibility, showMap] = useState(false);
    const pressHandler = () => {
        showMap(!visibility);
        Actions.refresh({ key: 'dDashboard' });
    }

    useEffect(() => {
        console.log("Loading", loading);
        client.post('/User/GetOrderPlacedPharmacies', {
            uid: window.loggedUserId
        }).then((response) => {
            setData([...response.data])
            response.data.map((object) => {
                pharmacy.push(
                    {
                        key: object.uid,
                        name: object.username,
                        open_time: object.open_time,
                        close_time: object.close_time,
                        profile_pic: require('../../Assets/Images/pharmacy1.png'),
                        address: object.address,
                        longitude: 5.947822,
                        latitude: 5.947822,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                        rating: object.rating,
                    }
                )
            })
            console.log("Pharamcies", pharmacy);
            setFilteredDataSource(pharmacy);
            setMasterDataSource(pharmacy);
        });
    }, []);

    const pharmacyitems = ({ item }) => (
        <ImageBackground
            style={styles.coverImage}
            imageStyle={{ borderRadius: 10 }}
            source={item.profile_pic}
        >
            <TouchableHighlight style={styles.darkness} onPress={() =>{ 
                var name = item.name
                var address = item.address
                var key = item.key
                var openTime = item.open_time
                var closeTime = item.close_time
                var rating = item.rating

                navigation.navigate('OrdersFromPharmacy', { name, address, key, openTime, closeTime,rating })}} >
                <Text style={styles.pharmacyDetails}><Text style={styles.pharmacyName}>{item.name}</Text>{'\n'}{item.address}{'\n'}{item.open_time} - {item.close_time}</Text>
            </TouchableHighlight>

        </ImageBackground>
    );

    const mapitems = ({ item }) => (
        <Marker
            coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
            }}
            title="Lanka pharmacy"
        >
            <Image source={require('../../Assets/Images/icons8-location-64.png')}></Image>
            <Callout >
                <View style={styles.calloutcontainer}>
                    <Text><Image style={{ height: 100, width: 150 }} source={item.profile_pic} /></Text>
                    <Text style={styles.callouttext}><Text style={styles.Calloutphamacyname}>{item.name}</Text>{'\n'}{item.address}{'\n'}{item.open_time}</Text>
                </View>
            </Callout>
        </Marker>

    );


    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    // if (data == null) return (
    //     <View style={{ flex: 1, justifyContent: "center" }}>
    //         <ActivityIndicator size="large" />
    //     </View>
    // )
    return (
        <View style={globalStyles.fullPage} >
            {/* <Drawer></Drawer>   */}
            <Navbar />
            <ScrollView style={styles.maincontainer}>
                <Image
                    style={{
                        height: 250,
                        width: null,
                    }}
                    source={require('../../Assets/Images/covid.jpg')}
                />

                <View style={styles.searchContainer} >
                    <View style={styles.searchbarContainer}>
                        <SearchBar
                            placeholder="Search pharmacy"
                            value={search}
                            onChangeText={(text) => searchFilterFunction(text)}
                            onClear={(text) => searchFilterFunction('')}
                        />
                    </View>
                    <TouchableOpacity style={styles.locationIconContainer} >
                        <Icon style={styles.mapMarker} onPress={pressHandler} name="map-marker" size={22} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.mapcontainer}>
                    {visibility ?
                        <MapView style={styles.map}
                            region={{
                                latitude: 6.9010964999999995,
                                longitude: 79.86043452816955,
                                latitudeDelta: 0.115,
                                longitudeDelta: 0.1121,
                            }}
                        >
                            {pharmacy.map((item) => {
                                return (
                                    <Marker
                                        coordinate={{
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                        }}
                                        title="Lanka pharmacy"
                                    >
                                        <Image source={require('../../Assets/Images/icons8-location-64.png')}></Image>
                                        <Callout >
                                            <View style={styles.calloutcontainer}>
                                                <Text><Image style={{ height: 100, width: 150 }} source={item.profile_pic} /></Text>
                                                <Text style={styles.callouttext}><Text style={styles.Calloutphamacyname}>{item.name}</Text>{'\n'}{item.address}{'\n'}{item.open_time}</Text>
                                            </View>
                                        </Callout>
                                    </Marker>
                                );
                            })}

                        </MapView>
                        : null
                    }
                </View>

                <View style={styles.pharmacyContainer}>

                    <FlatList
                        data={filteredDataSource}
                        renderItem={pharmacyitems}
                    />

                </View>

            </ScrollView>
            <Footer></Footer>
        </View>



    )
}

const styles = StyleSheet.create({
    none: {
        display: 'none'
    },
    map: {
        height: 300,
        width: '90%'
    },
    mapcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 8,
    },
    calloutcontainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: 150,
        width: 150,

    },
    callouttext: {
        paddingLeft: 10,
        fontSize: 13,
        fontWeight: '500'
    },
    Calloutphamacyname: {
        fontSize: 15,
        fontWeight: '700',
    },
    maincontainer: {
        marginBottom: 40,
    },
    searchContainer: {
        margin: 20,
        paddingVertical: 10,
        height: 100,
        backgroundColor: '#0F587D',
        borderRadius: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    locationIconContainer: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#32BBC3',
        borderRadius: 10,
        height: 40,
        marginRight: 8
    },

    searchbarContainer: {
        justifyContent: 'center',
        width: 270,
    },

    pharmacyContainer: {
        flex: 1,
        padding: 20,
    },

    coverImage: {
        height: 150,
        borderRadius: 10,
        marginBottom: 15,
    },

    darkness: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 150,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
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
    }

})